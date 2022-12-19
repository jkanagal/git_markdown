

const input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {
  setTimeout(() => {
    process.stdout.write(`'\x07' : dings at ${input[i]} \n`);
  }, input[i]);
}

