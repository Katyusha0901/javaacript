let field = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];

function getCrossInput() {
  const command = prompt(
    "Поставьте крестик (Х). Напишите 2 координаты: по y и по x, через запятую"
  );
  const arrayCoordinates = command.split(",");

  const x = arrayCoordinates[0];
  const y = arrayCoordinates[1];
  if (field[x][y] === "*") {
    field[x][y] = "X";
    if (field[x].every((element) => element === "X")) alert("Победил Х !");

    if (field.every((element) => element[y] === "X")) alert("Победил Х !");
  }
  if (field[0][0] === "X" && field[1][1] === "X" && field[2][2] === "X")
    alert("Победил Х !");
  if (field[2][0] === "X" && field[1][1] === "X" && field[0][2] === "X")
    alert("Победил Х !");
  getNilInput();
}

function getNilInput() {
  const command = prompt(
    "Поставьте нолик (0). Напишите 2 координаты: по y и по x, через запятую"
  );
  const arrayCoordinates = command.split(",");

  const x = arrayCoordinates[0];
  const y = arrayCoordinates[1];
  if (field[x][y] === "*") {
    field[x][y] = "0";
    if (field[x].every((element) => element === "0")) alert("Победил 0 !");

    if (field.every((element) => element[y] === "0")) alert("Победил 0 !");
    if (field[0][0] === "0" && field[1][1] === "0" && field[2][2] === "0")
      alert("Победил 0 !");
    if (field[2][0] === "0" && field[1][1] === "0" && field[0][2] === "0")
      alert("Победил 0 !");
  }
  getCrossInput();
}

console.log(field);
getCrossInput();
getNilInput();
