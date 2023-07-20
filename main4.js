let x = Number(prompt("Please enter your number"));
let y = Number(prompt("Please enter your number"));

function theDivider(n, d) {

    if (d === 0) {
     throw "u can't divide by zero.";
    }
    return  n / d;
}
  

  try {
    console.log("The result is : " ,theDivider(x ,y));
  } catch (error) {
    console.log("An error occurred:" ,error);
  }
