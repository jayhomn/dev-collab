const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.user_list = async function (req, res) {
  const users = await prisma.user.findMany();
  res.send(users);
};

exports.user_get_by_id = async function (req, res) {
  const user = await prisma.user.findUnique({
    where: { id: req.params.userId },
  });
  res.send(user);
};

exports.user_create = async function (req, res) {
  const user = await prisma.user.create({
    data: {
      id: req.body.userId,
      userDisplayName: req.body.userDisplayName,
      userEmail: req.body.userEmail,
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      userBio: req.body.userBio,
    },
  });
  res.send(user);
};

exports.user_update_by_id = async function (req, res) {
  const user = await prisma.user.update({
    where: { id: req.params.userId },
    data: {
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      userBio: req.body.userBio,
    },
  });
  res.send(user);
};

exports.user_delete_by_id = async function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};
