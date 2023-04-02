const fetch = require("node-fetch");

const fetchData = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw new TypeError(err);
    });
};

const getUser = (req, res) => {
  fetchData(`https://api.github.com/users/${req.params.name}`).then((data) =>
    res.send(data)
  );
};

const getRepos = (req, res) => {
  fetchData(`https://api.github.com/users/${req.params.name}/repos`).then(
    (data) => res.send(data)
  );
};

const getRepoLanguages = (req, res) => {
  fetchData(
    `https://api.github.com/repos/${req.params.name}/${req.params.repos}/languages`
  ).then((data) => res.send(data));
};

module.exports = { getUser, getRepos, getRepoLanguages };
