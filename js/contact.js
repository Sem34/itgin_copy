//Contact form
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "itgin@protonmail.com",
    Password: "28209037DB942A91F8013C81789EB8BC755C",
    To: 'itgin@protonmail.com',
    From: document.getElementById("email").value,
    Subject: "New contact form",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
  }).then(
    message => alert("Message sent")
  );
}