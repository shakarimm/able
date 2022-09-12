<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/Exception.php';

$mail = new PHPMailer(true); 
$mail->CharSet = "UTF-8"; 

$name = $_POST["name"]; 
$email = $_POST["email"];
$phone = $_POST["phone"]; 
$message = $_POST["message"]; 

$body = $name . '' . $email . '' . $phone . '' . $message;
$theme = "[Заявка с формы]";

$mail->addAddress("shakarim-m@mail.ru");

$mail->Subject = $theme;
$mail->Body=$body;

$mail->send();
?>
