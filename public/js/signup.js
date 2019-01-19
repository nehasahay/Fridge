$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var fullNameInput = $("input#name")
  var emailInput = $("input#email");
  var passwordInput = $("input#pw");
  var cPasswordInput = $("input#pw2");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      fullname: fullNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.fullname) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    if (passwordInput.val().trim() === cPasswordInput.val().trim()) {
      signUpUser(userData.fullname, userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
      fullNameInput.val("");
      cPasswordInput.val("");
    }else {
      handleLoginErr("Passwords do not match");
    }
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, email, password) {
    $.post("/api/signup", {
      fullname: name,
      email: email,
      password: password
    }).then(function (data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});