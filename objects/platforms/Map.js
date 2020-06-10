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
        let verticalEndpoint = this.renderVerticalGrounds(0,0,12);
        verticalEndpoint.x += 100;
        verticalEndpoint.y = 0;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,4);
        verticalEndpoint.y += 50;
        this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,5);
        verticalEndpoint.y -= 100;
        verticalEndpoint.x += 50;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,1);
        verticalEndpoint.y -= 100;
        verticalEndpoint.x += 100;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,1);
        verticalEndpoint.y -= 100;
        verticalEndpoint.x += 100;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,1);
        verticalEndpoint.x += 100;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,1);
        verticalEndpoint.y -= 100;
        verticalEndpoint.x += 100;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,1);
        verticalEndpoint.x += 50;
        verticalEndpoint.y += 50;
        this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,3);
        verticalEndpoint.x += 50;
        verticalEndpoint.y -= 50;
        verticalEndpoint = this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,2);
        verticalEndpoint = this.renderVerticalGrounds(200,350,3);
        verticalEndpoint.x += 100;
        verticalEndpoint.y -= 250;
        this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,5);
        verticalEndpoint.x += 100;
        this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,5);
        verticalEndpoint.x += 100;
        verticalEndpoint.y -= 100;
        this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,5);
        verticalEndpoint.x += 150;
        verticalEndpoint.y += 200;
        this.renderVerticalGrounds(verticalEndpoint.x,verticalEndpoint.y,3);

        
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