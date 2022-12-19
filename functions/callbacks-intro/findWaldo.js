// The second argument/parameter is expected to be a (callback) function

// const findWaldo = function (names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// };

const findWaldo = function (names, found) {
  names.forEach(i => {
    if (i === "Waldo") {
      return found(names.indexOf(i));   // execute callback
    }
  });
};

const found = function(index) {
  console.log("Found him! at index " + index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], found);