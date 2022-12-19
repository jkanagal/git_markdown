

const input = process.argv.slice(2);

const inputcheck = function () {
  let result = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0 || (input[i].isNaN)) {
      return result = false;
    }
  } return result;
};

if (input.length !== 0 && inputcheck() === true) {
  for (let i = 0; i < input.length; i++) {
    setTimeout(() => {
      process.stdout.write(`'\x07' : dings at ${input[i]} second \n`);
    }, input[i]);
  }
} else {
  return process.stdout.write('not valid');
}


