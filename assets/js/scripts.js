$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $('.modal').on('hidden.bs.modal', function (e) {
    const div = $(e.currentTarget).find('div.embed-responsive')[0];
    div.innerHTML = '';
  });

  $('.modal').on('show.bs.modal', function (e) {
    const div = $(e.currentTarget).find('div.embed-responsive')[0];
    const iframe = document.createElement('iframe');

    iframe.setAttribute('class', 'embed-responsive-item');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.embed + '?rel=0&showinfo=0&autoplay=1');

    div.appendChild( iframe );
  }) 
});
