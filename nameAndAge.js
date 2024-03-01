const { books } = require('./data/library');

const nameAndAge = () => {
  // escreva seu código aqui
  let authorsArray = books.map(
    ({author: {name, birthYear}, releaseYear}) => {
      return {
        author: name,
        age: releaseYear - birthYear,
      };
    }
  );
  authorsArray = authorsArray.sort((book1, book2) => {
    if (book1.age > book2.age) {
      return 1;
    } else {
      return -1;
    }
  });
  return authorsArray;
};

module.exports = { nameAndAge };
