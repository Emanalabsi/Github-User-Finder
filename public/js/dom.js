const searchBtn = document.querySelector(".search-btn");
const nameInput = document.querySelector(".text-input");

const renderUserCard = (res) => {
  // Create the elements
  const userCard = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const image = document.createElement("img");
  const nameDetails = document.createElement("div");
  const userName = document.createElement("h2");
  const userLogin = document.createElement("span");
  const userBio = document.createElement("p");
  const reposBtn = document.createElement("button");

  // Set the class names
  userCard.classList.add("user-card");
  imageWrapper.classList.add("image-wrapper");
  userName.classList.add("user-name");
  userLogin.classList.add("user-login");
  userBio.classList.add("user-bio");
  reposBtn.classList.add("repos-btn");

  // Set the text and image
  userName.textContent = res.name;
  userLogin.textContent = res.login;
  userBio.textContent = res.bio;
  reposBtn.textContent = "Repos";
  reposBtn.type = "submit";
  image.alt = "user";
  image.src = res.avatar_url; // add image source here
  reposBtn.addEventListener("click", fetchRepos);
  // Append the elements to the card
  imageWrapper.appendChild(image);
  nameDetails.appendChild(userName);
  nameDetails.appendChild(userLogin);
  userCard.appendChild(imageWrapper);
  userCard.appendChild(nameDetails);
  userCard.appendChild(userBio);
  userCard.appendChild(reposBtn);

  // Add the card to the page
  document.querySelector(".hero").appendChild(userCard);
};

const renderRepoCards = (res) => {};

searchBtn.addEventListener("click", fetchUser);
