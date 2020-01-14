function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  setInterval(() => this.s1++, 1000); //this指的就是timer
  setInterval(function() {
    console.log("inside" + this.s2); //this 指的是window
  }, 1000); 
}

var timer = new Timer();
console.log("outside: " + timer.s2);
// setTimeout(() => console.log("s1: ", timer.s1), 3100);
// setTimeout(() => console.log("s2: ", timer.s2), 3100);