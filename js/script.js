// ==== navbar code ====

// ==== progress bar ====
$(document).ready(function () {
    $('.progress-value > span').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


// ====skill icon ====
let icon1 = () => {
    let animate = document.getElementById("skillicon1");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
    // animate.style.transform = "";
}

let iconRemove1 = () => {
    let animate = document.getElementById("skillicon1");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon2 = () => {
    let animate = document.getElementById("skillicon2");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove2 = () => {
    let animate = document.getElementById("skillicon2");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon3 = () => {
    let animate = document.getElementById("skillicon3");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.2)";
}

let iconRemove3 = () => {
    let animate = document.getElementById("skillicon3");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon4 = () => {
    let animate = document.getElementById("skillicon4");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove4 = () => {
    let animate = document.getElementById("skillicon4");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon5 = () => {
    let animate = document.getElementById("skillicon5");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove5 = () => {
    let animate = document.getElementById("skillicon5");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon6 = () => {
    let animate = document.getElementById("skillicon6");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove6 = () => {
    let animate = document.getElementById("skillicon6");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon7 = () => {
    let animate = document.getElementById("skillicon7");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.35)";
}

let iconRemove7 = () => {
    let animate = document.getElementById("skillicon7");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon8 = () => {
    let animate = document.getElementById("skillicon8");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove8 = () => {
    let animate = document.getElementById("skillicon8");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon9 = () => {
    let animate = document.getElementById("skillicon9");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.2)";
}

let iconRemove9 = () => {
    let animate = document.getElementById("skillicon9");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon10 = () => {
    let animate = document.getElementById("skillicon10");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove10 = () => {
    let animate = document.getElementById("skillicon10");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon11 = () => {
    let animate = document.getElementById("skillicon11");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove11 = () => {
    let animate = document.getElementById("skillicon11");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon12 = () => {
    let animate = document.getElementById("skillicon12");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove12 = () => {
    let animate = document.getElementById("skillicon12");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon13 = () => {
    let animate = document.getElementById("skillicon13");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove13 = () => {
    let animate = document.getElementById("skillicon13");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}

let icon14 = () => {
    let animate = document.getElementById("skillicon14");
    animate.style.transition = "all .8s ease";
    animate.style.transform = "rotateY(360deg) scale(1.3)";
}

let iconRemove14 = () => {
    let animate = document.getElementById("skillicon14");
    animate.style.transition = "all 1.2s ease";
    animate.style.transform = "rotateY(-360deg)";
}


// ==== email integration code ====
// Function to send an email using EmailJS
let sendMail = () => {
    // Collect form input values
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        num: document.getElementById("mobno").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("msg").value
    };

    // Check if any input field is empty
    if (parms.name === "" || parms.email === "" || parms.num === "" || parms.subject === "" || parms.message === "") {
        alert("Enter Valid Information!!!");
        return false; // Prevent sending if any field is empty
    }

    // Send email using EmailJS service
    emailjs.send("service_6sojt7z", "template_pjfu4xf", parms)
        .then(() => {
            alert("Email Sent Successfully!!"); // Show success message after email is sent
        })
        .catch((error) => {
            console.error('Email sending failed:', error); // Log any error
            alert("Failed to send email. Please try again.");
        });
}

// Event listener for form submission
window.onload = function () {
    document.getElementById('contactform').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        sendMail(); // Call sendMail function on form submit
    });
}
