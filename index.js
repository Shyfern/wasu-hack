// Check if the user is ready to play!
confirm("I am ready to play!");

confirm("You're a private investigator enjoying your vacation at the Smithsonian.");
confirm("The Hope Diamond is stolen during the day,\na security guard notices that the diamond is missing and presses the alarm\nlocking everyone inside the building for further investigation.");
confirm("You're given the choice to either investigate who stole the Hope Diamond or call the police and it take hours to get out of the museum.");

var userAnswer = "";
var errorMsg = "Note: answers are case-sensitive. Make sure you're spelling everything right!";
var attaBoy = "You found the diamond! Congrats!";

var isValid = false;
do
{
  userAnswer = prompt("You can either\nInvestigate\nCall the police");
  isValid = (userAnswer === "Investigate") || (userAnswer === "Call the police");
  if (!isValid)
  {
    alert(errorMsg);
  }
} while(!isValid);
// count matches

if (userAnswer === "Investigate")
{
//1st thingy

    isValid = false;
    do
    {
      userAnswer = prompt("You can either\nMake a list of likely suspects\nCheck security footage");
      isValid = userAnswer === "Make a list of likely suspects" || userAnswer === "Check security footage";
      if (!isValid)
      {
        alert(errorMsg);
      }
    } while(!isValid);
// one } short

    if (userAnswer === "Make a list of likely suspects")
    {

      isValid = false;
      do
      {
        confirm("You have to investigate hundreds of people")
        userAnswer = prompt("How would you like to narrow it down?\nNarrow it down to the people who were closest to the display case\nAsk 30 people at random");
        isValid = (userAnswer === "Narrow it down to the people who were closest to the display case") || (userAnswer === "Ask 30 people at random");
        if (!isValid)
        {
          alert(errorMsg);
        }
      } while(!isValid);
// one } short

      if (userAnswer === "Narrow it down to the people who were closest to the display case")
      {
        confirm("You separate people and investigate. People start blaming one another and things start to become chaotic.");
//3rd thingy
        isValid = false;

        do
        {
          userAnswer = prompt("What do you do?\nSeparate those who were blamed\nRaise your voice, assert the crowd, and gain control of the situation");

          isValid = (userAnswer === "Separate those who were blamed") || (userAnswer === "Raise your voice, assert the crowd, and gain control of the situation");
          if (!isValid)
          {
            alert(errorMsg);
          }
        } while(!isValid);
// one } short

        if (userAnswer === "Separate those who were blamed")
        {
          confirm("You ask a man who was blamed to empty his pockets. He refuses to.");
//4th thingy
          isValid = false;
          do
          {
            userAnswer = prompt("What do you do?\nHave the guard force him to empty his pockets\nYou convince the guy to do it");

            isValid = (userAnswer === "Have the guard force him to empty his pockets") || (userAnswer === "You convince the guy to do it");
            if (!isValid)
            {
              alert(errorMsg);
            }
          } while(!isValid);
// one } short

          if (userAnswer === "Have the guard force him to empty his pockets")
          {
              confirm("The man reveals makeup out of his pocket and everyone chuckles. You look to the woman who blamed the man and assume it might be her.");
              confirm("'You were so quick to assume! Are you hiding anything?'");
              confirm("The woman opens her purse and empties her pockets. She's obviously not the suspect.");
//5th thingy
              isValid = false;
              do
              {
                  userAnswer = prompt("What do you do?\nPolitely ask everyone to empty their pockets\nTake individuals to the side and ask them to prove they're innocent.");

                  isValid = (userAnswer === "Politely ask everyone to empty their pockets") || (userAnswer === "Take individuals to the side and ask them to prove they're innocent.");
                  if (!isValid)
                  {
                      alert(errorMsg);
                  }
              } while(!isValid);
// one } short

              if (userAnswer === "Politely ask everyone to empty their pockets")
              {
                  confirm("Everyone empties their pockets and the diamond is nowhere to be found. You look around to see if someone possibly hadn't and the one person who didn't was the security guard.");
                  confirm("You look at the security guard and say, 'When you've eliminated the impossible; whatever remains, however, improbable, is the truth. Therefore, security guard, hand over the diamond.'");
                  confirm(attaBoy);
              }
              else {
                (userAnswer === "Take individuals to the side and ask them to prove they're innocent");
                confirm("You eventually get to a man and find that he has the diamond.");
                confirm(attaBoy);
              }
          }
          else
          {
            (userAnswer === "You convince the guy to do it");
              confirm("The man reveals makeup out of his pocket and everyone chuckles. You look to the woman who blamed the man and assume it might be her.");
              confirm("'You were so quick to assume! Are you hiding anything?'");
              confirm("The woman opens her purse and empties her pockets. She's obviously not the suspect.");
//5th thingy
              isValid = false;
              do
              {
                userAnswer = prompt("What do you do?\nPolitely ask everyone to empty their pockets\nTake individuals to the side and ask them to prove they're innocent.");

                isValid = (userAnswer === "Politely ask everyone to empty their pockets") || (userAnswer === "Take individuals to the side and ask them to prove they're innocent.");
                if (!isValid)
                {
                  alert(errorMsg);
                }
              } while(!isValid);
// short }'s
              if (userAnswer === "Politely ask everyone to empty their pockets")
              {
                confirm("Everyone empties their pockets and the diamond is nowhere to be found. You look around to see if someone possibly hadn't and the one person who didn't was the security guard.");
                confirm("You look at the security guard and say, 'When you've eliminated the impossible; whatever remains, however, improbable, is the truth. Therefore, security guard, hand over the diamond.'");
                confirm(attaBoy);
              }
              else
              {
                (userAnswer === "Take individuals to the side and ask them to prove they're innocent");
                confirm("You eventually get to a man and find that he has the diamond.");
                confirm(attaBoy);
              }
          }
        }
        else
        {
          (userAnswer === "Raise your voice, assert the crowd, and gain control of the situation");
          confirm("Everyone becomes silent and you pull a guy that was blamed to the side. You ask him to empty his pockets. He refuses to.");
//4th thingy
          isValid = false;
          do
          {
            userAnswer = prompt("What do you do?\nHave the guard force him to empty his pockets\nYou convince the guy to do it");

            isValid = (userAnswer === "Have the guard force him to empty his pockets") || (userAnswer === "You convince the guy to do it");
            if (!isValid)
            {
              alert(errorMsg);
            }
          } while(!isValid);

          if (userAnswer === "Have the guard force him to empty his pockets")
          {
            confirm("The man reveals makeup out of his pocket and everyone chuckles. You look to the woman who blamed the man and assume it might be her.");
            confirm("'You were so quick to assume! Are you hiding anything?'");
            confirm("The woman opens her purse and empties her pockets. She's obviously not the suspect.");
//5th thingy
            isValid = false;
            do
            {
              userAnswer = prompt("What do you do?\nPolitely ask everyone to empty their pockets\nTake individuals to the side and ask them to prove they're innocent.");

              isValid = (userAnswer === "Politely ask everyone to empty their pockets") || (userAnswer === "Take individuals to the side and ask them to prove they're innocent.");
              if (!isValid)
              {
                alert(errorMsg);
              }
            } while(!isValid);

            if (userAnswer === "Politely ask everyone to empty their pockets")
            {
              confirm("Everyone empties their pockets and the diamond is nowhere to be found. You look around to see if someone possibly hadn't and the one person who didn't was the security guard.");
        confirm("You look at the security guard and say, 'When you've eliminated the impossible; whatever remains, however, improbable, is the truth. Therefore, security guard, hand over the diamond.'");
        confirm(attaBoy);
            }
            else
            {
              (userAnswer === "Take individuals to the side and ask them to prove they're innocent");
                confirm("You eventually get to a man and find that he has the diamond.");
                confirm(attaBoy);
              }
          }
          else
          {
            (userAnswer === "You convince the guy to do it");
            confirm("The man reveals makeup out of his pocket and everyone chuckles. You look to the woman who blamed the man and assume it might be her.");
            confirm("'You were so quick to assume! Are you hiding anything?'");
            confirm("The woman opens her purse and empties her pockets. She's obviously not the suspect.");
//5th thingy
            isValid = false;
            do
            {
              userAnswer = prompt("What do you do?\nPolitely ask everyone to empty their pockets\nTake individuals to the side and ask them to prove they're innocent.");

              isValid = (userAnswer === "Politely ask everyone to empty their pockets") || (userAnswer === "Take individuals to the side and ask them to prove they're innocent.");
              if (!isValid)
              {
                alert(errorMsg);
              }
            } while(!isValid);

            if (userAnswer === "Politely ask everyone to empty their pockets")
            {
              confirm("Everyone empties their pockets and the diamond is nowhere to be found. You look around to see if someone possibly hadn't and the one person who didn't was the security guard.");
              confirm("You look at the security guard and say, 'When you've eliminated the impossible; whatever remains, however, improbable, is the truth. Therefore, security guard, hand over the diamond.'");
              confirm(attaBoy);
            }
            else
            {
              (userAnswer === "Take individuals to the side and ask them to prove they're innocent");
              confirm("You eventually get to a man and find that he has the diamond.");
              confirm(attaBoy);
          }
        }
       }
    }
      else if (userAnswer === "Ask 30 people at random")
      {
          confirm("People give you the information that they know of, leading you to a few suspects. You investigate them and find the diamond");
          confirm(attaBoy);
//3rd thingy
      }
    }
    else if (userAnswer === "Check security footage")
    {
        alert("After checking the security footage, your view is blocked by multiple people. You will have to go and investigate without help from security tapes.");

//2nd thingy
    }
}

else if (userAnswer === "Call the police")
{
//if (userAnswer === "Call the police") {
alert("You sit back and relax for several hours as the police investigate.");
//1st thingy
}
