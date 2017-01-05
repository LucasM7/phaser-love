import {MainState} from './main';

class SimpleGame extends Phaser.State{

  constructor() {
    super();
    let config: Phaser.IGameConfig = {
      width: 800,
      height: 600,
      renderer: Phaser.AUTO,
      parent: '',
      state: this,
      forceSetTimeOut: false
    };
    this.game = new Phaser.Game(config);
  }

  preload() {
    this.game.state.add('main', MainState);
  }

  create() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.refresh();
    this.game.state.start('main');
  }
}
let game = new SimpleGame();