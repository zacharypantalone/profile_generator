const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}.`);

  rl.question("What's your favourite colour?", (answer2) => {
    console.log(`Hi, ${answer}. Your favourite colour is ${answer2}.`);

    rl.question("What's an activity you like doing?", (answer3) => {
      console.log(`Hey ${answer}, we love that your favourite activity is ${answer3}.`);

      rl.question("What do you listen to while doing that?", (answer4) => {
        console.log(`${answer4} is great to listen to while ${answer3}, ${answer}.`);

        rl.question("Which meal is your favourtite (eg: dinner, brunch, etc.)", (answer5) => {
          console.log(`YUM! We also love ${answer5}, ${answer}.`);

          rl.question("What's your favourtire thing to eat for that meal?", (answer6) => {
            console.log(`${answer6} is definitely the best thing you can have for ${answer5}!`);

            rl.question("Which sport is your absolute favourite?", (answer7) => {
              console.log(`We love wathching a good game of ${answer7}.`);

              rl.question("What is your superpower? In a few words, tell us what your are amazing at!", (answer8) => {
                console.log(`Wow! maybe you can show us how to ${answer8} some time!`);
                rl.close();
              
              });
                
            });
            
          });
              
        });
              
      });
          
    });
            
  });
            
});
        
          
          
      
        
        
    
      
      



    
    
    
  
  
  
  
  











