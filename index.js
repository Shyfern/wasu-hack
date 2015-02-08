// Check if the user is ready to play!
confirm("I am ready to play!");

confirm("You're a private investigator enjoying your vacation at the Smithsonian.");
confirm("The Hope Diamond is stolen during the day,\n a security guard notices that the diamond is missing and presses the alarm, \n locking everyone inside the building for further investigation.");
confirm("You're given the choice to either investigate who stole the Hope Diamond or call the police and it take hours to get out of the museum.");

var userAnswer = "";
var errorMsg = "Bad.";

var isValid = false;
do
{
  userAnswer = prompt("You can either\n Investigate\n Call the police");

  isValid = userAnswer === "Investigate" || userAnswer === "Call the police";
  if (!isValid)
  {
    alert(errorMsg);
  }
} while(!isValid);

if (userAnswer === "Investigate") {

    isValid = false;
    do
    {
      userAnswer = prompt("You can either\n Make a list of likely suspects\n Check security footage");

      isValid = userAnswer === "Make a list of likely suspects" || userAnswer === "Check security footage";
      if (!isValid)
      {
        alert(errorMsg);
      }
    } while(!isValid);

    if (userAnswer === "Make a list of likely suspects"){
      prompt("You have to investigate hundreds of people \n How would you like to narrow it down?");
    }
    else if (userAnswer === "Check security footage"){
      alert("derp HODOR derp");
    }
}
else if (userAnswer === "Call the police") {
    alert("You sit back and relax for several hours as the police investigate.");
}
/*
var feedback = prompt("Rate the game on a scale of 1 to 10")
if (feedback > 8) {
    alert("Thank you!");
}
else {
    alert("");
}
*/
