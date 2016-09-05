/* eslint-env jquery */

class Question {
  constructor() {
    this.questionList = ['You are walking through the woods. You see a young boy all alone holding a sign for donations of coins. As you begin to approach you have a weird feeling that something is wrong. What do you do?', 'While doing your chores in the castle you over-hear a juicey bit of information about the queen. What do you do with this information?'];
    this.answerOneList = ['Walk over and give the boy some coins Youre sure its nothing', 'Go about your business, you cannot be bothered with the business of Blackmail'];
    this.answerTwoList = ['Run like the wind! Who knows what kind of scam this bandit is pulling!', 'Run back to your quarters without thinking twice. What if someone has seen you?'];
    this.answerThreeList = ['Skeptically walk over and question the boy', 'Stay Hidden and listen a little more. Who knows what juicey details might be uncovered.'];
    this.answerFourList = ['Draw your sword, Today is not the day you die', 'Run directly to Lord Varus and spill your guts about everything you\'ve heard'];
    this.imgList = ['http://i.imgur.com/bFzPiBP.jpg', 'http://i.imgur.com/NAPMUFQ.jpg'];
    this.questionCount = 0;
    this.characterGuess = 0;
  }
  revealCharacter() {
    const charReveal = document.createElement('div');
    charReveal.setAttribute('class','charRevealWindow');
    if (this.characterGuess <= 3) {
      charReveal.innerHTML = `<img src='http://i.imgur.com/W0cSVmq.jpg' style="margin:auto; width:500px;display:block"/>
      <h3>You are a Hodor! So innocent.. So blissfully ignorant...</h3>
    `;
  } else if (this.characterGuess > 3 && this.characterGuess < 6) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/W0cSVmq.jpg' style="margin:auto; width:500px;display:block"/>
    <h3>You are a Hodor! So innocent.. So blissfully ignorant...</h3>
  `;
  } else if (this.characterGuess > 5) {
    charReveal.innerHTML = `<img src='http://i.imgur.com/W0cSVmq.jpg' style="margin:auto; width:500px;display:block"/>
    <h3>You are a Hodor! So innocent.. So blissfully ignorant...</h3>
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
    const y = $(window).scrollTop();
    $("html, body").animate({ scrollTop: y + $(window).height() }, 600);
    this.clickEventHandler();
  }
  clickEventHandler() {
    const self = this;
    const allButtons = document.getElementsByClassName('button');
    for (let butts of allButtons) {
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
