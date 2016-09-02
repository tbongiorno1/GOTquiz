/* eslint-env jquery */

class App {
  constructor() {
    $(this).$game;
    $(this).$gameView;
  }

  render() {
    const $newGameView = new GameView();
    $(this).$GameView = $newGameView;
    $newGameView.render();
    $newGameView.revealQuestion();
  }
}
