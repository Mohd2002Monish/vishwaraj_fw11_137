function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var bag = input[1].trim().split('')
    var m = +input[2].trim()
    var str = input[3].trim().split('')
    var ans = "Yes"
    for (let i = 0; i < m; i++) {
        var count = 0
        for (let j = 0; j < n; j++) {
            if (str[i]==bag[j]) {
                count++
            }
        }
        if (count==0) {
            ans = "No"
            break
        }
    }
    console.log(ans)
}

if (process.env.USERNAME === `PC`) {
  runProgram(`5
  aabbc
  3
  abc`);
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
