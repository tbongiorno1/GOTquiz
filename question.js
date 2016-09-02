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
  revealCharacter() {
    if (this.characterGuess <= 3) {
    console.log('You are Cersei');
    window.alert('You are a Cersei');
  } else if (this.characterGuess > 3 && this.characterGuess < 6) {
    console.log('You are a Stark');
    window.alert('You are a Stark');
  } else if (this.characterGuess > 5) {
    console.log('you are tyrion');
    window.alert('You are a Tyrion');
  }
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
      <li><button id="buttonOne" class='button'>${this.answerOneList[this.questionCount]}</button></li>
      <li><button id="buttonTwo" class='button'>${this.answerTwoList[this.questionCount]}</button></li>
      <li><button id="buttonThree" class='button'>${this.answerThreeList[this.questionCount]}</button></li>
      <li><button id="buttonFour" class='button'>${this.answerFourList[this.questionCount]}</button></li>
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
      console.log(self.characterGuess);
      if(butts.id === 'buttonOne'){
        butts.addEventListener('click', () => {
          self.questionPlusOne();
          if (self.questionCount < 2) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      } else if(butts.id ==='buttonTwo') {
        butts.addEventListener('click', () => {
          self.questionPlusTwo();
          if (self.questionCount < 2) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      } else if (butts.id ==='buttonThree') {
        butts.addEventListener('click', () => {
          self.questionPlusThree();
          if (self.questionCount < 2) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      } else if (butts.id === 'buttonFour') {
        butts.addEventListener('click', () => {
          self.questionPlusFour();
          if (self.questionCount < 2) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      }
      }
    }
  }
console.log(self.characterGuess);
