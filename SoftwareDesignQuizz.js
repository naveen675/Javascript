const quest = require('readline-sync'); 
const quiz = [
  {

    question :"1. You are receiving multiple orders from multiple customers at different time it may differ in milli seconds as well so now you need to deliver customer by sorting the priority of the order received . Which Data structure will be used in this please select one of the option below.(Hint : Think how you will solve in practical then check for the same functionality\n" ,
    options : ['1. Map','2. ArrayList','3. Queue','4. LinkedList'],
    answer : 3,
    wrong : '!Opps. Wrong Answer. Correct Answer Is 3 ',
    reason : "Because the person who ordered first should be delivered first .FIFO  \n"
  },

  {
    question :'2. You are opening a most watched video from netflix how you think the video will be loaded into your device? (Hint : Think in Optimal way)\n',
    options : ['1. By hitting netflix server through internet','2. A cache box will be maintained in internet by netflix which will be having most watched videos'],
    answer : 2,
    wrong : "!Opps. Wrong Answer. Correct Answer Is 2 ",
    reason : "Because when you open the video, Anyhow request to netflix will be sent through internet so its \n"
  },

  {
    question :"3. You need to develop a software for banking Which one of below should be prioritized while designing \n",
    options : ['1. Consistency','2. Availability','3. None of the Above'],
    answer : 1,
    wrong : "!Opps. Wrong Answer. Correct Answer Is 1 " ,
    reason : "Because suppose consider you have withdrawn from your account now it is 0 balance. you are checking your balance within 1 min of withdrawl where it should show balance is 0 even it takes time to display the balance. So here consistency matters instead of availability. \n"
  }
]


function validateAnswer(choice,correctAnswer){

  return (choice === correctAnswer);
}


function play(q){
  
  let choosenOption;
  
  quest.question("Please click 'ENTER' to display question");
  choosenOPtion = parseInt(quest.question('\n' + q.question + '\n' + q.options.join('\n')+'\n'));

  if(validateAnswer(choosenOPtion,q.answer)){

      console.log("Hurrah! your answer is correct ");
      score = score+10;
}
  else{
      console.log(q.wrong);
}
  console.log(q.reason);
}


function thankYou(gainedScore){

  console.log("Thanks for participating in software design Quiz. Your SCORE "+ gainedScore);

  if(gainedScore == 0){
    console.log("Please review concepts once again.Everything can be achieved by consistency");
}
  else if(gainedScore >0 && gainedScore <= 20){
    console.log("Congrats You are almost there just 1 step needed to design software");
}
  else{
    console.log("Awesome! you are ready to design");
}

  
}

function welcome(){

  console.log("Hi Welcome to Software Design Quizz ");
  console.log("Please see the instructions below ");
  console.log("There are 3 multiple choice questions \n each questions will be having 2 to 4 options \n you should be selecting either 1 or 2 or 3 or 4 ");
  console.log("\nPlease click ENTER if you are ready");
  quest.question();
}


let score =0;

welcome();

quiz.forEach(play);

thankYou(score);
