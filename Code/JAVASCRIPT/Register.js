async function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  const checkbox = document.querySelector("#checkbox");

  //CHECK NAMA
  if (name === "") {
    alert("Name Must Be Filled In");
    return false;
  }
  // CHECK EMAIL
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid Email, please enter a valid email address");
    return false;
  }

  // CHECK PASSWORD
  if (password === "") {
    alert("Password Column Must Be Filled In");
    return false;
  }

  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordPattern.test(password)) {
    alert(
      "Password must have a minimum of 8 characters, at least one capital letter, one symbol, and one number."
    );
    return false;
  }

  //PASSWORD SAMA CONFIRM PASSWORD UDH SAMA ATAU BELUM
  if (password !== confirmPassword) {
    alert("Password doesnt match");
    return false;
  }

  // CHECK BOX UDH CENTANG/BELUM
  if (!checkbox.checked) {
    alert("check box must be checked");
    return false;
  }

  const data = {
    UserName: name.trim(),
    UserEmail: email.trim(),
    UserPassword: password.trim(),
    confirmPassword: confirmPassword.trim(),
  };

  const response = await fetch("https://localhost:7129/api/User/Register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  window.alert(result);
  window.location.replace("/Code/HTML/Homepage.html");
  return true;
}
