//TODO: Now that the grid is showing up, it's time to adjust the size so that more squares can fit on the screen. The bigger problem, however, is that elements are only being added every time the size form is submitted; it should be made so that the canvas is replaced rather than augmented.

//TODO: Explore using individual numbers for each square by having a counter in the outermost loop that is incremented in the innermost loop.

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

  for(var m=0; m<height; m++) {
    $('#pixel_canvas').append("<tr class='row_"+m+"'></tr>");
    $('.row_'+m).css('height', '100px');
    $('.row_'+m).css('border', '4px solid black');

    for(var n=0; n<height; n++) {
      $('.row_'+m).append("<td class='column_"+n+"'></tr>");
      $('.column_'+n).css('width', '100px');
      $('.column_'+n).css('border', '4px solid black');
    }
  }
}
