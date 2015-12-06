<?php
    $first = $_POST['first-name'];
    $last = $_POST['last-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Ryan's Bio Site Contact;
    $to = 'ryanfabian21@gmail.com';
    $subject = 'Email Inquiry';

    $body = "From: $first $last\n E-Mail: $email\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) {
        echo '<p class="thank-you">Thank you for your email!</p>';
    } else {
        echo '<p class="send-error">Oops! An error occurred. Try sending your message again.</p>';
    }
}
?>
