$(document).ready(function () {
  $(".navbar li").click(function (e) {
    $(".navbar li").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });
});
