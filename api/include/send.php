<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);
    
    // Enable debugging for testing
    // $mail->SMTPDebug = 2; 
    
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'shivampanday9753@gmail.com';
    $mail->Password = 'pmlslljzvgzhsaqj';
    $mail->SMTPSecure = 'tls'; // Use TLS
    $mail->Port = 587; // Gmail SMTP port

    $mail->setFrom('shivampanday9753@gmail.com', 'Ace Taekwondo & Coaching Services'); // Replace with your name
    $mail->addAddress($_POST["email"]); // Add recipient email address
    $mail->isHTML(true);

    // Set subject and body
    $mail->Subject = "New Inquiry from " . $_POST["first_name"];
    $mail->Body = "First Name: " . $_POST["first_name"] . "<br>" .
                  "Last Name: " . $_POST["last_name"] . "<br>" .
                  "Age: " . $_POST["age"] . "<br>" .
                  "Address: " . $_POST["address"] . "<br>" .
                  "Phone: " . $_POST["phone"];
    
    try {
        $mail->send();
        echo "<script>alert('Email sent successfully');</script>";
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
}
?>


 <?php
//  ini_set('SMTP', 'smtp.gmail.com');
//  ini_set('smtp_port', 587);
//             // if "email" variable is filled out, send email
//             if (isset($_POST['send'])) {

//             //Email information
//            $to = "shivampanday9753@gmail.com";
//            $first_name =$_POST['first_name'];
//            $last_name =$_POST['last_name'];
//            //$age = $_POST['age'];
//            //$address = $_POST['address'];
//            $phone = $_POST['phone'];
//            $from = $_POST['email'];
//            $headers = "From: $from";

//             //Send email
//            mail($to, $first_name, $last_name,$headers);

//             //Email response
//             //echo "Thank you for contacting us!"; }
//             //if "email" variable is not filled out, display the form
//            //   else {
//            }

            
  ?>