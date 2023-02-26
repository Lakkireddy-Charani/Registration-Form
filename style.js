function displayData(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var imagelink = document.getElementById("imagelink").value;
    var gender = document.getElementById("gender").value;
    var output = document.getElementById("output");
    output.innerHTML = "<h2>Registration Details:</h2><p>Name: " + name + "</p><p>Email: " + email + "</p><p>Website: " + website + "</p><p>Imagelink: " + imagelink + "</p><p>Gender: " + gender + "</p>";
  }