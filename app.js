console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function add(arr) {
  let sum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }
  arr.forEach((number) => {
    sum += number;
  });

  return sum;
}

const array1 = [2, 22, 12, 17, 18, 39, 129];
console.log(add(array1));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {
  title: "",
  pages: "",
  author: "",
  readCount: "",
  info: function () {
    console.log(
      this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " read " +
        this.readCount +
        " times."
    );
  },
};

let myBook = book;

myBook.title = "Grumpy Monkey";
myBook.pages = 32;
myBook.author = "Max Lang";
myBook.readCount = 0;
myBook.info();
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function convert(sentence) {
  let result = [];

  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    letters.reverse();
    let reverseWord = letters.join("");

    result.push(reverseWord);
  }
  return result.join(" ");
}

// function convert2(sentence) {
//   let words = sentence.split(" ");
//   let result = words.map((word) => {
//     let letters = word.split("");
//     letters.reverse();
//     let reverseWord = letters.join("");

//     result.push(reverseWord);
//   });
//   return result.join(" ");
// }

console.log(convert(sentence));

console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function convertCSV(data) {
  // you will determine headers first
  //Split the header string to array of headers
  let headers = data.slice(0, data.indexOf("\n")).split(","); // splits into ["name," "age"]

  //determine the row of data

  let valueLists = data.slice(data.indexOf("\n") + 1).split("\n");

  let customer = valueLists.map((row) => {
    let values = row.split(",");
    let obj = {};
    values.forEach((col, idx) => {
      if (idx < headers.length) {
        obj[headers[idx]] = col;
      } else {
        obj[`misc${idx}`] = col;
      }
    });
    return obj;
  });
  return customer;
}

console.log(convertCSV(csvData));
