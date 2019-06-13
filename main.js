$(document).ready(function() {
// template for ajax function
$.ajax({
    dataType: 'json',
    url: url,
    data: data,
    success: success
  });
});

//example of retreiving .json data 
var mydata = JSON.parse(data);
alert(mydata[0].name);
alert(mydata[0].description);
alert(mydata[0].location);
alert(mydata[1].name);
alert(mydata[1].description);
alert(mydata[1].location);
alert(mydata[2].name);
alert(mydata[2].description);
alert(mydata[2].location);
alert(mydata[3].name); 
alert(mydata[3].description);
alert(mydata[3].location);
alert(mydata[4].name);
alert(mydata[4].description);
alert(mydata[4].location);
alert(mydata[5].name);
alert(mydata[5].description);
alert(mydata[5].location);
alert(mydata[6].name);
alert(mydata[6].description);
alert(mydata[6].location);
alert(mydata[7].name);
alert(mydata[7].description);
alert(mydata[7].location);
alert(mydata[8].name);
alert(mydata[8].description);
alert(mydata[8].location);