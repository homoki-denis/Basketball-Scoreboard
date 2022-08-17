$(function () {
  let homeScore = 0;
  let guestScore = 0;

  $(".buttons .home-btn-1").click(function () {
    homeScore += 1;
    $(".home-score").html(homeScore);
  });

  $(".buttons .home-btn-2").click(function () {
    homeScore += 2;
    $(".home-score").text(homeScore);
  });

  $(".buttons .home-btn-3").click(function () {
    homeScore += 3;
    $(".home-score").text(homeScore);
  });

  $(".buttons .guest-btn-1").click(function () {
    guestScore += 1;
    $(".guest-score").text(guestScore);
  });

  $(".buttons .guest-btn-2").click(function () {
    guestScore += 2;
    $(".guest-score").text(guestScore);
  });

  $(".buttons .guest-btn-3").click(function () {
    guestScore += 3;
    $(".guest-score").text(guestScore);
  });
});
