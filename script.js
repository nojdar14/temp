console.log("test");

document.getElementById("cal-btn").addEventListener("click", Calculate);
function Calculate() {
  let fahernheit = document.getElementById("F-input").value;
  let answer = (fahernheit - 32) * (5 / 9);
  document.getElementById("F-input").value = " ";
  answer = answer.toFixed(0);
  document.getElementById("output").innerHTML = answer;
  document.getElementById("output").style.border = "2px solid #26d978";
  document.getElementById("pic-container").src = "img/123.avif";
}
