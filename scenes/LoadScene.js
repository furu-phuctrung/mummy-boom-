import config from './config.js';
export default class LoadScene extends Phaser.Scene {
    preload() {
        this.load.image(config.key.background,config.dir.assets+'map/background.png');
        this.load.image(config.key.ground,config.dir.assets+'map/ground.png');
        this.load.image(config.key.star,config.dir.assets+'map/star.png');
        this.load.spritesheet(config.key.player, config.dir.assets+'sprite/player.png', { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet(config.key.zombie, config.dir.assets+'sprite/zombie.png', { frameWidth: 40, frameHeight: 40 });
        
    }
    create(){
        this.background = this.add.image(0,0,config.key.background);
        this.background.setOrigin(0,0);
        let text = this.add.text(0,0,`Spress ENTER to start`, { font: "bold 32px Arial", fill: "#fff",align: 'center'});
        Phaser.Display.Align.In.Center(text,this.add.zone(400, 300, 800, 600));
        this.input.keyboard.on('keydown-' + 'ENTER', (event)=>{
            this.scene.start('playScene');
        });
    }
}