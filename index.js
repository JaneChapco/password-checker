function showRuleResult(elementId, passed) {
  const resultElement = document.getElementById(elementId);

  if (passed) {
    resultElement.textContent = "✅";
  } else {
    resultElement.textContent = "❌";
  }
}

function checkPasswordStrength(password) {
  if (!password) {
    alert("Please enter a password.");
    return;
  }

  let score = 0;

  const ruleOnePassed = password.length >= 10;
  const ruleTwoPassed = /[A-Z]/.test(password);
  const ruleThreePassed = /[a-z]/.test(password);
  const ruleFourPassed = /[0-9]/.test(password);
  const ruleFivePassed = /[!@#$%^&*]/.test(password);
  const ruleSixPassed = !password.includes(" ");

  const lowerPassword = password.toLowerCase();
  const ruleSevenPassed =
    !lowerPassword.includes("password") &&
    !lowerPassword.includes("test") &&
    !lowerPassword.includes("1234");

  const ruleEightPassed = !/(.)\1\1/.test(password);

  if (ruleOnePassed) score++;
  if (ruleTwoPassed) score++;
  if (ruleThreePassed) score++;
  if (ruleFourPassed) score++;
  if (ruleFivePassed) score++;
  if (ruleSixPassed) score++;
  if (ruleSevenPassed) score++;
  if (ruleEightPassed) score++;

  showRuleResult("rule-1-result", ruleOnePassed);
  showRuleResult("rule-2-result", ruleTwoPassed);
  showRuleResult("rule-3-result", ruleThreePassed);
  showRuleResult("rule-4-result", ruleFourPassed);
  showRuleResult("rule-5-result", ruleFivePassed);
  showRuleResult("rule-6-result", ruleSixPassed);
  showRuleResult("rule-7-result", ruleSevenPassed);
  showRuleResult("rule-8-result", ruleEightPassed);

  if (score === 8) {
    document.getElementById("score-result").innerHTML =
      '<span class="badge bg-success">STRONG 🔒</span>';
  } else if (score >= 6) {
    document.getElementById("score-result").innerHTML =
      '<span class="badge bg-warning text-dark">MODERATE 💡</span>';
  } else if (score >= 4) {
    document.getElementById("score-result").innerHTML =
      '<span class="badge bg-danger">WEAK 🧨</span>';
  } else {
    document.getElementById("score-result").innerHTML =
      '<span class="badge bg-danger">VERY WEAK 🔥</span>';
  }
}

const password = prompt("Enter your password");
checkPasswordStrength(password);
