const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.project_list = async function (req, res) {
  const projects = await prisma.project.findMany({
    take: parseInt(req.query.limit),
    cursor: {
      id: parseInt(req.query.after_id),
    },
    orderBy: {
      id: "asc",
    },
  });
  res.send(projects);
};

exports.project_get_by_id = async function (req, res) {
  const project = await prisma.project.findUnique({
    where: { projectId: req.params.projectId },
  });
  res.send(project);
};

exports.project_get_by_title = async function (req, res) {
  const project = await prisma.project.findUnique({
    where: { projectTitle: req.params.projectTitle },
  });
  res.send(project);
};

exports.project_get_by_userId = async function (req, res) {
  const project = await prisma.project.findMany({
    ...(req.query.limit && { take: parseInt(req.query.limit) }),
    ...(req.query.after_id && {
      cursor: {
        id: parseInt(req.query.after_id),
      },
      skip: 1,
    }),
    orderBy: {
      id: "asc",
    },
    where: { projectOwner: req.params.userId },
  });
  res.send(project);
};

exports.project_create = async function (req, res) {
  const project = await prisma.project.create({
    data: {
      owner: { connect: { id: req.body.userId } },
      projectTitle: req.body.projectTitle,
      projectDescription: req.body.projectDescription,
      projectTagOne: req.body.projectTagOne,
      projectTagSecond: req.body.projectTagSecond,
      projectTagThird: req.body.projectTagThird,
      projectTagFourth: req.body.projectTagFourth,
      isPrivate: req.body.isPrivate,
      projectLinks: {
        create: req.body.projectLinks.map((x) => {
          return { linkName: x.linkName, link: x.link };
        }),
      },
    },
  });
  res.send(project);
};

exports.project_update_by_id = async function (req, res) {
  const project = await prisma.project.update({
    where: { id: req.params.projectId },
    data: {
      projectTitle: req.body.projectTitle,
      projectDescription: req.body.projectDescription,
      projectTagOne: req.body.projectTagOne,
      projectTagSecond: req.body.projectTagSecond,
      projectTagThird: req.body.projectTagThird,
      projectTagFourth: req.body.projectTagFourth,
      isPrivate: req.body.isPrivate,
    },
  });
  res.send(project);
};

exports.project_delete_by_id = async function (req, res) {
  await prisma.link.deleteMany({
    where: {
      projectId: req.params.projectId,
    },
  });
  const project = await prisma.project.delete({
    where: { id: req.params.projectId },
  });
  res.send(project);
};

exports.project_get_collaborators = async function (req, res) {
  const collaborators = await prisma.usersOnProjects.findMany({
    where: {
      project: { projectId: req.params.projectId },
    },
    include: {
      user: true,
    },
  });
  res.send(collaborators);
};

exports.project_contain_collaborators = async function (req, res) {
  const collaborator = await prisma.usersOnProjects.findUnique({
    where: {
      project: { projectId: req.params.projectId },
      user: { id: req.params.userId },
    },
    include: {
      user: true,
    },
  });
  res.send(collaborator);
};

exports.project_add_collaborators = async function (req, res) {
  const collaborator = await prisma.usersOnProjects.create({
    data: {
      user: { connect: { id: req.body.userId } },
      project: { connect: { projectId: req.params.projectId } },
    },
  });
  res.send(collaborator);
};

exports.project_remove_collaborators = async function (req, res) {
  const collaborator = await prisma.usersOnProjects.delete({
    where: {
      userId: req.body.userId,
      projectId: req.params.projectId,
    },
  });
  res.send(collaborator);
};

exports.project_get_links = async function (req, res) {
  const collaborator = await prisma.link.findMany({
    where: {
      projectId: req.params.projectId,
    },
  });
  res.send(collaborator);
};

exports.project_remove_link_by_id = async function (req, res) {
  const collaborator = await prisma.Link.delete({
    where: {
      userId: req.body.userId,
      projectId: req.params.projectId,
    },
  });
  res.send(collaborator);
};
