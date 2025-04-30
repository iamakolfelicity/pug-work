function validateForm() {
  const name = document.getElementById("firstName").value.trim();
  const national = document.getElementById("national").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const type = document.getElementById("type").value.trim();
  const date = document.getElementById("date").value;
  const produce = document.getElementById("produce").value.trim();
  const tonnage = document.getElementById("tonnage").value.trim();
  const agent = document.getElementById("agent").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const dueDate = document.getElementById("dueDate").value;

  // Error elements
  const nameErr = document.getElementById("nameErr");
  const nationalErr = document.getElementById("nationalErr");
  const branchErr = document.getElementById("branchErr");
  const typeErr = document.getElementById("typeErr");
  const dateErr = document.getElementById("dateErr");
  const produceErr = document.getElementById("produceErr");
  const tonnageErr = document.getElementById("tonnageErr");
  const agentErr = document.getElementById("agentErr");
  const contactErr = document.getElementById("contactErr");
  const amountErr = document.getElementById("amountErr");
  const dueDateErr = document.getElementById("dueDateErr");

  // Clear previous errors
  nameErr.textContent = "";
  nationalErr.textContent = "";
  branchErr.textContent = "";
  typeErr.textContent = "";
  dateErr.textContent = "";
  produceErr.textContent = "";
  tonnageErr.textContent = "";
  agentErr.textContent = "";
  contactErr.textContent = "";
  amountErr.textContent = "";
  dueDateErr.textContent = "";
  

  let isValid = true;

  if (name === "" || /\d/.test(name) || name.length < 2) {
    nameErr.textContent = "Please enter a valid name (no numbers, at least 2 characters).";
    isValid = false;
  }

  if (national === "" || national.length < 5||!/^[A-Z0-9]{14}$/i.test(national)) {
    nationalErr.textContent = "Please enter a valid National ID.";
    isValid = false;
  }

  if (branch === "" || branch.length < 2) {
    branchErr.textContent = "Please enter a valid location.";
    isValid = false;
  }

  if (type === "") {
    typeErr.textContent = "Please enter the type of produce.";
    isValid = false;
  }

  if (date === "") {
    dateErr.textContent = "Please enter the dispatch date.";
    isValid = false;
  }

  if (produce === "" || /\d/.test(produce) || produce.length < 2) {
    produceErr.textContent = "Please enter a valid produce name.";
    isValid = false;
  }

  if (tonnage === "" || isNaN(tonnage) || tonnage <= 0) {
    tonnageErr.textContent = "Please enter a valid tonnage (positive number).";
    isValid = false;
  }

  if (agent === "" || /\d/.test(agent) || agent.length < 2) {
    agentErr.textContent = "Please enter a valid agent name.";
    isValid = false;
  }

  if (!/^\d{10}$/.test(contact)) {
    contactErr.textContent = "Please enter a valid 10-digit phone number.";
    isValid = false;
  }

  if (amount === "" || isNaN(amount) || Number(amount) < 1) {
    amountErr.textContent = "Please enter a valid amount.";
    isValid = false;
  }

  if (dueDate === "") {
    dueDateErr.textContent = "Please select a due date.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }

  return isValid;
}
