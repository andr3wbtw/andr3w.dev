
// send_email.js

// Initialize EmailJS with your user ID
import * as emailjs from "emailjs-com";

(function(){
    emailjs.init("pMCPwXspdCUoIPHuj"); // Replace with your EmailJS user ID
})();

function sendEmailFunction() {
    console.log("sendEmailFunction is being called");
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Prepare email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_je6de7m", "template_ksiv7td", emailParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent!");
        }, function(error) {
            console.error("FAILED...", error);
            alert("There was an error sending your message. Please try again.");
        });
}
