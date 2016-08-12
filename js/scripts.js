// Begin Back-End Logic
function getRecommendation(){

  return $("#input-track").val(); // PROTOTYPE
}

function setTrackNameForDisplay(parsedName){
  if(parsedName === "css-design"){
    parsedName = "CSS & Design";
  }else if(parsedName === "ruby-rails"){
    parsedName = "Ruby & Rails";
  }else if(parsedName === "csharp-dotnet"){
    parsedName = "C# & .NET";
  }else if(parsedName === "php-drupal"){
    parsedName = "PHP & Drupal";
  }else if(parsedName === "java-android"){
    parsedName = "Java & Android";
  }
  return parsedName;
}
// End Back-End Logic

// Begin Front-End Logic
$("#btn-survey").click(function(){
  $("#survey").show();
});

$("#btn-clear").click(function(){
  resetSelectElement();
});

$("#btn-submit").click(function(){
  $("#survey-form").trigger("submit");
});

$("#survey-form").submit(function(event){
  event.preventDefault();

  var thisTrack;
  $("#" + thisTrack).addClass("highlight");

  for(var i = 0; i < 5; i++){
    if(document.getElementsByClassName("track")[i]) {
      thisTrack = document.getElementsByClassName("track")[i].id;
    }
    if(thisTrack === getRecommendation()){
      $("#" + thisTrack).addClass("highlight");
    }else{
      $("#" + thisTrack).removeClass("highlight");
    }
  }

  if($("select#input-track option:selected").val()){
    $("#recommendation").text(setTrackNameForDisplay($("select#input-track option:selected").val()));
    $(".initially-showing").hide();
    $(".initially-hidden").show();
  }else{
    $(".initially-showing").show();
    $(".initially-hidden").hide();
  }

  $("#input-track option").attr("selected", false);
  $("#input-track option:first-child").attr("selected", true);
});
// End Front-End Logic
