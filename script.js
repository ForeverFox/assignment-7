//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

var message1 = "";
var message2 = "";
var articleClassGenerous = document.getElementsByTagName("article");
var donate = document.createElement("h3");
var donateText = document.createTextNode("");
donate.appendChild(donateText);
SideNav.appendChild(donate);

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

    var donatePrompt = prompt("How much would you like to donate?");

    if (donatePrompt < 100) {
      donate = "Thank you for your donation of $" + donatePrompt + "!"
    } else if (donatePrompt >= 100) {
      donate = "Thank you for your very generous donation!";
      //donate.getAttribute("color");
      //donate.setAttribute("style", "color: #DB152C;"); 
    } else {
      donate = "Please try again."; 
    }

    for (i = 0; i < articleClassGenerous.length; i++) {
      if (donatePrompt >= 100) {
        articleClassGenerous[i].className = ("generous-donation");
      }
   }

    document.getElementById("SideNav").innerHTML = donate;
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  if(speechesArray[0].yearIsBCE === true){
    message1 = 'This speech took place before the common era.';
  }else{
    message1 = 'This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    message2 = 'This is the oldest speech on the page.';
  }
  if(speechesArray[0].year === newest){
    message2 = 'This is the most recent speech on the page.';
  } if(speechesArray[0].year !== oldest && speechesArray[0].year !== newest) {
    message2 = "";
  };

  document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + ".</p>" + "<p>" + message1 + "</p>" + "<p>" + message2 + "</p>";
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  if(speechesArray[1].yearIsBCE === true){
    message1 = 'This speech took place before the common era.';
  }else{
    message1 = 'This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    message2 ='This is the oldest speech on the page.';
  }
  if(speechesArray[1].year === newest){
    message2 ='This is the most recent speech on the page.';
  };

  document.getElementById("ConsoleDisplay").innerHTML = '<p>This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + ".</p>" + "<p>" + message1 + "</p>" + "<p>" + message2 + "</p>";
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  if(speechesArray[2].yearIsBCE === true){
    message1  = 'This speech took place before the common era.';
  }else{
    message1  = 'This speech took place during the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    message2  = 'This is the oldest speech on the page.';
  }
  if(speechesArray[2].year === newest){
    message2  = 'This is the most recent speech on the page.';
  };

  document.getElementById("ConsoleDisplay").innerHTML ='This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + ".</p>" + "<p>" + message1 + "</p>" + "<p>" + message2 + "</p>";
});
