function showModal() {
  let searchIcon = document.querySelector(".search_link");
  let searchModal = document.querySelector(".search_modal");
  searchIcon.onclick = function (e) {
    e.preventDefault();
    searchModal.classList.toggle("looked_modal");

    //   searchModal.style.display = "block";
  };
}
showModal();
