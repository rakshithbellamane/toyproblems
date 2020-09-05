// population will change only during the years of birth or death
const findMaxYear = (births, deaths, min, max) => {
  // build an array of how many people were born or died on a particular
  let popDelta = {};
  
  births.forEach(year => popDelta[year] ? popDelta[year]++ : popDelta[year] = 1);
  // we need to do year+1 because on the year of death, we need to count the person as alive. So the death counts to the next year;
  deaths.forEach(year => popDelta[year+1] ? popDelta[year+1]-- : popDelta[year+1] = -1);

  years = {};
  let year = min;
  let currentAlive=0;
  let maxAlive=currentAlive, maxYear;

  while (year <= max) {
    if (popDelta[year]) {
      currentAlive += popDelta[year];

      if (currentAlive > maxAlive) {
        maxAlive = currentAlive;
        maxYear = year;
      }
    }
    year++;
  }

  console.log(maxAlive);
  return maxYear;
}

const births = [1912,1920,1910,1901,1910,1923,1913,1990,1983,1975,1953];
const deaths = [1915,1990,1998,1972,1998,1982,1998,1998,1999,1994,2000];

console.log(births.sort());
console.log(deaths.sort());
console.log(findMaxYear(births, deaths, 1900, 2000));