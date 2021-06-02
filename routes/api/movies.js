const router = require("express").Router();
const movieRoutes = require("../../controllers/movieController");

router.route("/")
    .post(movieRoutes.create)