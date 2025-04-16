function formValidate() {
    let isValid = true;
  
    // Grab values
    const buyerName = document.getElementById("buyerName").value.trim();
    const produceName = document.getElementById("produceName").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const branch = document.getElementById("branch").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const price = document.getElementById("price").value.trim();
    const agent = document.getElementById("agentName").value.trim();
  
    // Grab error spans
    const buyerNameError = document.getElementById("buyerNameError");
    const produceNameError = document.getElementById("produceNameError");
    const quantityError = document.getElementById("quantityError");
    const amountError = document.getElementById("amountError");
    const branchError = document.getElementById("branchError");
    const dateError = document.getElementById("dateError");
    const timeError = document.getElementById("timeError");
    const agentError = document.getElementById("agentError");
    const priceError = document.getElementById("priceError");
  
    // Clear errors
    buyerNameError.textContent = "";
    produceNameError.textContent = "";
    quantityError.textContent = "";
    amountError.textContent = "";
    branchError.textContent = "";
    dateError.textContent = "";
    timeError.textContent = "";
    agentError.textContent = "";
    priceError.textContent = "";
  
  
    // Validate Buyer's Name
    if (buyerName === "" || /\d/.test(buyerName) || buyerName.length < 2) {
      buyerNameError.textContent = "Enter a valid name (min 2 letters, no numbers).";
      isValid = false;
    }
  
    // Validate Produce Name
    if (produceName === "" || /\d/.test(produceName) || produceName.length < 2) {
      produceNameError.textContent = "Enter a valid produce name.";
      isValid = false;
    }
  
    // Validate Quantity
    if (quantity === "" || isNaN(quantity) || Number(quantity) <= 0) {
      quantityError.textContent = "Enter a valid quantity (positive number).";
      isValid = false;
    }
     // Validate price
     if (price === "" || isNaN(price) || Number(price) <= 0) {
      priceError.textContent = "Enter a valid price (positive number).";
      isValid = false;
    }
  
    // Validate Amount
    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      amountError.textContent = "Enter a valid amount (positive number).";
      isValid = false;
    }
  
    // Validate Branch
    if (branch === "" || branch.length < 2) {
      branchError.textContent = "Branch name is required.";
      isValid = false;
    }
  
    // Validate Date
    if (date === "") {
      dateError.textContent = "Date is required.";
      isValid = false;
    }
  
    // Validate Time
    if (time === "") {
      timeError.textContent = "Time is required.";
      isValid = false;
    }
  
    // Validate Agent Name
    if (agent === "" || /\d/.test(agent) || agent.length < 2) {
      agentError.textContent = "Enter a valid agent name.";
      isValid = false;
    }
  
    return isValid;
  }
  