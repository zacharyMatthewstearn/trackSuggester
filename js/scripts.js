
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

function showPopup(_track){
  var description = "";
  $("#popup-label").text(setTrackNameForDisplay(_track));

  switch(_track){
    case "css-design":
      description =
        '<h2>CSS</h2><p>The CSS (Cascading Style Sheets) course builds on the fundamentals from Intro to Programming. It teaches students how to style web pages using complex, responsive layouts, all the while exposing them to the latest CSS tools, tricks, and features used every day by front-end developers and designers.</p><hr><h2>Design</h2><p>After establishing solid programming fundamentals in CSS and JavaScript, this course introduces students to the vast world of Design. At Epicodus we know that tools change, but principles don’t. This course focuses on maintaining a strong balance between theory and practice. Students will not only cultivate a solid foundation of basic design principles, but will also gain experience using modern, industry-standard tools such as Sketch and InVision.</p><hr><h2>Opportunities</h2><p>In a world dominated by big brands and big ideas, the need for skilled designers is greater than ever. Whether you’re an aspiring freelancer, a design-savvy front-end developer, or a budding UI/UX designer, this course is a launching point for anyone interested in designing beautiful, memorable web experiences.</p>';
      break;
    case "ruby-rails":
      description =
        '<h2>Ruby</h2><p>This course builds on the programming fundamentals from Introduction to Programming and gives students more difficult problems to solve, a more advanced set of tools to solve them with, and establishes the foundations for learning the real-world technologies used by programmers on the job.</p><hr><h2>Rails</h2><p>After establishing solid programming fundamentals in Ruby and JavaScript, this course introduces students to the Rails framework used to build interactive web applications.</p><hr><h2>Opportunities</h2><p>Ruby and Rails are typically used by younger companies and startups, especially for building interactive web applications. Portland companies using Ruby and Rails who have hired Epicodus graduates include <a target="_blank" href="http://newrelic.com/">New Relic</a>,&nbsp;<a target="_blank" href="https://www.livingsocial.com/">LivingSocial</a>, and <a target="_blank" href="https://www.spendwellhealth.com/">SpendWell</a>.</p>';
      break;
    case "csharp-dotnet":
      description =
        '<h2>C#</h2><p>This course builds on the programming fundamentals from Introduction to Programming and gives students more difficult problems to solve, a more advanced set of tools to solve them with, and establishes the foundations for learning the real-world technologies used by programmers on the job.</p><hr><h2>.NET</h2><p>After establishing solid programming fundamentals in C# and JavaScript, this course introduces students to the .NET framework used by many large enterprise organizations.&nbsp;</p><hr><h2>Opportunities</h2><p>C# and .NET are typically used by larger enterprises, government agencies, and companies serving enterprise and government clients.&nbsp;Portland companies using C# and .NET who have hired Epicodus graduates include <a target="_blank" href="http://www.windsorsolutions.com/">Windsor</a>&nbsp;and <a target="_blank" href="http://www.incomm.com/">Incomm</a>.</p>';
      break;
    case "php-drupal":
      description =
        '<h2>PHP</h2><p>Coming Soon!</p><hr><h2>Drupal</h2><p>Coming Soon!</p><hr><h2>Opportunities</h2><p>Coming Soon!</p>';
      break;
    case "java-android":
      description =
        '<h2>Java</h2><p>Coming Soon!</p><hr><h2>Android</h2><p>Coming Soon!</p><hr><h2>Opportunities</h2><p>Coming Soon!</p>';
      break;
    default:
      break;
  }

  $("#popup .modal-body").html("");
  $("#popup .modal-body").append(description);
  $("#popup").modal()
}

$("form#survey-form").submit(function(event){
  event.preventDefault();
  var inputs = collectInputs(5);
  var suggestion = determineSuggestion(inputs);
  displaySuggestionText(suggestion);
  highlightSuggestion(suggestion);
  $("#survey").modal("hide");
});

$("div.track").click(function(){
  showPopup(this.id);
});
