let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let display3 = document.getElementById("display3");
let display4 = document.getElementById("display4");
let display5 = document.getElementById("display5");
let display6 = document.getElementById("display6");
let display7 = document.getElementById("display7");
let display8 = document.getElementById("display8");
let display9 = document.getElementById("display9");
let options = document.getElementById("options");
let amount = document.getElementsByName("amount");
let account = document.getElementsByName("account");
let LoanOption = document.getElementById("LoanOption");
let btn_proceed = document.getElementById("btn_proceed");
let btn_cancel = document.getElementById("btn_cancel");
let View = document.getElementById("View");
let viewerror = document.getElementById("viewerror");
let viewerror1 = document.getElementById("viewerror1");
let viewerror2 = document.getElementById("viewerror2");
let View1 = document.getElementById("View1");
let View2 = document.getElementById("View2");
let message = document.getElementById("message");
let inputValue = document.getElementById("inputValue");
let details = document.getElementById("details");
let details1 = document.getElementById("details1");
let details2 = document.getElementById("details2");
let details3 = document.getElementById("details3");
let errordetails = document.getElementById("errordetails");
let errordetails1 = document.getElementById("errordetails1");
let errordetails2 = document.getElementById("errordetails2");
let errordetails3 = document.getElementById("errordetails3");

let point = 0;
let todayDate;
let dob;
let old;

btn_proceed.addEventListener("click", () => {
  validateData();
});

function validateData() {
  if (LoanOption.value == "") {
    display1.textContent = "field is required";
  } else {
    display1.textContent = "";
  }

  if (inputValue.value == "") {
    display3.innerHTML = "field is required";
  } else {
    display3.innerHTML = "";
  }
  if (account[0].checked == "" && account[1].checked == "") {
    display5.innerHTML = "field is required";
  } else {
    display5.innerHTML = "";
  }
  if (options.value == "") {
    display9.innerHTML = "please choose an option";
  } else {
    display9.innerHTML = "";
  }
  if (View.value == "") {
    viewerror.innerHTML = "please choose an option";
  } else {
    viewerror.innerHTML = "";
  }
  if (View1.value == "") {
    viewerror1.innerHTML = "please choose an option";
  } else {
    viewerror1.innerHTML = "";
  }
  if (View2.value == "") {
    viewerror2.innerHTML = "please choose an option";
  } else {
    viewerror2.innerHTML = "";
  }
  if (details.value == "") {
    errordetails.innerHTML = "please input details";
  } else {
    errordetails.innerHTML = "";
  }
  if (details1.value == "") {
    errordetails1.innerHTML = "please input details";
  } else {
    errordetails1.innerHTML = "";
  }
  if (details2.value == "") {
    errordetails2.innerHTML = "please input details";
  } else {
    errordetails2.innerHTML = "";
  }
  if (details3.value == "") {
    errordetails3.innerHTML = "please input details";
  } else {
    errordetails3.innerHTML = "";
  }
  if (
    LoanOption.value != "" &&
    inputValue.value != "" &&
    account.checked != "" &&
    View.value != "" &&
    View1.value != "" &&
    View2.value != "" &&
    options.value != "" &&
    details.value != "" &&
    details1.value != "" &&
    details2.value != "" &&
    details3.value != ""
  ) {
    chooseOption();
  }
}

function chooseOption() {
  switch (LoanOption.value) {
    case "loan":
      process();
      break;

    case "tranfer":
      display1.innerHTML = "will be available soon";
      break;

    case "airtime":
      display1.innerHTML = "will be available soon";
      break;
  }
}

function process() {
  if (inputValue.value < 65000) {
    point += 10;
  } else {
    point -= 10;
  }
  if (View.value == "3") {
    point += 10;
  } else {
    point += 0;
  }
  if (View1.value == "1") {
    point += 5;
  } else {
    point += 0;
  }
  if (View2.value == "3") {
    point += 10;
  } else {
    point += 0;
  }
  if (account[1].checked == true) {
    point += 10;
  } else {
    point += 5;
  }
  if (options.value == "3") {
    point += 5;
  } else {
    point += 0;
  }
  lastpath();
}

function lastpath() {
  if (point > 30) {
    message.innerHTML =
      "Your point is... " + point + " Loan approved Successfully";
  } else {
    message.innerHTML =
      "Your point is... " + point + " Loan declined, Kindly retry later.";
  }
}
