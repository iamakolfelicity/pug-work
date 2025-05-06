function validateForm() {
  const branch = document.getElementById("branch").value.trim();
  const date = document.getElementById("date").value.trim();
  const report = document.getElementById("textarea").value.trim();

  const branchErr = document.getElementById("branchErr");
  const dateErr = document.getElementById("dateErr");
  const reportErr = document.getElementById("reportErr");

  // Clear previous errors
  branchErr.textContent = "";
  dateErr.textContent = "";
  reportErr.textContent = "";

  let isValid = true;

  // Branch validation
  if (branch === "" || branch.length < 2) {
    branchErr.textContent = "Please enter a valid branch (min 2 characters).";
    isValid = false;
  }

  // Date validation
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const today = new Date();
  const selectedDate = new Date(date);

  if (date === "") {
    dateErr.textContent = "Please enter a date.";
    isValid = false;
  } else if (!dateRegex.test(date)) {
    dateErr.textContent = "Invalid date format (YYYY-MM-DD).";
    isValid = false;
  }
  
  if (report === "" || report.length < 15) {
    reportErr.textContent = "Please provide a detailed report (min 15 characters).";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }

  return isValid;
}

