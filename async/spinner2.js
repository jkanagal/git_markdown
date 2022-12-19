//process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spinnerchars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < spinnerchars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerchars[i]}`);
  }, 300 * i);
}


