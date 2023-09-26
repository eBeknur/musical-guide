function runTest() {
  var exitWord = "exit";
  var completedTests = 0;

  while (completedTests < 1) {
    var answer = prompt(
      "Savol " +
        (completedTests + 1) +
        ": Fransiya poytaxti? (Testdan chiqish uchun 'exit' matnini kiriting) a)parij   b)saxara c)moskva"
    );

    if (answer === exitWord) {
      alert("Test ended");
      break;
    }

    if (answer.toLowerCase() === "parij","a") {
      alert("Tog'ri!");
      completedTests++;
    } else {
      alert("Xato , qaytadan urunib koring");
    }
  }

  alert(
    "Test tugadi sizning natijangiz " +
      completedTests +
      " ."
  );
}

runTest();
