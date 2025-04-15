function delayedExecution(delay) {
  setTimeout(() => {
    console.log("Hello, after 3 seconds");
  }, delay);
}

delayedExecution(3000);
function repeatedExecution() {
  const intervalId = setInterval(() => {
    console.log("Hello, every 2 seconds");
  }, 2000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped logging after 10 seconds.");
  }, 10000);
}

repeatedExecution(); 
function fetchData() {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

fetchData(); 

function delayedPromise() {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 2000);
  });
}

//4
delayedPromise()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  }); 

//5

  function processData(callback) {

  setTimeout(() => {
   
    callback("Data Processed");
  }, 2000);
}


processData((data) => {
  console.log(data);  
}); 


//6

function waitFor(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000); 
  });
}

async function waitAndLog() {
  
  await waitFor(3);
  
  console.log("Waited 3 seconds");
}

waitAndLog(); 

async function fetchData() {
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    
    console.log(data);
  } catch (error) {
   
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData(); 

function promiseChaining() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Step 1");
    }, 1000);
  })
  .then(result => {
    console.log(result);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Step 2");
      }, 2000);
    });
  })
  .then(result => {
    console.log(result);
  });
}

// Call the function
promiseChaining(); 

function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Task 1 Done");
    }, 2000);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Task 2 Done");
    }, 3000);
  });
}

function executeTasks() {
  Promise.all([task1(), task2()])
    .then(results => {
      console.log(results[0]); 
      console.log(results[1]); 
    })
    .catch(error => {
      
      console.error('Error:', error);
    });
}

executeTasks();







