import config from '../config.js';
export default class EndScene extends Phaser.Scene {
    constructor(){
        super('endScene');
    }
    init(data){
        this.score = data.score;
    }
    create(){
        this.background = this.add.image(0,0,config.key.background);
        this.background.setOrigin(0,0);
        let text = this.add.text(0,0,`Press enter to again !!! \n Score:${this.score}`, { font: "bold 32px Arial", fill: "#fff",align: 'center'});
        Phaser.Display.Align.In.Center(text,this.add.zone(400, 300, 800, 600));
        this.input.keyboard.on('keydown-' + 'ONE', (event)=>{
            this.scene.start('playScene1');
        });
        this.input.keyboard.on('keydown-' + 'TWO', (event)=>{
            this.scene.start('playScene2');
        });
    }
}