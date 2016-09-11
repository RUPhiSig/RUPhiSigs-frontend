$( document ).ready(function() {
 	var people = 0;
  var cap = 300;
  var peak = 0;

 	function update(){
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/party/number",
      async: false,
      success: function (data) {

        people = data["people"];

        // console.log(people);

        $("#numPeople").text(people);
        // console.log("We have "+people+" people now!");
      },
      dataType: "json",
    });

 	}
  setInterval(update, 5000);
  update();

  $("#up").click(function(){
  	$("#up").addClass("active")
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/party/add",
      success: function (data) {
        people = data["people"];
        // console.log(people);
        $("#up").removeClass("active")
        $("#numPeople").text(people);
        // console.log("We have "+people+" people now!");
      },
      dataType: "json",
    });
    if(people >= cap){
        alert("We are now at capacity. DO NOT LET MORE PEOPLE IN!");
    }
  })
  $("#down").click(function(){
  	$("#down").addClass("active")
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/party/subtract",
      success: function (data) {
        people = data["people"];
        // console.log(people);
        $("#down").removeClass("active")
        $("#numPeople").text(people);
        // console.log("We have "+people+" people now!");
      },
      dataType: "json",
    });
  })
  $("#up5").click(function(){
    $("#up5").addClass("active")
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/party/add5",
      success: function (data) {
        people = data["people"];
        // console.log(people);
        $("#up5").removeClass("active")
        $("#numPeople").text(people);
        // console.log("We have "+people+" people now!");
      },
      dataType: "json",
    });
    if(people >= cap){
        alert("We are now at capacity. DO NOT LET MORE PEOPLE IN!");
    }
  })
  $("#down5").click(function(){
    $("#down5").addClass("active")
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/party/subtract5",
      success: function (data) {
        people = data["people"];
        // console.log(people);
        $("#down5").removeClass("active")
        $("#numPeople").text(people);
        // console.log("We have "+people+" people now!");
      },
      dataType: "json",
    });
  })
  $("#count").click(function(){
  	update();
      if(people >= cap){
        alert("We are now at capacity. DO NOT LET MORE PEOPLE IN!");
      }
  })

});
