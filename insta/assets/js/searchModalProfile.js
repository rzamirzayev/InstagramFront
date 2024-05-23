function ShowProfilesNearby() {
  var searchInput = document.querySelector(".modal_input input");
  var modalContent = document.querySelector(".modal_content");

  searchInput.addEventListener("input", function () {
    var searchValue = this.value.toLowerCase();
    modalContent.innerHTML = "";
    if (!searchValue.trim()) {
      return;
    }
    fetch("../db/db.json")
      .then((response) => response.json())
      .then((data) => {
        data.profiles.forEach(function (profile) {
          if (profile.name.toLowerCase().startsWith(searchValue)) {
            // Profil bilgilerini oluştur
            var profilesDiv = document.createElement("div");
            profilesDiv.className = "searchProfiles";
            modalContent.appendChild(profilesDiv);

            var profileDiv = document.createElement("div");
            profileDiv.className = "searchprofile d-flex";

            var profileImage = document.createElement("img");
            profileImage.src = profile.main_image;

            var profileName = document.createElement("p");
            profileName.textContent = profile.name;

            profileDiv.appendChild(profileImage);
            profileDiv.appendChild(profileName);

            profilesDiv.appendChild(profileDiv);
          }
        });
      });
  });
}
ShowProfilesNearby();
