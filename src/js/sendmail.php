<?php
 
require 'PHPMailer/PHPMailerAutoload.php';
 
$mail = new PHPMailer;
 
$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'robot@devreadwrite.com';    //Логин
$mail->Password = '*******';                   //Пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
 
$mail->setFrom('robot@devreadwrite.com', 'Robot');
$mail->isHTML(true);
 
$mail->Subject = 'Тема письма';
$mail->Body    = '<b>HTML</b> версия письма';
$mail->AltBody = 'Текстовая версия письма, без HTML тегов (для клиентов не поддерживающих HTML)';
 
//Отправка сообщения
if(!$mail->send()) {
    echo 'Ошибка при отправке. Ошибка: ' . $mail->ErrorInfo;
} else {
    echo 'Сообщение успешно отправлено';
}
?>
