// console.log(date.getDate()); //retorna el dia actual 1 -31
// console.log(date.getHours()); //retorna la hora en valor entero  0 24

const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const day4 = document.getElementById("day4");
const day5 = document.getElementById("day5");
const day6 = document.getElementById("day6");
const day7 = document.getElementById("day7");
const day8 = document.getElementById("day8");
const day9 = document.getElementById("day9");
const day10 = document.getElementById("day10");
const day11 = document.getElementById("day11");
const day12 = document.getElementById("day12");
const day13 = document.getElementById("day13");
const day14 = document.getElementById("day14");
const day15 = document.getElementById("day15");
const day16 = document.getElementById("day16");
const day17 = document.getElementById("day17");
const day18 = document.getElementById("day18");
const day19 = document.getElementById("day19");
const day20 = document.getElementById("day20");
const day21 = document.getElementById("day21");
const day22 = document.getElementById("day22");
const day23 = document.getElementById("day23");
const day24 = document.getElementById("day24");
const day25 = document.getElementById("day25");
const day26 = document.getElementById("day26");
const day27 = document.getElementById("day27");
const day28 = document.getElementById("day28");
const day29 = document.getElementById("day29");
const day30 = document.getElementById("day30");

day1.addEventListener("click", () => {
  handleCurrentDay(1);
});
day2.addEventListener("click", () => {
  handleCurrentDay(2);
});
day3.addEventListener("click", () => {
  handleCurrentDay(3);
});
day4.addEventListener("click", () => {
  handleCurrentDay(4);
});
day5.addEventListener("click", () => {
  handleCurrentDay(5);
});
day6.addEventListener("click", () => {
  handleCurrentDay(6);
});
day7.addEventListener("click", () => {
  handleCurrentDay(7);
});
day8.addEventListener("click", () => {
  handleCurrentDay(8);
});
day9.addEventListener("click", () => {
  handleCurrentDay(9);
});
day10.addEventListener("click", () => {
  handleCurrentDay(10);
});
day11.addEventListener("click", () => {
  handleCurrentDay(11);
});
day12.addEventListener("click", () => {
  handleCurrentDay(12);
});
day13.addEventListener("click", () => {
  handleCurrentDay(13);
});
day14.addEventListener("click", () => {
  handleCurrentDay(14);
});
day15.addEventListener("click", () => {
  handleCurrentDay(15);
});
day16.addEventListener("click", () => {
  handleCurrentDay(16);
});
day17.addEventListener("click", () => {
  handleCurrentDay(17);
});
day18.addEventListener("click", () => {
  handleCurrentDay(18);
});
day19.addEventListener("click", () => {
  handleCurrentDay(19);
});
day20.addEventListener("click", () => {
  handleCurrentDay(20);
});
day21.addEventListener("click", () => {
  handleCurrentDay(21);
});
day22.addEventListener("click", () => {
  handleCurrentDay(22);
});
day23.addEventListener("click", () => {
  handleCurrentDay(23);
});
day24.addEventListener("click", () => {
  handleCurrentDay(24);
});
day25.addEventListener("click", () => {
  handleCurrentDay(25);
});
day26.addEventListener("click", () => {
  handleCurrentDay(26);
});
day27.addEventListener("click", () => {
  handleCurrentDay(27);
});
day28.addEventListener("click", () => {
  handleCurrentDay(28);
});
day29.addEventListener("click", () => {
  handleCurrentDay(29);
});
day30.addEventListener("click", () => {
  handleCurrentDay(30);
});

const date = new Date();
const day = document.getElementById("day");
const currentDate = document.getElementById("date");
const currentHour = document.getElementById("hour");

const noteDate = document.querySelector(".event-title");
noteDate.textContent = `Día ${date
  .getDate()
  .toString()
  .padStart(2, "00")} de Junio`;

function handleCurrentDay(id) {
  noteDate.textContent = `Día ${id.toString().padStart(2, "00")} de Junio`;
}

//metodos
setInterval(() => {
  const date = new Date(); // retorna la fecha actual
  const dayMonth = date.getDate(); //retorna el dia del mes  1 a 31
  const weekday = date.getDay(); //retorna el dia de la semana  0-domingo 6-sabado
  const month = date.getMonth() + 1; // retorna el mes acuatual donde 0 es enero y 11 diciembre
  const year = date.getFullYear(); //retorna el año actual
  const hours = date.getHours(); // retorna la hora actual
  const minutes = date.getMinutes(); // retorna el minuto actual
  const seconds = date.getSeconds(); //retorna el segundo actual
  day.textContent = dayMonth;

  if (hours > 12) {
    currentHour.textContent = `${hours.toString().padStart(2, "00")}:${minutes
      .toString()
      .padStart(2, "00")}:${seconds.toString().padStart(2, "00")} pm`;
  } else {
    currentHour.textContent = `${hours.toString().padStart(2, "00")}:${minutes
      .toString()
      .padStart(2, "00")}:${seconds.toString().padStart(2, "00")} am`;
  }

  if (weekday === 0) {
    return (currentDate.textContent = `Domingo Junio ${year}`);
  } else if (weekday === 1) {
    return (currentDate.textContent = `Lunes Junio ${year}`);
  } else if (weekday === 2) {
    return (currentDate.textContent = `Martes Junio ${year}`);
  } else if (weekday === 3) {
    return (currentDate.textContent = `Miercoles Junio ${year}`);
  } else if (weekday === 4) {
    return (currentDate.textContent = `Jueves Junio ${year}`);
  } else if (weekday === 5) {
    return (currentDate.textContent = `Viernes Junio ${year}`);
  } else if (weekday === 6) {
    return (currentDate.textContent = `Sabado Junio ${year}`);
  } else {
    console.log("no identifico el día de la semana");
  }
}, 1000);

const form = document.querySelector("#form");
const noteContainer = document.getElementById("notes");
const button = document.getElementById("btn");
const input = document.getElementById("input");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const elementHtml = document.createElement("p");
  elementHtml.classList.add("nota");
  elementHtml.textContent = `Agendado: ${input.value}`;
  noteContainer.appendChild(elementHtml);
});
