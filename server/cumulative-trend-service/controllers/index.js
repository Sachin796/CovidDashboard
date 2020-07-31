const db = require("../models");
const moment = require("moment");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getAllCount: (req, res) => {
    db.National_History.findAll({
      order: [["dateReported", "DESC"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => {
        console.log(dbModel.length);
        res.json({ data: dbModel, length: dbModel.length, status: 200 });
      })
      .catch((err) => res.status(22).json(err));
  },

  getActiveCount: (req, res) => {
    db.National_History.findAll({})
      .then((dbModel) => {
        console.log(dbModel.length);
        res.json({ data: dbModel, length: dbModel.length, status: 200 });
      })
      .catch((err) => res.status(22).json(err));
  },
};
