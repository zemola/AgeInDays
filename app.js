function ageInDays () {
  let age = prompt('What year were you born?');
  let aging = (2021-age)*365;
  let h2 = document.createElement("h2");
  let text = document.createTextNode(
    "You have used" + "" + aging + "years on earth"
  );
  console.log(text);
  // h2.appendChild(textnode);
  let result = document.getElementsByClassName('.result');
  result.appendChild(text);


}