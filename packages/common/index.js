const project = {
  name: "My Awesome APP",
  website: "http://01dev.codes/",
  authors: ["Luiz Almeida"]
};

const getAuthors = () => project.authors.join(", ");

module.exports = { project, getAuthors };
