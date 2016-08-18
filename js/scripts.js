
////////// Begin Back-End Logic

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

function determineSuggestion (answers) {
  var baseForAnswer = Math.floor(Math.random() * 5) + 1;
  switch (baseForAnswer) {
    case 1:
      return answers[0];
    case 2:
      return answers[1];
    case 3:
      return answers[2];
    case 4:
      return answers[3];
    case 5:
      return answers[4];
    default:
      return null;
  }
}



////////// Front-End Logic

function collectInputs(_numOfQs){
  var answers = [];
  for(var i = 1; i <= _numOfQs; i++){
    answers.push($("#input-q" + i + " option:selected").val());
  }
  return answers;
}

function displaySuggestionText(_suggestion) {
  if(_suggestion){
    $("#recommendation").text(setTrackNameForDisplay(_suggestion));
    $(".initially-showing").hide();
    $(".initially-hidden").show();
  }else{
    $(".initially-showing").show();
    $(".initially-hidden").hide();
  }
}

function highlightSuggestion(_suggestion) {
  for(var i = 0; i < 5; i++){
    if(document.getElementsByClassName("track")[i]) {
      thisTrack = document.getElementsByClassName("track")[i].id;
    }
    if(thisTrack === _suggestion){
      $("#" + thisTrack).addClass("highlight");
    }else{
      $("#" + thisTrack).removeClass("highlight");
    }
  }
}

$("form#survey-form").submit(function(event){
  event.preventDefault();
  var inputs = collectInputs(5);
  var suggestion = determineSuggestion(inputs);
  displaySuggestionText(suggestion);
  highlightSuggestion(suggestion);
  $("#survey").modal("hide");
});
