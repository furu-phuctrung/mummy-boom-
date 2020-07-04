export default class EndScene extends Phaser.Scene {
    config = {
        key:{
            background:'background'
        },
        dir:{
            assets:'../assets/',
        }
    }
    constructor(){
        super('endScene');
    }
    init(data){
        this.score = data.score;
    }
    create(){
        this.background = this.add.image(0,0,this.config.key.background);
        this.background.setOrigin(0,0);
        let text = this.add.text(220,200,`Press enter to again !!! \n Score:${this.score}`, { font: "bold 32px Arial", fill: "#fff",align: 'center'});
        this.input.keyboard.on('keydown-' + 'ENTER', (event)=>{
            this.scene.start('playScene');
        });
    }
}