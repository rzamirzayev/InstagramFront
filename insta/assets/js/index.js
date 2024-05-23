const URL = "http://localhost:3000";

window.addEventListener("load", async () => {
  let username = localStorage.getItem("username");
  var usernameText = document.querySelector(".name_text");
  if (username) {
    usernameText.textContent = username;
  } else {
    usernameSpan.textContent = "Misafir";
  }
  let profiles = await fetch(`${URL}/profiles`).then((response) =>
    response.json()
  );
  let comments = await fetch(`${URL}/comments`).then((response) =>
    response.json()
  );

  let allPost = document.querySelector(".all_posts");
  await fetch(`${URL}/posts`)
    .then((response) => response.json())
    .then((data) => {
      // Ana dizideki her bir profili ele al
      data.forEach((profilepost) => {
        const profile = profiles.filter(
          (m) => m.id == profilepost.profileId
        )[0];

        const cmnt = comments.filter((c) => c.postId == profilepost.postid);
        // let c = cmnt.map((item) => item);
        console.log(cmnt);
        // console.log(c);
        let post = `
        <div class="post">
          <div class="profile d-flex">
              <img src="${profile.main_image}" alt="" />
              <p class="name_text">${profile.name}</p>
              <button class="follow_action"><img src="../assets/img/option.PNG" alt=""></button>
          </div> 
          <div class="post_image">
          <img src="${profilepost.postimage}" alt="">
        </div> 
        <div class="notice">
          <div class="d-flex notice_icons">
            <div class="left_notice_icon  d-flex">
              <div class="likeIcon"><img src="../assets/img/like.PNG" alt=""></div>
              <div><img src="../assets/img/comment.PNG" alt=""></div>
              <div><img src="../assets/img/direct.png" alt=""></div>
            </div>
            <div class="right_notice_icon">
              <div><img src="../assets/img/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="post_like_number">
          <p>${profilepost.like} begenme</p>
        </div>


        <div class="comments">
        
          ${cmnt
            .map((item) => {
              console.log(item.comment);
              return ` 
              <div class="comment d-flex">
            <p class="profile_name">${profile.name}</p>
            <p class="comment_text">
              ${item.comment}
            </p>
            
              </div>
            `;
            })
            .join("")}
        </div>
        <div class="send_comment">
          <input placeholder="Yorum ekle..." class="comment_input" type="text" name="" id="">
        </div>
      </div>
        `;
        allPost.innerHTML += post;
        let likeIcon = document.querySelectorAll(".likeIcon");
        console.log(likeIcon);
        // likeIcon.onclick = function (e) {
        //   profilepost.like += 1;
        //   console.log(profilepost.like);
        // };
      });
    });

  // function yorumEkle(yorum) {
  //   // Yeni yorumu comment dizisine ekle
  //   profil.posts.comment.push(yorum);
  //   console.log(yorum);
  //   // Yorumları listele
  //   listeleYorumlar();
  // }

  // Yorumları listelemek için fonksiyon
  // function listeleYorumlar() {
  //   const yorumlarDiv = document.querySelector(".comments");
  //   // Her seferinde içeriği temizle
  //   yorumlarDiv.innerHTML = "";
  //   // Her yorum için bir <p> oluştur ve içeriğine yorumu ekle
  //   profil.posts.comment.forEach((yorum) => {
  //     const yorumParagraf = `<div class="comment d-flex">
  //       <p class="profile_name">${profil.name}</p>
  //       <p class="comment_text">${profil.posts.comment[0]}</p>
  //     </div>`;
  //     yorumlarDiv.innerHTML += yorumParagraf;
  //   });
  // }

  // inputElement.addEventListener("keypress", function (event) {
  //   if (event.key === "Enter") {
  //     const yorum = inputElement.value.trim(); // Kullanıcının girdiği yorumu al
  //     if (yorum !== "") {
  //       yorumEkle(yorum); // Yorumu ekle
  //       inputElement.value = ""; // Inputu temizle
  //     } else {
  //       alert("Lütfen geçerli bir yorum girin.");
  //     }
  //   }
  // });

  // function ShowPostHeader() {
  //   let post = document.querySelector(".post");
  //   let postProfileDiv = document.createElement("div");
  //   postProfileDiv.className = "profile d-flex";
  //   let profileText = `<img src="${profil.main_image}" alt="" />
  //         <p class="name_text">${profil.name}</p>
  //         <button class="follow_action"><img src="../assets/img/option.PNG" alt=""></button>`;
  //   postProfileDiv.innerHTML += profileText;
  //   post.appendChild(postProfileDiv);
  // }

  // function showPostImage() {
  //   fetch("../db/db.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let post = document.querySelector(".post");
  //       data.profiles.forEach((profil) => {
  //         let postImageeDiv = document.createElement("div");
  //         postImageeDiv.className = "post_image";
  //         let profileImage = `<img src="../assets/img/3ffebf9cb953a5eceb48bfd2d54db8a2.jpg" alt="">`;
  //         postImageeDiv.innerHTML += profileImage;
  //         post.appendChild(postImageeDiv);
  //       });
  //     });
  // }
  // ShowPostHeader();

  // let statusCard = document.querySelector(".status-card");
  // statusCard.onclick = function (e) {
  //   e.preventDefault();
  // };

  let modal = document.querySelector(".modalStory");

  let btn = document.querySelector(".status-card");

  let span = document.querySelector(".close");
  let body = document.querySelector("body");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
