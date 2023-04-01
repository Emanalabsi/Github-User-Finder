const router = require("express").Router();
const { getRepos, getUser } = require("./controllers");

router.get("/users/:name", getUser);
router.get("/users/:name/repos", getRepos);

module.exports = router;
