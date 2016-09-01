class Question {
  constructor(question, answerOne, answerTwo, answerThree, answerFour, imgSrc, questionNumber) {
    this.question = question;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
    this.answerThree = answerThree;
    this.answerFour = answerFour;
    this.imgSrc = imgSrc;
    this.questionNumber = questionNumber;
  }
  render() {
    const newWindow = document.createElement('div');
    newWindow.setAttribute('class', 'questionWindow');
    newWindow.innerHTML = `
    <img src='${this.imgSrc}' style="margin:auto; width:500px;display:block"/>
    <h3>${this.question}</h3>
    <ul id="answerList" class="list-inline">
    <li><a class='button ${this.questionNumber}'>${this.answerOne}</a></li>
    <li><a class='button ${this.questionNumber}'>${this.answerTwo}</a></li>
    <li><a class='button ${this.questionNumber}'>${this.answerThree}</a></li>
    <li><a class='button ${this.questionNumber}'>${this.answerFour}</a></li>
    </ul>
    `;
    document.body.appendChild(newWindow);

    let allButtons = document.getElementsByClassName(this.questionNumber);
      for (let butts of allButtons) {
        butts.addEventListener('click', function () {
          console.log('clicked');
      });
    }
  }
}


const questionOne = new Question('You are walking through the woods. You see a young boy all alone holding a sign for donations of coins. As you begin to approach you have a weird feeling that something is wrong. What do you do?', 'Walk over and give the boy some coins. Youre sure its nothing', 'Run like the wind! Who knows what kind of scam this bandit is pulling!', 'Other Guys House', 'The house no one cares about', 'http://i.imgur.com/bFzPiBP.jpg', 'one');
questionOne.render();

const questionTwo = new Question('While doing your chores in the castle you over-hear a juicey bit of information about the queen. What do you do with this information?', 'Run directly to Lord Varus to win his favor', 'Sell the information to Littlefinger', 'Blackmail Cersei directly', 'Nothing. You would never get yourself involved with this type of risky business.', 'http://i.imgur.com/NAPMUFQ.jpg', 'two');
questionTwo.render();

const questionThird = new Question('Which house do you belong to?', 'Bad Guys House', 'Good Guys House', 'Other Guys House', 'The house no one cares about', 'http://i.imgur.com/Y1anZ7w.jpg', 'three');
questionTwo.render();
