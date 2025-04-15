// Form validation function
function formValidate() {
    const produceName = document.getElementById("produceName").value;
    const produceType = document.getElementById("produceType").value;
    const tonnage = document.getElementById("tonnage").value;
    const amount = document.getElementById("amount").value;
    const branch = document.getElementById("branch").value;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const dealerName = document.getElementById("dealerName").value;
    const phone = document.getElementById("phone").value;
  
    // Error display elements
    const nameErr = document.getElementById("name-error");
    const typeErr = document.getElementById("type-error");
    const tonnageErr = document.getElementById("tonnage-error");
    const amountErr = document.getElementById("amount-error");
    const branchErr = document.getElementById("branch-error");
    const priceErr = document.getElementById("price-error");
    const dateErr = document.getElementById("date-error");
    const timeErr = document.getElementById("time-error");
    const dealerErr = document.getElementById("sales-error");
    const phoneErr = document.getElementById("phone-error");
  
    // Reset error messages
    nameErr.textContent = "";
    typeErr.textContent = "";
    tonnageErr.textContent = "";
    amountErr.textContent = "";
    branchErr.textContent = "";
    priceErr.textContent = "";
    dateErr.textContent = "";
    timeErr.textContent = "";
    dealerErr.textContent = "";
    phoneErr.textContent = "";
  
    let isValid = true;
  
    if (produceName === "" || /\d/.test(produceName) || produceName.length < 2) {
      nameErr.textContent = "Please enter a valid produce name (no numbers, min 2 characters).";
      isValid = false;
    }
  
    if (produceType === "" || /\d/.test(produceType) || produceType.length < 2) {
      typeErr.textContent = "Please enter a valid produce type.";
      isValid = false;
    }
  
    if (tonnage === "" || isNaN(tonnage) || tonnage <= 0) {
      tonnageErr.textContent = "Please enter a valid tonnage.";
      isValid = false;
    }
  
    if (amount === "" || isNaN(amount) || Number(amount) < 1) {
      amountErr.textContent = "Please enter a valid amount.";
      isValid = false;
    }
  
    if (branch === "" || branch.length < 2) {
      branchErr.textContent = "Please enter a valid branch name.";
      isValid = false;
    }
  
    if (price === "" || isNaN(price) || price <= 0) {
      priceErr.textContent = "Please enter a valid price.";
      isValid = false;
    }
  
    if (date === "") {
      dateErr.textContent = "Please enter the date of delivery.";
      isValid = false;
    }
  
    if (time === "") {
      timeErr.textContent = "Please enter the time of delivery.";
      isValid = false;
    }
  
    if (dealerName === "" || /\d/.test(dealerName) || dealerName.length < 2) {
      dealerErr.textContent = "Please enter a valid dealer name.";
      isValid = false;
    }
  
   
  
    if (isValid) {
      alert("Form submitted successfully!");
      return true;
    } else {
      return false;
    }
  }
 