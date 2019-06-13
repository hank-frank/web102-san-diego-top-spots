$(document).ready(function() {

  $.getJSON( "data.json", function(data ) {
    var items = [];
    $.each(data, function( key, val ) {
      items.push( "<tr><td>" + val.name + "</td>" + "<td>" + val.description + "</td>" + "<td><a href='https://www.google.com/maps?q=" + val.location + "'>Link to location in Google Maps.</a></td></tr>" );
      $("#table").append(items);
    });
  // console.log(items);

//This was a way to manually enter each item individually. It was te test of if that works before I included it wihtinn my .each. 
  // $("#table").find('tbody').append( "<tr><td>" + items[1].name + "</td>" + "<td>" + items[1].description + "</td>" + "<td>" + items[1].location + "</td></tr>" );
 
  // $("#table").find('tbody').append( "<tr><td>" + items[3].name + "</td>" + "<td>" + items[3].description + "</td>" + "<td>" + items[3].location + "</td></tr>" );
  });
});