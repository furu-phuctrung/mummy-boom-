import { Matrix } from '../objects/platforms/map.js'
export default class ZombieA {
    constructor() {
        this.directions = {};
        this.goal = {};
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
    distance(firstPoint, secondPoint) {

        return (firstPoint.x - secondPoint.x) * (firstPoint.x - secondPoint.x) + (firstPoint.y - secondPoint.y) * (firstPoint.y - secondPoint.y);
    }
    checkPoint(point) {
        return Matrix[point.y][point.x] == 1 ? false : true;
    }
    tryMoving(point, goal) {

        let ways = [{ x: point.x, y: point.y + 1 },
        { x: point.x, y: point.y - 1 },
        { x: point.x - 1, y: point.y },
        { x: point.x + 1, y: point.y }
        ];

        let validWays = [];
        for (let p of ways)
            if (this.checkPoint(p))
                validWays.push(p);
        let minDis = this.distance(validWays[0], goal);
        let minPoint = validWays[0];
        for (let p of validWays)
            if (this.distance(p, goal) < minDis)
                minPoint = p;
        this.directions.push(minPoint);
    }
    getDirection(startPoint, goal) {
        //player
        this.goal = goal;
        this.directions = [];
        this.tryMoving(startPoint, goal);
        //player = 2
        this.matrix = this.getMapByMatrix(goal);
        return this.directions;
    }
}