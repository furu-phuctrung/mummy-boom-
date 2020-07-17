import { Matrix } from '../objects/platforms/Map.js'
export default class ZombieA {
    constructor() {
        this.directions = {};
        this.goal = {};
        this.bestWay = [];
    }
    getMapByMatrix(goal) {
        let matrix = [];
        Matrix.forEach((row, y) => {
            matrix.push([]);
            row.forEach(e => {
                matrix[y].push(e);
            })
        })
        matrix[goal.y][goal.x] = 2;
        return matrix;
    }

    getAvailableWays(point){
        let ways = [{ x: point.x, y: point.y + 1 },
            { x: point.x, y: point.y - 1 },
            { x: point.x - 1, y: point.y },
            { x: point.x + 1, y: point.y }
            ];
        let validWays = [];
        for (let p of ways)
            if (this.checkPoint(p))
                validWays.push(p);
        return validWays;
    }
    randomDirection(n){
        let pro = Math.floor(Math.random() * 10);
        if (pro < 7) return 0;
        return Math.floor(Math.random() * (n - 1) + 1);
    }
    distance(firstPoint, secondPoint) {

        return (firstPoint.x - secondPoint.x) * (firstPoint.x - secondPoint.x) + (firstPoint.y - secondPoint.y) * (firstPoint.y - secondPoint.y);
    }
    checkPoint(point) {
        return Matrix[point.y][point.x] == 1 ? false : true;
    }
    tryMoving(point, goal, depth, turn) {

        if (depth == 0) {
            return this.distance(point, goal);}
        let zombieWays = this.getAvailableWays(point);
        let playerWays = this.getAvailableWays(goal);
        
        if (turn){
            let value = 100000000;
            for (let way of zombieWays){
                value = Math.min(value, this.tryMoving(way, goal, depth - 1, false));
                this.bestWay.push({way: way, value:value, depth: depth});
            }
            return value;
        } else {
            let value = -100000000;
            for (let way of playerWays){
                value = Math.max(value, this.tryMoving(point, way, depth - 1, true));
            }
            return value;
        }
    }
    getDirection(startPoint, goal) {
        //player
        let temp = [];
        this.goal = goal;
        this.directions = [];
        this.bestWay = [];
        console.log("Result", this.tryMoving(startPoint, goal, 10, true));
        this.bestWay.sort((a, b) => a.value - b.value);
        for(let way of this.bestWay){
            if (way.depth == 10){
                temp.push(way.way);
            }
        }
        console.log(temp);
        this.directions.push(temp[this.randomDirection(temp.length)]);
        console.log(this.directions);
        //player = 2
        this.matrix = this.getMapByMatrix(goal);
        return this.directions;
    }
}