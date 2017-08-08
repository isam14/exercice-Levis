// $.fn.tooltip.Constructor.VERSION // => "3.3.7"


// un élément portant l'id "content" existe dans contenu.html
// $("#container").load("index.html #modal-app"); 

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

