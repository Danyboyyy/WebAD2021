$(".agregar").on("click", function(e) {
  e.preventDefault();

  var elem = $("#newText");
  
  $(".Lista").append(`<div class="lis"><li class="itemShop">${elem.val()}</li><button class="checar">Check</button><button class="del">Delete</button></div>`)
  
  elem.val("");
});

$(".Lista").on("click", ".checar", function(e) {
  e.preventDefault();

  var elem = $(this).parent();

  elem.toggleClass("chec");
});

$(".Lista").on("click", ".del", function(e) {
  e.preventDefault();

  var elem = $(this).parent();

  elem.remove();
});