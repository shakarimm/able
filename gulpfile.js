"use strict";

const { isPage, maxIndexHtmlSizeB } = require('./gulp.config');

const gulp = require("gulp"),
	rollup = require('gulp-rollup'),
	concat = require('gulp-concat'),
	svgstore = require('gulp-svgstore'),
	rename = require('gulp-rename'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
	path = require('path'),
	fs = require('fs'),
	pug = require('gulp-pug'),
	classprefix = require('gulp-class-prefix'),
	htmlclassprefix = require('gulp-html-prefix'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browsersync = require("browser-sync"),
	prettifyHtml = require('gulp-html-prettify');

let dist = "./dist/",
	src = "./src/",
	prefix = 'tmpl-hh__';

let getTemplateType = () => isPage ? "page" : "vacancy";

gulp.task("concat-html", () => {
	let svgSprite = '';
	if(fs.existsSync(dist + "icons.svg")){
		svgSprite = fs.readFileSync(dist + "icons.svg").toString();
	}

	return gulp
		.src([
			src + "template/" + getTemplateType() + "/template-start.html",
			dist + "index.html",
			src + "template/" + getTemplateType() + "/template-end.html",
		])
		.pipe(concat('index.html'))
		.pipe(replace(/(<!--\sSVG\sSPRITE\sPLACE\s-->)/s, svgSprite))
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream())
		.on("end", browsersync.reload);
});

gulp.task("compile-html", () => {
	return gulp
		.src(src + getTemplateType() + ".pug")
		.pipe(pug({
			data: {
				"templateType": getTemplateType()
			}
		}))
		.pipe(htmlclassprefix(prefix))
		.pipe(rename({
			basename: "index"
		}))
		.pipe(gulp.dest(dist));
});

gulp.task("svg-min", () => {
	return gulp
		.src(src + "icons/*.svg")
		.pipe(rename({
			prefix: prefix + 'icon-'
		}))
		.pipe(cheerio({
			run: function ($, file) {
				$('[style]').removeAttr('style');

				let filename = path.basename(file.relative, path.extname(file.relative));
				let replaceUrl = function(object, attribute){
					let newUrl = object.attr(attribute).replace(/url\(#(.+)\)/g, 'url(#' + filename + '_$1)');
					object.attr(attribute, newUrl);
				};
				$('[clip-path]').each(function (index, object) {
					replaceUrl($(object), 'clip-path');
				});
				$('[fill^="url("]').each(function (index, object) {
					replaceUrl($(object), 'fill');
				});
				$('[filter^="url("]').each(function (index, object) {
					replaceUrl($(object), 'filter');
				});

				$('[id]').each(function (index, object) {
					let newId = filename + "_" + $(object).attr('id');
					$(object).attr('id', newId);
				});
			},
			parserOptions: {
				xmlMode: true
			}
		}))
		.pipe(svgmin({
			cleanupIDs: {
				minify: true
			},
			js2svg: {
				pretty: true
			}
		}))
		.pipe(svgstore({
			inlineSvg: true,
			formatting: {
				indent_size: 10
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('svg').attr({
					style: 'display: block !important; height: 0 !important; width: 0 !important;',
					width: '0',
					height: '0'
				});
			},
			parserOptions: {
				xmlMode: true
			}
		}))
		.pipe(replace(/(<svg[^>]+>)\s*/g, '$1\n'))
		.pipe(replace(/(<\/.*>)\s*(<symbol[^>]+>|<\/svg>)/g, '$1\n$2'))
		.pipe(gulp.dest(dist))
		.on("end", browsersync.reload);
});

gulp.task("copy-js-libs", () => {
	return gulp
		.src(src + 'js/libs/**/*.js')
		.pipe(gulp.dest(dist + 'js/libs'));
});

gulp.task("copy-template-css", () =>{
	return gulp
		.src(src + 'template/css/*')
		.pipe(gulp.dest(dist + 'css/template'))
});

gulp.task("build-js", () => {
	return gulp
		.src(src + "js/script.js")
		.pipe(rollup({
			allowRealFiles: true,
			input: src + 'js/script.js',
			format: 'iife'
		}))
		.pipe(gulp.dest(dist + 'js'))
		.on("end", browsersync.reload);
});

gulp.task("copy-images", () => {
	return gulp
		.src(src + "images/**/*.*")
		.pipe(gulp.dest(dist + "images"))
		.on("end", browsersync.reload);
});

gulp.task("watch", () => {
	gulp.watch(src + "**/*.pug", gulp.series("compile-html", "concat-html"));
	gulp.watch(src + "images/**/*.*", gulp.parallel("copy-images"));
	gulp.watch(src + "js/**/*.js", gulp.parallel("build-js"));
	gulp.watch(src + "js/libs**/*.js", gulp.parallel("copy-js-libs"));
	gulp.watch(src + "css/**/*.scss", gulp.parallel("build-css"));
	gulp.watch(src + "icons/**/*.svg", gulp.series("svg-min", "compile-html", "concat-html"));

	browsersync.init({
		server: dist,
		port: 4000,
		notify: true
	});
});

gulp.task("build-css", () => {
	return gulp
		.src([
			src + "css/" + getTemplateType() + "/main.scss",
			src + "css/" + getTemplateType() + "/media.scss"
		])
		.pipe(sass())
		.pipe(classprefix(prefix))
		.pipe(replace(new RegExp(prefix + "b-vacancy-desc"), 'b-vacancy-desc'))
		.pipe(autoprefixer())
		.pipe(gulp.dest(dist + 'css'))
		.on("end", browsersync.reload);
});

gulp.task("build-hh", () => {
	return gulp
		.src(dist + "index.html")
		.pipe(replace(/.*(<!--\sSTART\sTEMPLATE\s-->)/s, ''))
		.pipe(replace(/(<!--\sEND\sTEMPLATE\s-->).*/s, ''))
		.pipe(replace(/&nbsp;/sg, '&#160;'))
		.pipe(replace(/&([^#])/sg, '&#38;$1'))
		.pipe(cheerio({
			run: ($) => {
				let mainCss = fs.readFileSync(dist + "css/main.css").toString();
				let mediaCss = fs.readFileSync(dist + "css/media.css").toString();
				let scriptJs = fs.readFileSync(dist + "js/script.js").toString();
				let scriptJsLibs = "";

				let styleHtml = "<style>\n";
				styleHtml += mainCss + "\n\n" + mediaCss;
				styleHtml += "\n</style>";
				$.root().prepend(styleHtml);

				fs.readdirSync(dist + "js/libs").forEach(file => {
					if (!/\.js$/.test(file)) return;
					let pastLib = true;
					if (file === 'swiper.min.js') {
						pastLib = /new\s+VSwiper/m.test(scriptJs);
					}
					if (pastLib) {
						scriptJsLibs += "// Lib: " + file + "\n";
						scriptJsLibs += fs.readFileSync(dist + "js/libs/" + file).toString() + "\n\n";
					}
				});

				scriptJs = scriptJs.replace(/\'use\sstrict\'/gm, scriptJsLibs + "'use strict'");

				let scriptHtml = "<script>//<![CDATA[\n"
				scriptHtml += scriptJs + "\n";
				scriptHtml += "//]]></script>";
				$.root().append(scriptHtml);
			},
			parserOptions: {
				xmlMode: false,
				decodeEntities: false
			}
		}))
		.pipe(replace(/<br>/mg, '<br/>'))
		.pipe(replace(/<img([^>]*)>/mg, '<img$1/>'))
		.pipe(replace(/<!-- START VACANCY DESCRIPTION -->.*<!-- END VACANCY DESCRIPTION -->/m, '<hht:vacancy-description/>'))
		.pipe(prettifyHtml({
			indent_char: ' ',
			indent_size: 4
		}))
		.pipe(gulp.dest(dist))
		.on('end', () => {
			fs.readdirSync(dist).forEach(file => {
				if (file !== "index.html") {
					fs.rmSync(dist + file, {
						recursive: true
					});
				}
			});

			const indexFileSizeB = fs.statSync(dist + "index.html").size;
			if (indexFileSizeB > maxIndexHtmlSizeB) {
				throw new Error(
					"Size of index.html more than " + (maxIndexHtmlSizeB / 1000) + "kb."
					+ " index.html file size: " + (indexFileSizeB / 1000) + "kb"
				);
			}
		});
});

gulp.task("vc", () => {
	return gulp
		.src("gulp.config.js")
		.pipe(replace(/isPage\s*=\s*true/, 'isPage = false'))
		.pipe(gulp.dest('.'));
});

gulp.task("page", () => {
	return gulp
		.src("gulp.config.js")
		.pipe(replace(/isPage\s*=\s*false/, 'isPage = true'))
		.pipe(gulp.dest('.'));
});

gulp.task("build-template", gulp.series("svg-min", "copy-template-css", "compile-html", "concat-html", "copy-images", "build-js", "build-css", "copy-js-libs"));
gulp.task("default", gulp.series("build-template", "watch"));
gulp.task("build", gulp.series(
	async () => { dist = "./build/" },
	"build-template", "build-hh"
));

