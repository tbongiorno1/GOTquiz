/* eslint-env jquery */

class Question {
  constructor() {
    this.questionList = ['You are walking through the woods. You see a young boy all alone holding a sign for donations of coins. As you begin to approach you have a weird feeling that something is wrong. What do you do?', 'While doing your chores in the castle you over-hear a juicey bit of information about the queen. What do you do with this information?'];
    this.answerOneList = ['Walk over and give the boy some coins Youre sure its nothing', '1.2'];
    this.answerTwoList = ['Run like the wind! Who knows what kind of scam this bandit is pulling!', '2.2'];
    this.answerThreeList = ['Skeptically walk over and question the boy', '3.2'];
    this.answerFourList = ['Draw your sword/. Today is not the day you die', '4.2'];
    this.imgList = ['http://i.imgur.com/bFzPiBP.jpg', 'http://i.imgur.com/NAPMUFQ.jpg'];
    this.questionCount = 0;
    this.characterGuess = 0;
  }
  questionPlusOne() {
    this.characterGuess += 1;
  }
  questionPlusTwo() {
    this.characterGuess += 2;
  }
  questionPlusThree() {
    this.characterGuess += 3;
  }
  questionPlusFour() {
    this.characterGuess += 4;
  }
  render() {
    const newWindow = document.createElement('div');
    newWindow.setAttribute('class', 'questionWindow');
    newWindow.innerHTML = `
      <img src='${this.imgList[this.questionCount]}' style="margin:auto; width:500px;display:block"/>
      <h3>${this.questionList[this.questionCount]}</h3>
      <ul id="answerList" class="list-inline">
      <li><button class='button'>${this.answerOneList[this.questionCount]}</button></li>
      <li><button class='button'>${this.answerTwoList[this.questionCount]}</button></li>
      <li><button class='button'>${this.answerThreeList[this.questionCount]}</button></li>
      <li><button class='button'>${this.answerFourList[this.questionCount]}</button></li>
      </ul>
      `;
    this.questionCount ++;
    document.body.appendChild(newWindow);
    this.clickEventHandler();
  }
  clickEventHandler() {
    const self = this;
    const allButtons = document.getElementsByClassName('button');
    for (let butts of allButtons) {
      butts.addEventListener('click', function () {
        if (this.butts === this.answerOneList) {
          console.log(self.characterGuess);
          self.questionPlusOne();
          console.log(self);
          console.log(self.characterGuess);
        } else if ($('.button').on('click') === this.answerTwoList) {
          self.questionPlusTwo();
        } else if ($('.button').on('click') === this.answerThreeList) {
          self.questionPlusThree();
        } else if ($('.button').on('click') === this.answerFourList) {
          self.questionPlusFour();
        }
        // this.characterGuess +1;
        // console.log(this.characterGuess);
        self.render();
      });
    }
  }
}

// const questionOne = new Question('You are walking through the woods. You see a young boy all alone holding a sign for donations of coins. As you begin to approach you have a weird feeling that something is wrong. What do you do?', 'Walk over and give the boy some coins. Youre sure its nothing', 'Run like the wind! Who knows what kind of scam this bandit is pulling!', 'Other Guys House', 'The house no one cares about', 'http://i.imgur.com/bFzPiBP.jpg', 1);
// // questionOne.render(1);
//
// const questionTwo = new Question('While doing your chores in the castle you over-hear a juicey bit of information about the queen. What do you do with this information?', 'Run directly to Lord Varus to win his favor', 'Sell the information to Littlefinger', 'Blackmail Cersei directly', 'Nothing. You would never get yourself involved with this type of risky business.', 'http://i.imgur.com/NAPMUFQ.jpg', 2);
// // questionTwo.render(2);
//
// const questionThree = new Question('Which house do you belong to?', 'Bad Guys House', 'Good Guys House', 'Other Guys House', 'The house no one cares about', 'http://i.imgur.com/Y1anZ7w.jpg', 3);
// // questionThree.render(3);
