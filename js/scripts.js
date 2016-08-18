
////////// Begin Back-End Logic

function determineSuggestion (_answers) {
  if(Math.floor(Math.random() * 2)){
    switch (Math.floor(Math.random() * 5) + 1) {
      case 1:
        return _answers[0];
      case 2:
        return _answers[1];
      case 3:
        return _answers[2];
      case 4:
        return _answers[3];
      case 5:
        return _answers[4];
      default:
        return null;
    }
  }
  else {
    return "Reply hazy try again";
  }
}

function setTrackNameForDisplay(_parsedName){
  switch(_parsedName){
  case "css-design":
    return "CSS & Design";
  case "ruby-rails":
    return "Ruby & Rails";
  case "csharp-dotnet":
    return "C# & .NET";
  case "php-drupal":
    return "PHP & Drupal";
  case "java-android":
    return "Java & Android";
  default:
    return _parsedName;
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
  var thisTrack = "";
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
