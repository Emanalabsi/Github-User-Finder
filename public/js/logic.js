const searchBtn = document.querySelector(".search-btn");
const nameInput = document.querySelector(".text-input");

const fetchUser = () => {
  if (nameInput.value === "" || nameInput.value === null) {
    alert("please enter a valid input");
  }
  return fetch(`/users/${nameInput.value}`)
    .then((res) => res.json())
    .then((data) => renderUserCard(data))
    .catch((err) => {
      console.log(err);
    });
};

const fetchRepos = () => {
  return fetch(`/users/${nameInput.value}/repos`)
    .then((res) => res.json())
    .then(console.log)
    .catch((err) => {
      throw new TypeError(err);
    });
};

searchBtn.addEventListener("click", fetchUser);
