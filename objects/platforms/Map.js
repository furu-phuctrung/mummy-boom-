export default class Map extends Phaser.Physics.Arcade.StaticGroup{
    constructor(scene,ground,background){
        super(scene.physics.world,scene);

        this.ground = {
            key: ground, 
            width:50, 
            height:50
        };

        this.background = scene.add.image(0,0,background);
        this.background.setOrigin(0,0);
        this.renderMap();

        scene.physics.add.existing(this,true);
    }

    renderMap(){

        //Vertical
        let endpoint = this.renderVerticalGrounds(0,0,12);
        endpoint.x += 100;
        endpoint.y = 0;
        endpoint = this.renderVerticalGrounds(endpoint.x,endpoint.y,4);
        endpoint.y += 50;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,5);
        endpoint.y -= 100;
        endpoint.x += 50;
        endpoint = this.renderVerticalGrounds(endpoint.x,endpoint.y,1);
        endpoint.y -= 100;
        endpoint.x += 100;
        endpoint = this.renderVerticalGrounds(endpoint.x,endpoint.y,1);
        endpoint.y -= 100;
        endpoint.x += 100;
        endpoint = this.renderVerticalGrounds(endpoint.x,endpoint.y,1);
        endpoint.x += 100;
        endpoint = this.renderVerticalGrounds(endpoint.x,endpoint.y,1);
        endpoint.y -= 100;
        endpoint.x += 100;
        endpoint = this.renderVerticalGrounds(endpoint.x,endpoint.y,1);
        endpoint.x += 50;
        endpoint.y += 50;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,3);
        endpoint.x += 50;
        endpoint.y -= 50;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,2);
        endpoint.x += 100;
        endpoint.y -= 100;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,12);
        endpoint = this.renderVerticalGrounds(200,350,3);
        endpoint.x += 100;
        endpoint.y -= 250;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,5);
        endpoint.x += 100;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,5);
        endpoint.x += 100;
        endpoint.y -= 100;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,5);
        endpoint.x += 150;
        endpoint.y += 200;
        this.renderVerticalGrounds(endpoint.x,endpoint.y,3);


        //Horizontal
        endpoint = this.renderHorizontalGrounds(150,0,12);
        endpoint.x = 250;
        endpoint.y += 150;
        endpoint = this.renderHorizontalGrounds(endpoint.x,endpoint.y,5);
        endpoint.x = 150;
        endpoint.y += 100;
        endpoint = this.renderHorizontalGrounds(endpoint.x,endpoint.y,3);
        endpoint.x += 400;
        endpoint = this.renderHorizontalGrounds(endpoint.x,endpoint.y,1);
        endpoint.x -= 200;
        endpoint.y += 100;
        this.renderHorizontalGrounds(endpoint.x,endpoint.y,2);
        endpoint.x -= 100;
        endpoint.y += 100;
        this.renderHorizontalGrounds(endpoint.x,endpoint.y,3);
        endpoint.x = 50;
        endpoint.y += 100;
        this.renderHorizontalGrounds(endpoint.x,endpoint.y,14);
        
    }
    renderVerticalGrounds(startX,startY,count){
        let endpoint ={
            x: startX,
            y: startY,
        };
        for(let i = 0; i<count; i++){
            let newGround = this.create(startX,endpoint.y,this.ground.key);
            endpoint.y+=this.ground.width;
            newGround.setOrigin(0,0);
        }
        return endpoint;
    }
    renderHorizontalGrounds(startX,startY,count){
        let endpoint ={
            x: startX,
            y: startY,
        };
        for(let i = 0; i<count; i++){
            let newGround = this.create(endpoint.x,startY,this.ground.key);
            endpoint.x+=this.ground.width;
            newGround.setOrigin(0,0);
        }
        return endpoint;
    }
}