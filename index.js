/* eslint-env jquery */

function startGame() {
  const newQuestion = new Question;
  newQuestion.render();
  $(this).remove();
  $('html, body').animate({
      scrollTop: $(".questionWindow").offset().top
  }, 1000);
}

$('#startButton').on('click', startGame);

function startNewGame() {
  window.location.reload();
}

$('#newQuizButton').on('click', startNewGame);
