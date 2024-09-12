
/*Math.random() used to generate the random numners between(0-0.999999999) and *6 means it generates the numbers between(0-5.9999999)
--------------------------------------------------------------------------------------------------------------------------------------*/



/* here Math.floor round up the values.now it generates the values between (0-5).+1 means now 
 it generates the values between(1-6) which we required for dicee challenge8*/

 var randomNumber1 = Math.floor(Math.random() * 6) + 1;

/* According to the random number generated here it will 
select the image*/

var randomDiceImage1 = "dice" + randomNumber1 + ".png";//suppose here we are getting rondom number as 3,then this will select dice3.png;

/* here we are selecting the path for the souce image according 
to the random image generated.*/

var randomImageSource1 = "images/" + randomDiceImage1;//Suppose here were getting randomDiceImage1 as dice4.png then it will create the 
                                                  //path for the dice4.png from image folder..


/*here we  are selected the image tag using queryselectorall and using setAttribute changing the source of the dice images 
according to the rand
omImageSource1*/

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);
 
 
 
/*Math.random() used to generate the random numners between(0-0.999999999) and *6 means it generates the numbers between(0-5.9999999)
--------------------------------------------------------------------------------------------------------------------------------------*/



/* here Math.floor round up the values.now it generates the values between (0-5).+1 means now 
 it generates the values between(1-6) which we required for dicee challenge*/

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

/* According to the random number generated here it will 
select the image*/

//var randomDiceeImage2="dice" + randomNumber2 + ".png";//suppose here we are getting rondom number as 3,then this will select dice3.png;

/* here we are selecting the path for the souce image according 
to the random image generated.*/


var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Suppose here were getting randomDiceImage2 as dice4.png then it will create the 
                                                  //path for the dice4.png from image folder..


/*here we  are selected the image tag using queryselectorall and using setAttribute changing the source of the dice images 
according to the randomImageSource2*/

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//condintion if palyer1 wins...
 if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
//condition if player2 wins....
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//condition for draw...
else {
  document.querySelector("h1").innerHTML = "Draw!";
}