function sendEmail() {
  var name = document.getElementById("form_name").value;
  var email = document.getElementById("form_email").value;
  var msg = document.getElementById("form_message").value;

  Email.send({
    SecureToken : "069518f8-7464-48c6-beca-960a1f0d7ecb",
    To : 'kalpesh.1.mali@gmail.com',
    From : email,
    Subject : "Kalpesh Portfolio from: " + name,
    Body : "<br />Name: " + name + "<br />Email: " + email + "<br />Message: " + msg
  })
  .then(function(){
    alert(name + " Thank You for feedback\n mail sent successfully!")
  });
}
