export default class LoadScene extends Phaser.Scene {
    config = {
        key:{
            background:'background',
            ground:'ground',
            player:'player',
            zombie:'zombie'
        },
        dir:{
            assets:'../assets/',
        }
    }
    preload() {
        this.load.image(this.config.key.background,this.config.dir.assets+'map/background.png');
        this.load.image(this.config.key.ground,this.config.dir.assets+'map/ground.png');
        this.load.spritesheet(this.config.key.player, this.config.dir.assets+'sprite/player.png', { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet(this.config.key.zombie, this.config.dir.assets+'sprite/zombie.png', { frameWidth: 40, frameHeight: 40 });
        
    }
    create(){
        this.background = this.add.image(0,0,this.config.key.background);
        this.background.setOrigin(0,0);
        let text = this.add.text(220,200,`\n Spress ENTER to start`, { font: "bold 32px Arial", fill: "#fff",align: 'center'});
        this.input.keyboard.on('keydown-' + 'ENTER', (event)=>{
            this.scene.start('playScene');
        });
    }
}