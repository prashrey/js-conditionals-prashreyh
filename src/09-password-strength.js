/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (typeof password !== "string" || password === "") return "weak";
  let strengthScore = 0;
  let ucCharCount = 0,
    lcCharCount = 0,
    numCharCount = 0,
    scCharCount = 0,
    totalCharCount = 0;

  if (password.length > 7) totalCharCount += 1;
  for (let i = 0; i < password.length; i++) {
    let charCode = password[i].charCodeAt(0);
    if (charCode > 64 && charCode <= 90) ucCharCount += 1;
    else if (charCode > 96 && charCode <= 122) lcCharCount += 1;
    else if (charCode > 47 && charCode <= 57) numCharCount += 1;
    else if (charCode > 31 && charCode <= 126) scCharCount += 1;
  }

  strengthScore = totalCharCount + (ucCharCount > 0 ? 1 : 0) + (lcCharCount > 0 ? 1 : 0) + (numCharCount > 0 ? 1 : 0) + (scCharCount > 0 ? 1 : 0);

  if (strengthScore === 5) return "very strong";
  else if (strengthScore === 4) return "strong";
  else if (strengthScore === 2 || strengthScore === 3) return "medium";
  else return "weak";
}
