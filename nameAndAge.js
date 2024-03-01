const { books } = require('./data/library');

const nameAndAge = () => {
  // escreva seu código aqui
  let authorsArray = books.map(
    ({ author: { name, birthYear }, releaseYear }) => (
      { author: name, age: releaseYear - birthYear }
    ),
  );
  authorsArray = authorsArray.sort((book1, book2) => {
    let value;
    if (book1.age > book2.age) {
      value = 1;
    } else {
      value = -1;
    }
    return value;
  });
  return authorsArray;
};

module.exports = { nameAndAge };
