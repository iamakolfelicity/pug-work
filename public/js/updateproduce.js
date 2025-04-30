function formValidate() {
    const produceName = document.getElementById("produceName").value.trim();
    const produceType = document.getElementById("produceType").value.trim();
    const tonnage = document.getElementById("tonnage").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const dealerName = document.getElementById("dealerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    const nameError = document.getElementById("name-error");
    const typeError = document.getElementById("type-error");
    const tonnageError = document.getElementById("tonnage-error");
    const amountError = document.getElementById("amount-error");
    const salesError = document.getElementById("sales-error");
    const phoneError = document.getElementById("phone-error");
  
    // Reset errors
    nameError.textContent = "";
    typeError.textContent = "";
    tonnageError.textContent = "";
    amountError.textContent = "";
    salesError.textContent = "";
    phoneError.textContent = "";
  
    let isValid = true;
  
    // Produce Name
    if (produceName === "" || produceName.length < 2) {
      nameError.textContent = "Enter a valid produce name (min 2 characters).";
      isValid = false;
    }
  
    // Produce Type
    if (produceType === "") {
      typeError.textContent = "Enter a produce type.";
      isValid = false;
    }
  
    // Tonnage
    if (tonnage === "" || isNaN(tonnage) || Number(tonnage) <= 0) {
      tonnageError.textContent = "Enter a valid positive tonnage.";
      isValid = false;
    }
  
    // Amount (unit cost)
    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      amountError.textContent = "Enter a valid amount.";
      isValid = false;
    }
  
    // Dealer Name
    if (dealerName === "" || /\d/.test(dealerName)) {
      salesError.textContent = "Enter a valid dealer name (no numbers).";
      isValid = false;
    }
  
    // Phone Number
    if (!/^\d{10}$/.test(phone)) {
      phoneError.textContent = "Enter a valid 10-digit phone number.";
      isValid = false;
    }
  
    return isValid;
  }
  