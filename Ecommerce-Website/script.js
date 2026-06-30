/* ==========================================
   SHOP EASE - JAVASCRIPT
========================================== */

/* -------------------------------
   Cart Counter
--------------------------------*/

let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartDisplay = document.getElementById("cart-count");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        if (!button.classList.contains("added")) {

            cartCount++;

            cartDisplay.innerHTML = cartCount;

            button.innerHTML = "✓ Added";

            button.style.background = "#16a34a";

            button.style.color = "#fff";

            button.classList.add("added");

        }

    });

});

/* -------------------------------
   Show / Hide Product Details
--------------------------------*/

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {

    button.addEventListener("click", function () {

        const details = button.nextElementSibling;

        if (details.style.display === "block") {

            details.style.display = "none";

            button.innerHTML = "Show Details";

        }

        else {

            details.style.display = "block";

            button.innerHTML = "Hide Details";

        }

    });

});

/* -------------------------------
   Contact Form Validation
--------------------------------*/

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Please enter a valid email address.");

        return;

    }

    alert("Message sent successfully!");

    form.reset();

});

/* -------------------------------
   Scroll To Top Button
--------------------------------*/

const topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

};

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* -------------------------------
   Footer Current Year
--------------------------------*/

document.getElementById("year").innerHTML = new Date().getFullYear();

/* -------------------------------
   Smooth Navigation
--------------------------------*/

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* -------------------------------
   Search Box (UI Filter)
--------------------------------*/

const searchBox = document.querySelector(".search-section input");

const products = document.querySelectorAll(".product-card");

searchBox.addEventListener("keyup", function () {

    const value = searchBox.value.toLowerCase();

    products.forEach(product => {

        const name = product.querySelector("h3").innerText.toLowerCase();

        const category = product.querySelector(".category").innerText.toLowerCase();

        if (name.includes(value) || category.includes(value)) {

            product.style.display = "block";

        }

        else {

            product.style.display = "none";

        }

    });

});

/* -------------------------------
   Welcome Alert
--------------------------------*/

window.onload = function () {

    let hour = new Date().getHours();

    if (hour < 12) {

        console.log("Good Morning!");

    }

    else if (hour < 18) {

        console.log("Good Afternoon!");

    }

    else {

        console.log("Good Evening!");

    }

};