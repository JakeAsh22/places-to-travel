function Place(location, thingsToDo, timeOfYear, notes) {
  this.location = location;
  this.thingsToDo = thingsToDo;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


var hawaii = new Place("Hawaii", ["Beach"], "Winter", "Don't surf at night!");
var mexico = new Place("Mexico", ["Beach, ", "Bull Fighting, ","Ancient Ruins"], "Fall", "Avoid the Cartels!");
var vegas = new Place("Las Vegas", ["Casinos, ", "Shows, ", "The Strip"],"Spring", "Don't steal Mike Tyson's tiger!");
var alaska = new Place("Alaska", ["Fishing, ", "Hiking, ", "Hunting, "], "Summer","Watch out for bears!");


$(document).ready(function(){

  $("#hawaii-list-item").click(function(){
    $(".card").show();
    $("#location-header").empty().append(hawaii.location);
    $("#things-to-do").empty().append(hawaii.thingsToDo);
    $("#time-of-year").empty().append(hawaii.timeOfYear);
    $("#helpful-tips").empty().append(hawaii.notes);
  });

  $("#mexico-list-item").click(function(){
    $(".card").show();
    $("#location-header").empty().append(mexico.location);
    $("#things-to-do").empty().append(mexico.thingsToDo);
    $("#time-of-year").empty().append(mexico.timeOfYear);
    $("#helpful-tips").empty().append(mexico.notes);
  });

  $("#vegas-list-item").click(function(){
    $(".card").show();
    $("#location-header").empty().append(vegas.location);
    $("#things-to-do").empty().append(vegas.thingsToDo);
    $("#time-of-year").empty().append(vegas.timeOfYear);
    $("#helpful-tips").empty().append(vegas.notes);
  });

  $("#alaska-list-item").click(function(){
    $(".card").show();
    $("#location-header").empty().append(alaska.location);
    $("#things-to-do").empty().append(alaska.thingsToDo);
    $("#time-of-year").empty().append(alaska.timeOfYear);
    $("#helpful-tips").empty().append(alaska.notes);
  });

});
