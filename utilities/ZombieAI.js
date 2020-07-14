import {Matrix} from '../objects/platforms/Map.js'
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
    tryMoving(point) {
        let isRightWay = false;
        if (this.matrix[point.y][point.x] == 1 || this.matrix[point.y][point.x] == 3) {
            return false;
        } else if (this.matrix[point.y][point.x] == 2) {
            this.directions.push(point);
            return true;
        } else if (this.matrix[point.y][point.x] == 0) {
            this.matrix[point.y][point.x] = 3;
            
            //Up
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x,
                    y: point.y - 1,
                });
            //Right
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x + 1,
                    y: point.y,
                });
            //Down
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x,
                    y: point.y + 1,
                });
            // Left
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x - 1,
                    y: point.y,
                });
            
                // Finally
            if (isRightWay) {
                this.directions.push(point);
            }
            return isRightWay;
        }
    }
    getDirection(startPoint,goal){
        this.goal = goal;
        this.matrix = this.getMapByMatrix(goal);
        this.directions = [];
        this.tryMoving(startPoint);
        this.directions.pop();
        return this.directions;
    }
}