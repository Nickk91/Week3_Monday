const password = prompt("Enter your password");
let score = 0;
// if(password.length > 7){
//     score += 1
// }
password.length > 7 ? (score += 1) : null;
/[A-Z]/.text(password) ? (score += 1) : null;
/[a-z]/.text(password) ? (score += 1) : null;
/[0-9]/.text(password) ? (score += 1) : null;
/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) ? (score += 1) : null;

if (score >= 4) {
  console.log("very strong password");
} else if (score >= 3) {
  console.log("strong password");
} else {
  console.log("weak password");
}
