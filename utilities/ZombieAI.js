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
    tryMoving(point, prePoint, preDir) {
        let isRightWay = false;
        if (this.matrix[point.y][point.x] == 1 || this.matrix[point.y][point.x] == 3) {
            return false;
        } else if (this.matrix[point.y][point.x] == 2 && prePoint) {
            prePoint.nextDir = preDir;
            return true;
        } else if (this.matrix[point.y][point.x] == 0) {
            this.matrix[point.y][point.x] = 3;
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x,
                    y: point.y - 1,
                }, point, 'up');

            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x + 1,
                    y: point.y,
                }, point, 'right');
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x,
                    y: point.y + 1,
                }, point, 'down');
            isRightWay = isRightWay || this.tryMoving(
                {
                    x: point.x - 1,
                    y: point.y,
                }, point, 'left');
            if (prePoint) prePoint.nextDir = preDir;
            if (isRightWay) {
                if(!prePoint || point.nextDir != prePoint.nextDir){
                    this.directions[`${point.x}-${point.y}`] = point.nextDir;
                }
            } else {
                this.matrix[point.y][point.x] = 0;
            }
            return isRightWay;
        }
    }
    getDirection(startPoint,goal){
        if (this.goal.x == goal.x && this.goal.y == goal.y) {
            return this.directions;
        }
        this.goal = goal;
        this.matrix = this.getMapByMatrix(goal);
        this.directions = {};
        this.tryMoving(startPoint);
        return this.directions;
    }
}