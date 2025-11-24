class User {
  constructor(fName, lName, age, isMarried) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.isMarried = isMarried
  }

   getInfo() {
    console.log(`FirstName: ${this.firstName}\nLastName: ${this.lastName}\nAge: ${this.age}\nMarried: ${this.isMarried}`);
   }
}

// class Movie {
//   constructor(title, yearReleased) {
//     this.title = title;
//     this.year = yearReleased;
//   }
// }

// const movie = new Movie("Silence", 1994);
// console.log(movie);

const user = new User("Smith", "Blake", 35, true)
console.log(user);
console.log(user.getInfo());