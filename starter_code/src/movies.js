/* eslint no-restricted-globals: 'off' */

// const newDirector = Movies.map( movie => {
//     movie.director
// })

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function average(array) {
  const total = array.reduce((total, key) => {
    const newNum = Number(key.rate);
    return total + newNum;
  }, 0);
  return parseFloat(total / array.length).toFixed(2);
}

// console.log(average(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies

const checkWhat = (array, key, value) =>
  array.filter(i => i[key].includes(value));

// const drama = movies.filter(i => i.genre.includes("Drama"));

// console.log(average(checkWhat(movies, "genre", "Drama")));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const returnValue = str => {
  let split = str.split(" ");
  let newValue = value =>
    value.filter(i => {
      return i !== "h" && i !== "m" && i !== "i" && i !== "n";
    });

  if (split[0] && split[1]) {
    let hour = newValue(split[0].split(""));
    let min = newValue(split[1].split(""));
    let totalMin = Number(hour.join("")) * 60 + Number(min.join(""));
    return totalMin;
  } else {
    // split[0]
    if (split[0].indexOf("h")) {
      return Number(newValue(split[0].split(""))) * 60;
    } else {
      return Number(newValue(split[0].split("")));
    }
  }
};

const replaceDur = movies.map(i => {
  let newMovie = { ...i };
  newMovie.duration = returnValue(newMovie.duration);
  return newMovie;
});

const sortedList = replaceDur.sort((a, b) => {
  return a.duration > b.duration ? -1 : 1;
});

console.log(sortedList);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const spielbergArray = checkWhat(movies, "director", "Steven Spielberg").length;

console.log(`Steven Spielberg has ${spielbergArray} movies in this array`);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const alpSortList = movies.sort((a, b) => {
  var titleA = a.title.toLocaleUpperCase();
  var titleB = b.title.toLocaleUpperCase();
  return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
});

console.log(alpSortList.slice(0, 20));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

console.log(replaceDur);
// BONUS Iteration: Best yearly rate average - Best yearly rate average

// let objs = [];

// function abc(key1, key2, val1, val2) {
//   return objs.push({
//     [key1]: val1,
//     [key2]: val2
//   });
// }

// abc("fname", "sname", "suwi", "rathore");
// abc("prof", "country", "Devpl", "NL");

// console.log(objs);
