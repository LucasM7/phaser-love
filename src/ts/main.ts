export class MainState extends Phaser.State {
  
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  speed: number;

  preload() {
    this.game.load.spritesheet('player','assets/Player.png',64,81);
  }

  create() {
    this.player = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'player', 0);
    //this.player.scale.set(1.25,1.25);
    this.player.animations.add('moveR',[2,3,4],10,false);
    this.player.animations.add('moveL',[5,6,7],10,false);
    this.player.animations.add('stop',[0,1],1,false);
    
    this.speed = 300;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    this.game.physics.arcade.enableBody(this.player);
    
  }

  update(){
    this.player.body.velocity.set(0,0);

    if(this.cursors.left.isDown){
      this.player.animations.play('moveL');
      this.player.body.velocity.x = -this.speed;
    }

    if(this.cursors.right.isDown){
      this.player.animations.play('moveR');
      this.player.body.velocity.x = this.speed;
    }

    if(this.cursors.right.isUp && this.cursors.left.isUp){
      this.player.animations.play('stop');
    }

    if(this.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR))
      this.player.body.velocity.y = -this.speed;
  }
}