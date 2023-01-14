for (let i = 0; i < 5; i++) {
      log = () => {
            console.log(i);
      }
      setTimeout(log,1000,i);
}

// The code above should log 5 five times since setTimeout runs the log function after the for loop is done.

// setTimeout is async, so it’s queued in the event loop and runs when all the synchronous code is done running.

//       Therefore, first the for loop runs and creates a new log function, which captures the variable i.

// Then the setTimeout schedules it to be run after the for loop is done.

// Then the log function runs after the loop is done when i is 5.

// After 100 milliseconds, the 5scheduled log callbacks are called by setTimeout.

// log reads the current value of i, which is 5 and runs log with that value.