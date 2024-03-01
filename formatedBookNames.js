const { books } = require('./data/library');

const formatedBookNames = () => {
  // escreva seu código aqui
  const stringsArray = books.map(
    ({name, genre, author: {name: authorName}}) => {
      return `${name} - ${genre} - ${authorName}`
    }
  );
  return stringsArray;
};

module.exports = { formatedBookNames };
