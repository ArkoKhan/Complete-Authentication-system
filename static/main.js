const password = document.querySelectorAll(".pass_class");
const msgPass = document.querySelector(".msg_pass");
const mail = document.querySelectorAll(".mail_class");
const msgMail = document.querySelector(".msg_mail");

for (let i = 0; i < password.length; i++) {
  password[i].addEventListener("input", function () {
    if (password[0].value != password[1].value) {
      msgPass.innerHTML = `<span class="msg_warning">Your Password did not match.</span>`;
    } else if (password[0].value == "" && password[1].value == "") {
      msgPass.innerHTML = "";
    } else {
      msgPass.innerHTML = `<span class="msg_success">Your Password matched.</span>`;
    }
  });
}

for (let i = 0; i < mail.length; i++) {
  mail[i].addEventListener("input", function () {
    if (mail[0].value != mail[1].value) {
      msgMail.innerHTML = `<span class="msg_warning">Your Email did not match.</span>`;
    } else if (mail[0].value == "" && mail[1].value == "") {
      msgMail.innerHTML = "";
    } else {
      msgMail.innerHTML = `<span class="msg_success">Your Email matched.</span>`;
    }
  });
}
