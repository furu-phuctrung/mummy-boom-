export default class Map{
    preload(){
        this.scene.load.image('sky', 'assets/sky.png');
        this.scene.load.image('ground', 'assets/platform.png');
        
    }
    render(){
        this.model = this.scene.physics.add.staticGroup();
        this.scene.add.image(400, 300, 'sky');

        this.model.create(400, 568, 'ground').setScale(2).refreshBody();
        this.model.create(600, 400, 'ground');
        this.model.create(50, 250, 'ground');
        this.model.create(750, 220, 'ground');
    }
}