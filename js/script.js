let sendMail = () => {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        num: document.getElementById("mobno").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("msg").value
    }

    emailjs.send("service_6sojt7z","template_pjfu4xf",parms).then(alert("Email Sent!!"));

}