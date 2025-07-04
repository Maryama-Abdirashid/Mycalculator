function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Fadlan geli laba tiro");
    return;
  }

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
      alert("Lama kala qaybin karo eber!");
      return;
    }
    result = num1 / num2;
  }

  document.getElementById("result").textContent = result;
}
