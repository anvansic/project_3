// Select color input

// Select size input
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let height = $('#input_height').val();
  let width = $('#input_width').val();

  $('#input_height').attr('value', height);
  $('#input_width').attr('value', width);

  $('#pixel_canvas').css('width', width*32);
  $('#pixel_canvas').css('height', height*32);

  //TODO Change this so that the grid actually shows up on the page.
  for(var j=0; j<height; j++) {
    $('#pixel_canvas').add('tr');
    $('tr').addClass('row_'+j);
    $('.row_'+j).css('border', '2px solid black');

    for(var i=0; i<width; i++) {
      $('.row_'+j).add('col');
      $('col').addClass('column_'+i);
      $('.column_'+i).css('border', '2px solid black');
    }
  }
}
