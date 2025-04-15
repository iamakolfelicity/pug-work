// // Form validation function
      
function validateForm() {
  const name = document.getElementById("firstName").value;
  const national = document.getElementById("national").value;
  const amount = document.getElementById("amount").value;
  const branch = document.getElementById("locate").value;
  const date = document.getElementById("date").value;
  const produce = document.getElementById("produce").value;
  const contact = document.getElementById("contact").value;
  const type = document.getElementById("type").value;
  const agent = document.getElementById("agent").value;
  const tonnage = document.getElementById("tonnage").value;

  // Reset errors
  nameErr.textContent = "";
  nationalErr.textContent = "";
  branchErr.textContent = "";
  dateErr.textContent = "";
  produceErr.textContent = "";
  contactErr.textContent = "";
  typeErr.textContent = "";
  agentErr.textContent = "";
  tonnageErr.textContent = "";
  amountErr.textContent = "";

  let isValid = true;
 
  if (name === "" || /\d/.test(name) || name.length < 2) {
    nameErr.textContent = "Please enter a valid name (no numbers, min 2 characters).";
    isValid = false;
  
  }

  if (national === "" || national.length < 5) {
    nationalErr.textContent = "Please enter a valid National ID.";
    isValid = false;
  }

  if (branch === "" || branch.length < 2) {
    branchErr.textContent = "Please enter a valid branch name.";
    isValid = false;
  }

  if (type === "") {
    typeErr.textContent = "Please enter the type of produce.";
    isValid = false;
  }

  if (date === "") {
    dateErr.textContent = "Please enter the date of dispatch.";
    isValid = false;
  }

  if (produce === "" || /\d/.test(produce) || produce.length < 2) {
    produceErr.textContent = "Please enter a valid produce name.";
    isValid = false;
  }

  if (tonnage === "" || isNaN(tonnage) || tonnage <= 0) {
    tonnageErr.textContent = "Please enter a valid tonnage.";
    isValid = false;
  }

  if (agent === "" || /\d/.test(agent) || agent.length < 2) {
    agentErr.textContent = "Please enter a valid agent name.";
    isValid = false;
  }

  if (contact === "" || !/^\d{10}$/.test(contact)) {
    contactErr.textContent = "Please enter a valid 10-digit phone number.";
    isValid = false;
  }

  if (amount === "" || isNaN(amount) || Number(amount) < 1) {
    amountErr.textContent = "Please enter a valid amount.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}
