$(document).ready(function(){
    var currentIndex = 0;
    var slides = $(".slider img");
    var totalSlides = slides.length;

    // Function to show the current slide
    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    // Function to show next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Function to show previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Auto slide after 5 seconds
    setInterval(nextSlide, 5000);

    // Event listener for next button
    $(".next").click(function(){
        nextSlide();
    });

    // Event listener for previous button
    $(".prev").click(function(){
        prevSlide();
    });
});
