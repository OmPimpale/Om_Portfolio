let sendMail = () => {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        num: document.getElementById("mobno").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("msg").value
    }

    emailjs.send("service_6sojt7z","template_pjfu4xf",parms).then(alert("Email Sent Successfully!!"));

}

window.onload = function () {
    document.getElementById('contactform').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_6sojt7z', 'template_pjfu4xf', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}