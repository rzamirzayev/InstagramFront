const URL = "http://localhost:3000";

window.addEventListener("load", async () => {
  let profiles = await fetch(`${URL}/profiles`).then((response) =>
    response.json()
  );
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Formdaki kullanıcı adı ve şifreyi al
      var username = document.getElementById("name").value;
      var password = document.getElementById("password").value;
      var user = profiles.find(
        (profile) => profile.name == username && profile.password == password
      );
      if (user) {
        window.location.href = "index.html";
        localStorage.setItem("username", username);
      } else {
        alert("Username ve ya sifre yanlisdir");
      }
    });
});
