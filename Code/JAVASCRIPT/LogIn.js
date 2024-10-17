async function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // CHECK EMAIL
  if (email === "") {
    alert("Email Must Be Filled In");
    return false;
  }
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid Email, please enter a valid email address");
    return false;
  }
  if (password === "") {
    alert("Password Column Must Be Filled In");
    return false;
  }
  const data = {
    UserEmail: email.trim(),
    UserPassword: password.trim(),
  };
  const response = await fetch("https://localhost:7129/api/User/Login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result.userID);
  // window.alert(result);
  window.location.replace("/Code/HTML/Homepage.html");
  localStorage.setItem("userID", result.userID);
  return true;
}
