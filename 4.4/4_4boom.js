let str = "";
function check(n) {
  for (let index = 1; index < n; index++) {
    str = index.toString();
    if (index % 7 === 0 && str.includes("7")) {
      console.log("BOOM-BOOM");
    } else if (index % 7 === 0) {
      console.log("BOOM");
    } else {
      console.log(index);
    }
  }
}

check(18);

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false
