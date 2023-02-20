(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
})(jQuery);

$(document).ready(function () {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/users"
  ) {
    $(".linkUsers").css("color", "#f8b739");
  } else $(".linkSalary").css("color", "#f8b739");
});
