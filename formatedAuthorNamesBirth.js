const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  // escreva seu código aqui
  const stringsFormated = books.map(
    ({ author: { name, birthYear } }) => `${name} - ${birthYear}`,
  );
  return stringsFormated;
};

module.exports = { formatedAuthorNamesBirth };
