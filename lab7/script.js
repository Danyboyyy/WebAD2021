$(document).ready(function() {

// Start your code from here
  const temas = ["guitar", "piano", "drums", "violin", "flute", "cello", "saxophone", "bass"]

  var btns = $('#animal-buttons');
  var subBtn = $('#add-animal');
  var input = $("#animal-input");
  var gifs = $('#animals');

  // Creación de botones
  temas.forEach(el => {
    btns.append(`<button>${el}</button>`);
  });

  // Agregar nuevo botón
  subBtn.on('click', function(e) {
    e.preventDefault();

    btns.append(`<button>${input.val()}</button>`)

    input.val("");
  });

  // Buscar gifs mediante los botones
  btns.on('click', 'button', function(e) {
    e.preventDefault();
    var search = $(this)[0].innerText;

    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=gRgiNoKnAcUvKRKkHYJY34gjqAO4Yeo9&q=${search}&limit=10`,
      success: function(res) {
        gifs.empty();

        res.data.forEach(el => {
          gifs.append(`<div class="animal-item"><h3>Rating: ${el.rating}</h3><img src='${el.images.fixed_height_still.url}' data-still='${el.images.fixed_height_still.url}' data-animated='${el.images.fixed_height.url}' data-option='still' /></div>`)
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

  // Activar o desactivar animación
  gifs.on('click', 'img', function(e) {
    e.preventDefault();

    var animate = $(this);
    var stillUrl = animate.attr('data-still');
    var animatedUrl = animate.attr('data-animated');

    if (animate.attr('data-option') === 'animated') {
      animate.attr('data-option', 'still');
      animate.attr('src', stillUrl);
    }
    else {
      animate.attr('data-option', 'animated');
      animate.attr('src', animatedUrl);
    }
  });
});
