function validatePhone(input){

  const phone = input.value;

  if(phone.length < 10){

    alert("Please enter valid phone number");

  }

}

function showFee(){

  const event =
    document.getElementById("eventType").value;

  let fee = "";

  if(event === "Music Festival"){
    fee = "Entry Fee: ₹200";
  }

  else if(event === "Sports Event"){
    fee = "Entry Fee: ₹150";
  }

  else if(event === "Food Festival"){
    fee = "Entry Fee: ₹100";
  }

  document.getElementById("fee").innerHTML = fee;

}

function countCharacters(){

  const text =
    document.getElementById("feedback").value;

  document.getElementById("charCount").innerHTML =
    "Characters: " + text.length;

}

function submitForm(){

  document.getElementById("message").innerHTML =
    "Registration Successful";

}

function videoReady(){

  document.getElementById("videoMessage").innerHTML =
    "Video Ready To Play";

}

function findLocation(){

  navigator.geolocation.getCurrentPosition(
    success,
    error,
    {enableHighAccuracy:true}
  );

}

function success(position){

  document.getElementById("location").innerHTML =

    "Latitude: " +
    position.coords.latitude +

    "<br>Longitude: " +
    position.coords.longitude;

}

function error(){

  alert("Location permission denied");

}

window.onbeforeunload = function(){

  return "Are you sure you want to leave?";

}