$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
​
  $('.modal').on('hidden.bs.modal', function (e) {
    const url = $(e.currentTarget).data('videoUrl');
    $(e.currentTarget).find('iframe').attr('src', '');
  });
​
  $('.modal').on('show.bs.modal', function (e) {
    const url = $(e.currentTarget).data('videoUrl');
    $(e.currentTarget).find('iframe').attr('src', url);
  })
});
