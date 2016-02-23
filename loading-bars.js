var mode = process.argv[2];
switch (mode) {
  case 'slash-spinner':
    var i = 0;
    var pos = ['\\', '|', '/', '-'];
    function testSpinner() {
      var spinterval = setInterval(function () {
        if (i === 0) {
          process.stdout.write(pos[0]);
          i++;
        } else {
          process.stdout.write("\b" + pos[i % 4]);
          i++;
        }
      }, 50);
      setTimeout(function () {
        clearInterval(spinterval);
        process.stdout.write("\b");
      }, 5000);
    }

    testSpinner();
    break;
  case 'shaded':
  default:
    var p = 0;
    var delBar = "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b";
    var full = '█';
    var chars = ['-', '░', '▒', '▓']
    process.stdout.write('[-------------------------]');
    function addProgress() {
      p = p + Math.floor(Math.random() * 5);
      p = p <= 100 ? p : 100;
      var prog = '';
      var temp = p;
      for (var i = 0; i < 25; i ++) {
        if (temp >= 4) {
          temp = temp - 4;
          prog += full;
        } else {
          prog += chars[temp];
          temp = 0;;
        }
      }
      process.stdout.write(delBar + '[' + prog + ']');
      next();
    }
    function next() {
      if (p < 100) {
        setTimeout(addProgress, Math.floor(Math.random() * 150 + 75));
      }
    }
    setTimeout(addProgress, 100);
    break;
}
