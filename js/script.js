// ==== navbar code ====
let hasAnimated = false;
const navbar = document.getElementById("nav");
const stickyOffset = navbar.offsetTop;

window.addEventListener("scroll", debounce(() => {
    if (window.scrollY > stickyOffset) {
        navbar.classList.add("sticky");

        if (!hasAnimated) {
            navbar.classList.add("sticky-animate");
            hasAnimated = true;
        }
    } else {
        navbar.classList.remove("sticky", "sticky-animate");
        hasAnimated = false;
    }
}, 100));

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ==== progress bar ====
$(document).ready(function () {
    $('.progress-value > span').each(function () {
        const $this = $(this);
        const targetValue = parseInt($this.text(), 10) || 0; // Ensure the text is a number

        $this.prop('Counter', 0).animate(
            { Counter: targetValue },
            {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $this.text(Math.ceil(now));
                }
            }
        );
    });
});


// ==== skill icon ====
document.addEventListener("DOMContentLoaded", function () {
    const progressContainers = document.querySelectorAll(".progress-container");

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                fillProgress(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressContainers.forEach(container => observer.observe(container));

    function fillProgress(container) {
        let progressFill = container.querySelector(".progress-fill");
        let progressText = container.querySelector(".progress-text");
        let targetValue = container.getAttribute("data-value");

        let width = 0;
        let interval = setInterval(() => {
            if (width >= targetValue) {
                clearInterval(interval);
                if (width == 100) {
                    progressFill.classList.add("complete");
                }
            } else {
                width++;
                progressFill.style.width = width + "%";
                progressText.innerText = width + "%";
            }
        }, 20);
    }
});


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
