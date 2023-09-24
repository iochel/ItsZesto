let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    navbar.classList.toggle('open');
}







const sr = ScrollReveal ({
    distance : '25px',
    duration : 2700,
    reset : true,
  })

 // Get references to the button and product preview elements
// Function to show the product preview
function showProductPreview(id) {
    var productPreview = document.getElementById(id);
    productPreview.style.display = "block";
}

// Function to close the product preview
function closeProductPreview(id) {
    var productPreview = document.getElementById(id);
    productPreview.style.display = "none";
}

// Attach click event handlers for close buttons
document.getElementById("closePreview").addEventListener("click", function() {
    closeProductPreview("productPreview");
});

document.getElementById("closePreview2").addEventListener("click", function() {
    closeProductPreview("productPreview2");
});

document.getElementById("closePreview3").addEventListener("click", function() {
    closeProductPreview("productPreview3");
});

document.getElementById("closePreview4").addEventListener("click", function() {
    closeProductPreview("productPreview4");
});

document.getElementById("closePreview5").addEventListener("click", function() {
    closeProductPreview("productPreview5");
});

document.getElementById("closePreview6").addEventListener("click", function() {
    closeProductPreview("productPreview6");
});