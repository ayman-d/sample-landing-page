$(".menu-btn").click(function (e) {
  e.preventDefault();
  $(".menu").toggle();
  $(".buttons").toggle();
  $(".menu-divider").toggle();
});
