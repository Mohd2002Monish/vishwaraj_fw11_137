function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var bag = input[1].trim().split(' ')
    var m = +input[2].trim()
}

if (process.env.USERNAME === `PC`) {
  runProgram(`5
  aabbc
  4
  abcd`);
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
