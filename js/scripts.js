// Begin Back-End Logic
function getRecommendation(){
  return $("#input-track").val();
}
// End Back-End Logic

// Begin Front-End Logic
function resetSelectElement() {
  $("#input-track option").attr("selected", false);
  $("#input-track option:first-child").attr("selected", true);
}

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

  var thisTrack = "java-android";
  $("#" + thisTrack).addClass("highlight");

  for(var i = 0; i < 5; i++){
    if(document.getElementsByClassName("track")[i])
      thisTrack = document.getElementsByClassName("track")[i].id;
    if(thisTrack === getRecommendation()){
      $("#" + thisTrack).addClass("highlight");
    }else{
      $("#" + thisTrack).removeClass("highlight");
    }
  }

  resetSelectElement();
});
// End Front-End Logic
