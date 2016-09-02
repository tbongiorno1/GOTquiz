/* eslint-env jquery */

function startGame() {
  const newQuestion = new Question;
  newQuestion.render();
  // question.render();
  $(this).remove();
}

$('#startButton').on('click', startGame);
