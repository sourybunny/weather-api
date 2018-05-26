var url="https://fcc-weather-api.glitch.me/api/current?";
var t="F";
$(document).ready(function(){
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
  console.log(position.coords.latitude);
    var lat=position.coords.latitude;
    var lon=position.coords.longitude;
    lat="lat="+lat;
    lon="lon="+lon;
    
    $("#lat").text(lat);
    $("#lon").text(lon);
    var newurl=url+lat+"&"+lon;
   $.getJSON(newurl)
    .done(function(res){
     $("#country").text(res.sys.country);
     $("#city").text(res.name);
     $("#desc").text(res.weather[0].description)
      $("#clouds").text(res.clouds.all);
     $("#pressure").text(Math.round(res.main.pressure));
     $("#humidity").text(res.main.humidity);
     $("#wind").text(Math.round(res.wind.speed));
     $("#tmp").text(Math.round(res.main.temp)+" "+String.fromCharCode(176)+'C');
     var curtmpinc=Math.round(res.main.temp);
     $("#img").attr("src",res.weather[0].icon);
     $("#toggle").text("C");
     $("#toggle").on("click",function(){
        // t= "C"?"F":"C";
      
       $("#toggle").text(t);
       if($("#toggle").text()=='F'){
         toF(curtmpinc);
         t="C";
       }
       else{
        t="F";
         $("#tmp").text(curtmpinc+" "+String.fromCharCode(176)+'C');
       }
    
      
     })
     
     
    
       
     })
    // t="C";
});
  }
});

// cesius to fahrenheit
function toF(curtmp){
  var fah;
  fah= Math.round(parseInt(curtmp)*9/5) + 32;
  // fah=fah+" "+String.fromCharCode(176);
  $("#tmp").text(fah+" "+String.fromCharCode(176)+"F");
  // t='C';
}