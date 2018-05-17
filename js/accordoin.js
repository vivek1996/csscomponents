$(".accordion-head").on("click", function() {
  $(this).toggleClass("active");

  $(this)
    .siblings()
    .slideToggle();
});
