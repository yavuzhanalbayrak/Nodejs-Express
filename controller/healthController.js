const mongoose = require("mongoose");
const User = require("../models/healthModel");

const getHealth = (req, res) => {
  User.find().then((users) => {
    res.status(200).json({
      users,
    });
  });
};

const getHealthById = (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.status(200).json({
      user,
    });
  });
};

const createHealth = async (req, res) => {
  const { firstname, lastname, middlename } = req.body;

  //Database create işlemi
  await User.create({
    firstname,
    lastname,
    middlename,
  })
    .then((user) => {
      console.log(`db işlemi bitti ve user: ${user}`);
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json("error", err);
    });
};
const updateHealth = (req, res) => {
  const { firstname, lastname, middlename } = req.body;

  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: { firstname, lastname, middlename },
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Kullanıcı bulunamadı" });
      }
      res.status(200).json({ user });
    })
    .catch((err) => {
      console.error("Kullanıcı güncellenirken bir hata oluştu:", err);
      res
        .status(500)
        .json({ message: "Kullanıcı güncellenirken bir hata oluştu" });
    });
};

const deleteHealth = (req, res) => {

  User.findByIdAndDelete(req.params.id)
  .then(user => {
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    res.status(200).json({ message: "Kullanıcı başarıyla silindi", user });
  })
  .catch(err => {
    console.error("Kullanıcı silinirken bir hata oluştu:", err);
    res.status(500).json({ message: "Kullanıcı silinirken bir hata oluştu" });
  });

};

const methodNotAllowed = (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
};

module.exports = {
  getHealth,
  methodNotAllowed,
  createHealth,
  updateHealth,
  deleteHealth,
  getHealthById,
};
