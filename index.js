let readlinesync=require("readline-sync");
const chalk=require('chalk');
let quizQuestions=[{
  question:"1) What is the average of first five multiples of 12 ?",
  options:['36','38','40','42'],
  answer:'36'
},
{
  question:"2) If January 1, 1996, was Monday, what day of the week was January 1, 1997 ?",
  options:['Thursday','Wednesday','Friday','Sunday'],
  answer:'Wednesday'
},
{
  question:"3)A mother is twice as old as her son. If 20 years ago, the age of the mother was 10 times the age of the son, what is the present age of the mother ?",
  options:['38 years','40 years','43 years','45 years'],
  answer:'45 years'
},
{
  question:"4) 40 % of 280 =?",
  options:['112','116','115','120'],
  answer:'112'
},
{
  question:"5) What is the probability of getting an even number when a dice is rolled ?",
  options:['1/5','1/2','1/3','1/4'],
  answer:'1/2'
},
{
  question:"6) B and C are siblings. M has two children and he is son of E, who is father-in-law of H. H has only one son. C is not granddaughter of E.How is B related to E ?",
  options:['Granddaughter','Son','Daughter','Can’t be determined'],
  answer:'Granddaughter'
},
{
  question:"7) Introducing Kavi, Veena said, “She is the sister of the son of the wife of my husband”. How is Veena related to Kavi ?",
  options:[' Aunt','Sister','Mother' ,'Daughter'],
  answer:'Mother'
},
{
  question:"8) A and B are brothers. E is the daughter of F. F is the wife of B. What is the relation of E to A ? ",
  options:['niece','Sister-In-Law','Sister','daughter'],
  answer:'niece'
},
{
  question:"9) A is the brother of B, C is the father of D, E is the mother of B. A and D are brother. How is E related to C ?",
  options:['Niece','Wife','Sister','Sister-in-law'],
  answer:'Wife'
},
{
  question:"10) Complete the series 2, 5, 9, 19, 37.......",
  options:['76','74','75','None of these'],
  answer:'75'
}
];
    let score=0;
    let userName=readlinesync.question("Please enter your name?");
    console.log(chalk.yellowBright.bold(`HI! ${userName} 👋 , Welcome to see interested quiz questions \n`));
    console.log(chalk.bgRedBright.underline.bold("RULES📣 :"));
    console.log("1)For every " +chalk.bold('Correct Answer')+ " you get "+ chalk.bold("2 points"));
    console.log("2)For every "+ chalk.bold('Wrong Answer')+" you get "+chalk.bold("-1 points \n"));

    if(readlinesync.keyInYN("Can we start quiz?(type 'y' to start) \n")){
        console.log(chalk.yellow.bold("All the Best Quiz started 👍 👍 \n"));
        function checkAns(question,options,answer){
            console.log(chalk.cyanBright.bold(question));
            index=readlinesync.keyInSelect(options,'');
            userAnswer=options[index];
  
            if (userAnswer===answer){
                console.log(chalk.green.bold.italic("Correct Answer! ✔ \n"));
                score+=2;
            }else{
                console.log(chalk.redBright.bold("Wrong Answer ❌"));
                console.log(`Correct Answer is ${chalk.green.bold(answer)} \n`);
                score--;
      }}
    }
        else{
        console.log("Thank you,You can exit Now");
        
        
    }
    
 
    for(let i=0;i<quizQuestions.length;i++){
        checkAns(quizQuestions[i].question,quizQuestions[i].options,quizQuestions[i].answer);
    }
console.log(chalk.yellowBright.bold("Thank you, Quiz completed 🎉 🎊"));
console.log("");

if (score<=11 && score>=5){
  console.log(chalk.yellowBright("You get average Score"));
}else if(score<=5) {
  console.log(chalk.yellowBright("You get very poor Score ,Work Hard 💯"));
}else{
  console.log(chalk.yellowBright("You get Very Good Score!"));
  console.log(chalk.green("Congratulations! 🤝"));
}
console.log(chalk.yellowBright(`${userName} your final Score is ${chalk.green.underline(score)}\n`));

let highScore=[
  {
    username:"vijay",
    point:14
  },
  {
    username:"pugazh",
    point:11
  },
  {
   username:"suriya",
   point:8
  }
]


let max1=highScore[0].point;
let max2=highScore[1].point;
let max3=highScore[2].point;
if (score>=max1){
  console.log("Congratulations ,You reach NO:1 spot in top score list \n");
  highScore[2].username=highScore[1].username;
  highScore[2].point=highScore[1].point;
  highScore[1].username=highScore[0].username;
  highScore[1].point=highScore[0].point;
  highScore[0].username=userName;
  highScore[0].point=score;
  
  console.log(chalk.blue("Top three Scorer List:"));
  console.table(highScore);

}else if(score>=max2){
  console.log("Congratulations ,You reach NO:2 spot in top score list \n");
  highScore[2].username=highScore[1].username;
  highScore[2].point=highScore[1].point;
  highScore[1].username=userName;
  highScore[1].point=score;
  console.log(chalk.blue("Top three Scorer List:"));
  console.table(highScore);

}else if(score>=max3){
  console.log("Congratulations ,You reach NO:3 spot in top score list \n");
  highScore[2].username=userName;
  highScore[2].point=score;
  console.log(chalk.blue("Top three Scorer List:"));
  console.table(highScore);
}else{
  console.log("Sorry , Your score not enough to reach our top three list. \n Better Luck Next Time! \n");
  console.log(chalk.blue("Top three Scorer List: "));
  console.table(highScore);

}
