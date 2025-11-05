function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, multiplier) {
  return num1 * multiplier;
}

function devide(divident, divider) {
  return divident / divider;
}

function bracketRemove(command) {
  return command.split("(");
}

function calculator(command) {
  const commandLength = command.length;


}

function main() {
  console.log("calculator\n-------------");

  while (true) {
    const command = prompt(":")
    const result = calculator(command);
    console.log("Result:", result);
  }
}

main();
