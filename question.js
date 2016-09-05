/* eslint-env jquery */

class Question {
  constructor() {
    this.questionList = ['What is your favorite song?', 'What is your favorite movie?', 'You are walking through the woods. You see a young boy all alone holding a sign for donations of coins. As you begin to approach you have a weird feeling that something is wrong. What do you do?', 'While doing your chores in the castle you over-hear a juicey bit of information about the queen. What do you do with this information?', 'On a scale of 0-3... how attracted to your relatives are you?'];
    this.answerOneList = ['A whole new world', 'Frozen', 'Walk over and give the boy some coins Youre sure its nothing', 'Go about your business, you cannot be bothered with the business of Blackmail', '0'];
    this.answerTwoList = ['Don\'t Stop believing', 'I Love You Man', 'Run like the wind! Who knows what kind of scam this bandit is pulling!', 'Run back to your quarters without thinking twice. What if someone has seen you?', '1'];
    this.answerThreeList = ['All the small things', 'The Notebook', 'Skeptically walk over and question the boy', 'Stay Hidden and listen a little more. Who knows what juicey details might be uncovered.', '2'];
    this.answerFourList = ['No song... music is for the weak', 'Sharknado', 'Draw your sword, Today is not the day you die', 'Run directly to Lord Varus and spill your guts about everything you\'ve heard', '3'];
    this.imgList = ['http://i.imgur.com/E0u0Bk5.jpg', 'http://i.imgur.com/MIBBSZ1.jpg', 'http://i.imgur.com/bFzPiBP.jpg', 'http://i.imgur.com/NAPMUFQ.jpg', 'http://i.imgur.com/eRvGvdj.jpg'];
    this.questionCount = 0;
    this.characterGuess = 0;
  }
  revealCharacter() {
    const charReveal = document.createElement('div');
    charReveal.setAttribute('class', 'charRevealWindow');
    if (this.characterGuess === 5) {
      charReveal.innerHTML = `<img src='http://i.imgur.com/W0cSVmq.jpg' style="margin:auto; width:550px;display:block"/>
      <h3>You are Hodor! So innocent.. So blissfully ignorant...</h3>
    `;
  } else if (this.characterGuess === 6) {
      charReveal.innerHTML = `<img src='http://i.imgur.com/MZuIERu.png' style="margin:auto; width:550px;display:block"/>
      <h3>You are Tyrion! So thoughtful and calculated.</h3>
      `;
  } else if (this.characterGuess === 7) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/ZUdCy4B.jpg' style="margin:auto; width:550px;display:block"/>
    <h3>You are Ned Stark! Winter is Coming</h3>
  `;
} else if (this.characterGuess > 7 && this.characterGuess < 10) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/NLn7DoK.jpg' style="margin:auto; width:550px;display:block"/>
    <h3>You are Jon Snow! You know nothing.. At all...</h3>
  `;
} else if (this.characterGuess > 9 && this.characterGuess < 14) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/9N5O8fk.jpg' style="margin:auto; width:550px;display:block"/>
    <h3>You are Lord Varus! So many little birds.</h3>
  `;
} else if (this.characterGuess > 13 && this.characterGuess < 16) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/hmrnkUc.jpg' style="margin:auto; width:550px;display:block"/>
    <h3>You are Sir Jaime! You sureeeee do love your sister! Atleast you're handsome...</h3>
  `;
} else if (this.characterGuess > 15 && this.characterGuess < 19) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/PM2yC86.jpg' style="margin:auto; width:550px;display:block"/>
    <h3>You are Cersei! I'm thinking it's time to reevaluate life</h3>
  `;
} else if (this.characterGuess > 18) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/RsWt5U4.png' style="margin:auto; width:550px;display:block"/>
    <h3>You are King Joffrey.. That sucks..</h3>
  `;
}
  document.body.appendChild(charReveal);
    $('html, body').animate({
    scrollTop: $(".charRevealWindow").offset().top
    }, 1000);
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
      <img src='${this.imgList[this.questionCount]}' style="margin:auto; width:550px;display:block"/>
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
    const y = $(window).scrollTop();
    $('html, body').animate({ scrollTop: y + $(window).height() }, 1000);
    this.clickEventHandler();
  }
  clickEventHandler() {
    const self = this;
    const allButtons = document.getElementsByClassName('button');
    for (let butts of allButtons) {
      if (butts.id === 'buttonOne'){
        butts.addEventListener('click', () => {
          self.questionPlusOne();
          if (self.questionCount < 5) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      } else if (butts.id ==='buttonTwo') {
        butts.addEventListener('click', () => {
          self.questionPlusTwo();
          if (self.questionCount < 5) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      } else if (butts.id ==='buttonThree') {
        butts.addEventListener('click', () => {
          self.questionPlusThree();
          if (self.questionCount < 5) {
            self.render();
          } else {
            self.revealCharacter();
          }
        });
      } else if (butts.id === 'buttonFour') {
        butts.addEventListener('click', () => {
          self.questionPlusFour();
          if (self.questionCount < 5) {
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
