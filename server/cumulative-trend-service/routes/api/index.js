const router = require("express").Router();
const controller = require("../../controllers");

router.route("/").get(controller.getAllCount);

router.route("/activecount").get(controller.getActiveCount);

module.exports = router;
