$(document).ready(function () {
  //================================================================================================================================================================================//
  //================================================================================================================================================================================//

  function makeBlocks(a) {
    for (i = 0; i < a; i++) {
      var create = $("<div style='background: rgb(155, 188, 15)' class='data' id='b" + i + "'></div>");
      $('#art-board').append(create);
    }
  };

  makeBlocks(225);
  //================================================================================================================================================================================//
  var colors = [
    [255, 0, 0]
    , [155, 188, 15]
    , [255, 255, 0]
    , [128, 255, 0]
  ];

  // generate color boxes
  function generateColors() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<img id='color-card' class='color-btn'></img>");
      var colortype = "background: rgb" + "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
      colors.toString();
      c.attr("style", colortype);
      c.attr("colorval", "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")")
      // c.attr("colorval", "" + colors[i] + "");
      $("#colors").append(c);
    };
  };
  generateColors();


  // on Click Event for adding this Color to selected color
  $("#colors").on("click", "#color-card", function () {
    var color = ($(this).attr("colorval"));

    // on click event to add selected color to art board block
    $("#art-board").on("click", ".data", function () {
      $(this).css("background", 'rgb' + color + ' ');

      // var info = $( this ).css( "background-color" );
      // console.log( "That div is style='color:" +
      //   info + ";'>" + info + "." );
    });

  });


  // buttons to show / hide the grid - strokes
  $("#btn-s-off").click(function () {
    $(".data").addClass("stroke");
  });

  $("#btn-s-on").click(function () {
    $(".data").removeClass("stroke");
  });

  //================================================================================================================================================================================//

  // ==========================================================
}); // end document ready
