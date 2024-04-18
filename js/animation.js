document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    
    const hiddenElementsL = document.querySelectorAll(".hidden-l");
    hiddenElementsL.forEach((el) => observer.observe(el));
    
    const hiddenElementsR = document.querySelectorAll(".hidden-r");
    hiddenElementsR.forEach((el) => observer.observe(el));
})