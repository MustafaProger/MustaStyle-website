<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$budget = $_POST['budget'];
$additional_info = $_POST['additional-info'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'diertojiev@yandex.ru';                 // Наш логин
$mail->Password = 'bxkmhzaitfxiagzs';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('diertojiev@yandex.ru', 'MystaStyle');   // От кого письмо 
$mail->addAddress('todzievdier@gmail.com', 'User');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML


$mail->Subject = $name . ' хочет проконсультироваться';
$mail->Body    = '
	Имя: ' . $name .  '<br> 
    E-mail: ' . $email . ' <br>
    Номер телефона: ' . $phone .' <br>
    Бюджет: ' . $budget . ' <br>
    Доп. информация: ' . $additional_info . "";


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>