function validateForm() {
  //FULL NAME VALIDATION
  let a = document.forms["amazon_form"]["fullname"].value;
  if (a == "") {
    document.getElementById("name-error").style.display = "block";
    document.getElementById("name-error").innerHTML = "Please enter a name.";
    document.getElementById("fullname").focus();
    document.getElementById("fullname").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("fullname").style.borderWidth = "2px";
  } else {
    document.getElementById("name-error").style.display = "none";
    document.getElementById("fullname").style.borderColor = "#888c8c";
    document.getElementById("fullname").style.borderWidth = "1px";
  }

  //MOBILE NUMBER VALIDATION

  let b = document.forms["amazon_form"]["mobile"].value;
  var phoneno = /^\d{10}$/;
  if (b == "") {
    document.getElementById("mobile-error").style.display = "block";
    document.getElementById("mobile-error").innerHTML =
      "Please enter a phone number so we can call if there are any issues with delivery.";
    document.getElementById("mobile").focus();
    document.getElementById("mobile").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("mobile").style.borderWidth = "2px";
  } else if (!b.match(phoneno)) {
    document.getElementById("mobile-error").style.display = "block";
    document.getElementById("mobile-error").innerHTML =
      "Mobile number cannot be String. Enter valid 10 digit number.";
    document.getElementById("mobile").focus();
    document.getElementById("mobile").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("mobile").style.borderWidth = "2px";
  } else {
    document.getElementById("mobile-error").style.display = "none";
    document.getElementById("mobile").style.borderColor = "#888c8c";
    document.getElementById("mobile").style.borderWidth = "1px";
  }

  //PINCODE VALIDATION

  let c = document.forms["amazon_form"]["pincode"].value;
  var pin = /^\d{6}$/;
  if (c == "") {
    document.getElementById("pincode-error").style.display = "block";
    document.getElementById("pincode-error").innerHTML =
      "Please enter a ZIP or postal code.";
    document.getElementById("pincode").focus();
    document.getElementById("pincode").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("pincode").style.borderWidth = "2px";
  } else if (!c.match(pin)) {
    document.getElementById("pincode-error").style.display = "block";
    document.getElementById("pincode-error").innerHTML =
      "Pincode number cannot be String. Enter valid 6 digit number.";
    document.getElementById("pincode").focus();
    document.getElementById("pincode").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("pincode").style.borderWidth = "2px";
  } else {
    document.getElementById("pincode-error").style.display = "none";
    document.getElementById("pincode").style.borderColor = "#888c8c";
    document.getElementById("pincode").style.borderWidth = "1px";
  }

  //ADDRESS VALIDATION

  let d = document.forms["amazon_form"]["address"].value;
  if (d == "") {
    document.getElementById("address-error").style.display = "block";
    document.getElementById("address-error").innerHTML =
      "Please enter an address.";
    document.getElementById("address").focus();
    document.getElementById("address").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("address").style.borderWidth = "2px";
  } else {
    document.getElementById("address-error").style.display = "none";
    document.getElementById("address").style.borderColor = "#888c8c";
    document.getElementById("address").style.borderWidth = "1px";
  }

  //AREA VALIDATION

  let e = document.forms["amazon_form"]["area"].value;
  if (e == "") {
    document.getElementById("area-error").style.display = "block";
    document.getElementById("area-error").innerHTML = "Please enter an area.";
    document.getElementById("area").focus();
    document.getElementById("area").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("area").style.borderWidth = "2px";
  } else {
    document.getElementById("area-error").style.display = "none";
    document.getElementById("area").style.borderColor = "#888c8c";
    document.getElementById("area").style.borderWidth = "1px";
  }

  //CITY VALIDATION

  let f = document.forms["amazon_form"]["city"].value;
  if (f == "") {
    document.getElementById("city-error").style.display = "block";
    document.getElementById("city-error").innerHTML =
      "Please enter a city name.";
    document.getElementById("city").focus();
    document.getElementById("city").style.borderColor = "rgb(197, 4, 4)";
    document.getElementById("city").style.borderWidth = "2px";
  } else {
    document.getElementById("city-error").style.display = "none";
    document.getElementById("city").style.borderColor = "#888c8c";
    document.getElementById("city").style.borderWidth = "1px";
  }

  //STATE VALIDATION

  let g = document.forms["amazon_form"]["state"].value;
  if (g == "") {
    document.getElementById("state-error").style.display = "block";
    document.getElementById("state-error").innerHTML =
      "Please enter a state, region or province.";
  } else {
    document.getElementById("state-error").style.display = "none";
  }

  //COUNTRY VALIDATION
  
  let h = document.forms["amazon_form"]["country"].value;
  if (h == "") {
    document.getElementById("country-error").style.display = "block";
    document.getElementById("country-error").innerHTML =
      "Please enter a country.";
  } else {
    document.getElementById("country-error").style.display = "none";
  }


}
