import {Matrix} from '../objects/platforms/map.js'
export default class ZombieAI{
    constructor(){
        this.directions={};
        this.goal = {};
    }
    getMapByMatrix(goal){
        let matrix=[];
        Matrix.forEach((row,y)=>{
            matrix.push([]);
            row.forEach(e=>{
                matrix[y].push(e);
            })
        })
        matrix[goal.y][goal.x] = 2;
        return matrix;
    }
    tryMoving(point,dir) {
        let isRightWay = false;
        if (this.matrix[point.y][point.x] == 1 || this.matrix[point.y][point.x] == 3) {
            return false;
        } else if (this.matrix[point.y][point.x] == 2) {
            this.directions.push(point);
            return true;
        } else if (this.matrix[point.y][point.x] == 0) {
            this.matrix[point.y][point.x] = 3;
            
            isRightWay = isRightWay || this.tryMoving(this.getNextPoint(point,dir),dir);

            isRightWay = isRightWay || this.tryMoving(this.getNextPoint(point,dir+1),dir);
            
            isRightWay = isRightWay || this.tryMoving(this.getNextPoint(point,dir+2),dir);
            
            isRightWay = isRightWay || this.tryMoving(this.getNextPoint(point,dir+3),dir);
            
                // Finally
            if (isRightWay) {
                this.directions.push(point);
            }
            return isRightWay;
        }
    }
    getNextPoint(point,dir){
        if(dir % 4  == 0){
            return {
                x: point.x + 1,
                y: point.y,
            }
        }else if(dir % 4 == 1){
            return {
                x: point.x,
                y: point.y+1,
            }
        }else if(dir % 4 == 2){
            return {
                x: point.x,
                y: point.y - 1,
            }
        }else{
            return {
                x: point.x-1,
                y: point.y,
            }
        }
    }
    getPriortyDir(startPoint,goal){
        if(startPoint.x - goal.x < 0){
            return 0;
        }else if(startPoint.y - goal.y < 0){
            return 1;
        }else if(startPoint.y - goal.y > 0){
            return 2;
        }else{
            return 3;
        }
        
    }
    getDirection(startPoint,goal){
        this.goal = goal;
        this.matrix = this.getMapByMatrix(goal);
        let dir = this.getPriortyDir(startPoint,goal);
        this.directions = [];
        this.tryMoving(startPoint,dir);
        this.directions.pop();
        return this.directions;
    }
}