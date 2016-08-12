// Begin Back-End Logic

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

  console.log($("#input-track").val());

  resetSelectElement();
});
// End Front-End Logic
