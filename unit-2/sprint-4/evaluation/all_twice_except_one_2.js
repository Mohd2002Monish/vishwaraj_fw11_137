function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i+=2) {
        var n = +input[i].trim()
        var arr = input[i+1].trim().split(' ').map(Number)
    }

}

if (process.env.USERNAME === `PC`) {
  runProgram(`1
  5
  1 2 1 3 4 4 5 2 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding(`ascii`);
  let read = ``;
  process.stdin.on(`data`, function (input) {
    read += input;
  });
  process.stdin.on(`end`, function () {
    read = read.replace(/\n$/, ``);
    read = read.replace(/\n$/, ``);
    runProgram(read);
  });
  process.on(`SIGINT`, function () {
    read = read.replace(/\n$/, ``);
    runProgram(read);
    process.exit(0);
  });
}
