let field = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];

function getUserInput(symbol) {
  const command = prompt(
    `Куда поставить ${symbol}. Напишите 2 координаты: по y и по x, через запятую`
  );
  const arrayCoordinates = command.split(",");

  const x = arrayCoordinates[0];
  const y = arrayCoordinates[1];
  if (field[x][y] === "*") {
    field[x][y] = symbol;
    alert(`${field[0]}\n${field[1]}\n${field[2]}`);

    if (field[x].every((element) => element === symbol)) {
      alert(`Победил ${symbol} !`);
    }

    if (field.every((element) => element[y] === symbol)) {
      alert(`Победил ${symbol} !`);
    }

    if (
      field[0][0] === symbol &&
      field[1][1] === symbol &&
      field[2][2] === symbol
    ) {
      alert(`Победил ${symbol} !`);
    }

    if (
      field[2][0] === symbol &&
      field[1][1] === symbol &&
      field[0][2] === symbol
    ) {
      alert(`Победил ${symbol} !`);
    }
  }

  getUserInput(symbol === "X" ? "0" : "X");
}

console.log(field);
getUserInput("X");
