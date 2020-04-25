export default class Map{
    preload(){
        this.scene.load.image('sky', 'assets/sky.png');
        this.scene.load.image('ground', 'assets/platform.png');
        
    }
    render(){
        this.map = this.scene.physics.add.staticGroup();
        this.scene.add.image(400, 300, 'sky');

        this.map.create(400, 568, 'ground').setScale(2).refreshBody();
        this.map.create(600, 400, 'ground');
        this.map.create(50, 250, 'ground');
        this.map.create(750, 220, 'ground');
    }
}