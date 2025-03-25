//3. Play with Functions

////1. Create a function to display numbers from 1 to 100.

function displayNumbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

displayNumbers();

//// 2. Create a function to display today's date in DD/MM/YYYY format. 

function displayTodaysDate() {
  const today = new Date();
  
  const day = String(today.getDate()).padStart(2, '0'); 
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  
  const formattedDate = `${day}/${month}/${year}`;
  
  console.log(formattedDate);
}

displayTodaysDate();


//Create a function which accepts an array of numbers as parameter and return the average of those numbers. 

function calculateAverage(numbers) {
  
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return average;
}

//value

const numbersArray = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray);
console.log(`The average is: ${average}`);


//// Create a function to reverse a given string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// value

const originalString = "dog";
const reversedString = reverseString(originalString);
console.log(reversedString); 


//// 4 Arrays & conditions


//// Create an array of movie objects with title, ratings (array of numbers).

const movies = [
  {
    title: "Dragon",
    ratings: [9, 8, 9, 10, 8]
  },
  {
    title: "Kanguva",
    ratings: [1, 2]
  },
  {
    title: "Kingston",
    ratings: [10, 9, 10, 9, 9]
  }
];

console.log(movies);

//// Write a function to calculate the average rating of each movie

function calculateAverageRatings(movies) {
  return movies.map(movie => {
   
    const sum = movie.ratings.reduce((acc, rating) => acc + rating, 0);
    
    const average = sum / movie.ratings.length;
    
    return {
      title: movie.title,
      averageRating: average
    };
  });
}

const averageRatings = calculateAverageRatings(movies);
console.log(averageRatings);


// filter abobe 4

function getMoviesAboveRating(movies, minRating) {
  return movies
    .map(movie => {
      const sum = movie.ratings.reduce((acc, rating) => acc + rating, 0);
      const average = sum / movie.ratings.length;
      
      return {
        title: movie.title,
        averageRating: average
      };
    })
    .filter(movie => movie.averageRating > minRating); g
}

const filteredMovies = getMoviesAboveRating(movies, 4);
console.log(filteredMovies);

// highest-rated movie

function getHighestRatedMovie(movies) {

  const movieWithAvgRatings = movies.map(movie => {
    const sum = movie.ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / movie.ratings.length;
    return {
      title: movie.title,
      averageRating: average
    };
  });

  const highestRatedMovie = movieWithAvgRatings.reduce((highest, current) => {
    return (current.averageRating > highest.averageRating) ? current : highest;
  });

  return highestRatedMovie;
}

const highestRated = getHighestRatedMovie(movies);
console.log(highestRated);