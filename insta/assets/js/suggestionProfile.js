let otherProfileDiv = document.querySelector(".other_profile");
let myProfileName = document.querySelector(".name_text");
let followButton = document.querySelector(".followButton");
let otherName = document.querySelector(".other_name_text");
let imgSrc = document.querySelector(".profilimg");
function suggestionProfile() {
  fetch(`${URL}/profiles`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((profil) => {
        let profileDiv = document.createElement("div");
        profileDiv.className = "profile d-flex";
        let profileImg = document.createElement("img");
        profileImg.src = profil.main_image;
        let paragrafProfile = document.createElement("p");
        paragrafProfile.className = "other_name_text";
        paragrafProfile.textContent = profil.name;
        buttonFollow = document.createElement("button");
        buttonFollow.className = "follow_action followButton";
        buttonFollow.textContent = "Takipden cik";
        profileDiv.appendChild(profileImg);
        profileDiv.appendChild(paragrafProfile);
        profileDiv.appendChild(buttonFollow);
        if (myProfileName.textContent === profil.name) {
          imgSrc.src = profil.main_image;
        }
        if (myProfileName.textContent !== profil.name) {
          otherProfileDiv.appendChild(profileDiv);
          if (profil.followers.includes(`${myProfileName.textContent}`)) {
            console.log(buttonFollow.textContent);
            //   followButton.textContent = "Takip et";
          }
        }
      });
    });
}
suggestionProfile();
console.log(followButton);
