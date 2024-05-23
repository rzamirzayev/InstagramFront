window.addEventListener("load", async () => {
  let registerBtn = document.querySelector(".registerbtn");
  let signBtn = document.querySelector(".signbtn");
  let formSection = document.querySelector(".formsection");
  let registerSection = document.querySelector(".registersection");

  registerBtn.onclick = function (e) {
    e.preventDefault();
    formSection.classList.toggle("looked");
    registerSection.classList.toggle("looked");
  };
  signBtn.onclick = function (e) {
    e.preventDefault();
    formSection.classList.toggle("looked");
    registerSection.classList.toggle("looked");
  };

  let profiles = await fetch(`${URL}/profiles`).then((response) =>
    response.json()
  );

  document
    .getElementById("registerForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      // Formdaki girdilerin değerlerini al
      var username = document.getElementById("registerName").value;
      var password = document.getElementById("registerPass").value;

      // Yeni kullanıcı nesnesi oluştur
      var newUser = {
        name: username,
        password: password,
        desc: "",
        main_image: "",
        followers: [],
        following: [],
        story: [],
      };

      // Profil listesine yeni kullanıcıyı ekle
      profiles.push(newUser);

      // Güncellenmiş veriyi sunucuya gönder
      try {
        await fetch(`${URL}/profiles`, {
          method: "PUT", // Veriyi güncellemek için PUT metodu kullan
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profiles), // Güncellenmiş veriyi JSON formatına dönüştür
        });
      } catch (error) {
        console.error("Hata:", error);
      }
    });
});
