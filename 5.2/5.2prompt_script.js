let language = prompt("What language do you speak?").toLowerCase();

switch (language) {
  case "mandarin":
    language = `mandarin: "MOST number of native speakers!"`;
    break;
  case "spanish":
    language = `spanish: "2nd place in a number of native speakers"`;
    break;
  case "english":
    language = `english: "3rd place"`;
    break;

  case "hindi":
    language = `Hindi: "Number 4"`;
    break;

  case "arabic":
    language = `arabic: "5th most spoken language"`;
    break;

  default:
    language = "Not in the top 5";
}
console.log(language);
