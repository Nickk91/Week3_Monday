let color = prompt("What color would you like?").toLowerCase();

switch (color) {
  case "yellow":
  case "pink":
  case "orange":
    color = "light color";
    break;
  case "blue":
  case "purple":
  case "brown":
    color = "dark color";
    break;
  default:
    color = "Unkown color";
}
console.log(color);
