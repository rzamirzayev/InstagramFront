const URL = "http://localhost:3000";
let profileName = document.querySelector(".profileName");
let profileInfo = document.querySelector(".postandfollow_text");
let profilDescDiv = document.querySelector(".profile_desc");
let mainImageDiv = document.querySelector(".profile_main_image");
let username = localStorage.getItem("username");
profileName.textContent = username;
window.addEventListener("load", async () => {
  let posts = await fetch(`${URL}/posts`).then((response) => response.json());

  function profileHeader() {
    fetch(`${URL}/profiles`)
      .then((response) => response.json())
      .then((data) => {
        let paragrafDesc = document.createElement("p");
        let mainImage = document.createElement("img");
        data.forEach((profil) => {
          let post = posts.filter((p) => p.profileId == profil.id);

          if (profil.name === profileName.textContent) {
            let postAndFollow = `                <div class="d-flex">
              <span class="black_span">${post.length}</span>
              <p>gonderi</p>
            </div>
            <div class="d-flex">
              <span class="black_span">${profil.followers.length}</span>
              <p>takipci</p>
            </div>
            <div class="d-flex">
              <span class="black_span">${profil.following.length}</span>
              <p>takip</p>
            </div>`;
            mainImage.src = profil.main_image;
            mainImageDiv.appendChild(mainImage);
            mainImage.style.borderRadius = "50%";
            paragrafDesc.textContent = profil.desc;
            profilDescDiv.appendChild(paragrafDesc);
            profileInfo.innerHTML += postAndFollow;
          }
        });
      });
  }
  profileHeader();

  let profilePostDiv = document.querySelector(".profile_posts");
  function postList() {
    fetch(`${URL}/profiles`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((profil) => {
          if (profil.name === profileName.textContent) {
            let post = posts.filter((p) => p.profileId == profil.id);
            for (let i = 0; i <= post.length; i++) {
              let profileDiv = document.createElement("div");
              profileDiv.className = "profile_post";
              let profileImg = document.createElement("img");
              profileImg.src = post[i].postimage;
              profileDiv.appendChild(profileImg);
              profilePostDiv.appendChild(profileDiv);
            }
          }
        });
      });
  }
  postList();
});
