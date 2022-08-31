function closest(element, selector) {
	if (element.closest) {
		return element.closest(selector);
	}
	function closest(parentElement, selector) {
		if (!parentElement) return null;
		if (parentElement.matches(selector)) return parentElement;
		if (!parentElement.parentElement) return null;
		return closest(element.parentElement, selector);
	}

	return closest(element.parentElement, selector);
}

export default closest;
