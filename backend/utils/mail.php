<?php
class Mail {
    public static function sendMail($to, $subject, $message) {
        $headers = 'From: your_email@example.com' . "\r\n" .
                   'Reply-To: your_email@example.com' . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();
        mail($to, $subject, $message, $headers);

    }
    
}
?>
