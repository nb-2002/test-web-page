import type { Ref } from 'vue';
import type { Box } from "./structure";
import { BoxColor } from "./structure";

interface GameState{
    board: number[][];
    score: number;
}

export class Game2048{
    public state: GameState;
    
    constructor(){
        this.state = this.initialize();
    }

    initialize(): GameState{
        const board = Array.from({ length: 4 }, () => Array.from({length: 4}, () => 0));
        this.addRandomBox(board);
        this.addRandomBox(board);
        return {board: board, score: 0};
    }
    
    addRandomBox(board: number[][]): void {
        const listOfZBoxes: [number, number][] = [];
        for(let row=0 ; row<4 ; row++){
            for(let col=0 ; col<4 ; col++){
                if (board[row]?.[col] === 0) {
                    listOfZBoxes.push([row, col]);
                }
            }
        }
        if (listOfZBoxes.length > 0) {
            const rand = Math.floor(Math.random() * listOfZBoxes.length);
            if (undefined !== listOfZBoxes[rand]){
                const [row, col] = listOfZBoxes[rand];
                if(board[row]?.[col] !== undefined){
                    board[row][col] = Math.random() < 0.9 ? 2 : 4;
                }
            }
        }
        else{
            console.log("Game Over!");
        }
    }

    refreshBoard(boxes: Box[]){
        for(let row=0 ; row<4 ; row++){
            for(let col=0 ; col<4 ; col++){
                const bvb = boxes[row*4+col];
                const gms = this.state.board[col]?.[row];
                if(bvb?.["n"] !== undefined && gms !== undefined){
                    bvb["n"] = gms;
                    bvb["color"] = BoxColor[gms] as string;
                }
            }
        }
    }


    doMovesWithSwipe(direction: string, boxes: Box[], highscore: Ref<number>){
        switch (direction) {
            case 'up':
                this.moveUp(boxes);
                break;
            case 'down':
                this.moveDown(boxes);
                break;
            case 'left':
                this.moveLeft(boxes);
                break;
            case 'right':
                this.moveRight(boxes);
                break;
        }
        if(highscore.value < this.state.score){
            highscore.value = this.state.score;
        }
    }

    doMoves(boxes: Box[], highscore: Ref<number>){
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.moveUp(boxes);
                    break;
                case 'ArrowDown':
                    this.moveDown(boxes);
                    break;
                case 'ArrowLeft':
                    this.moveLeft(boxes);
                    break;
                case 'ArrowRight':
                    this.moveRight(boxes);
                    break;
            }
            if(highscore.value < this.state.score){
                highscore.value = this.state.score;
            }
        });
    }

    moveLeft(boxes: Box[]){
        const newBoard: number[][] = [[], [], [], []];
        for(let row=0 ; row<4 ; row++){
            let last: number = -1;
            for(let col=0 ; col<4 ; col++){
                if(this.state.board[row]?.[col] !== 0){
                    if(last === this.state.board[row]?.[col] as number){
                        ( (newBoard[row] as number[])[(newBoard[row] as number[]).length - 1] as number) *= 2;
                        this.state.score += 2*last;
                    }
                    else (newBoard[row] as number[]).push(this.state.board[row]?.[col] as number);
                    last = this.state.board[row]?.[col] as number;
                }
            }
        }
        for(let row=0 ; row<4 ; row++){
            for(let col=0 ; col<4 ; col++){
                if(newBoard[row]?.[col] === undefined) newBoard[row]?.push(0);
            }
        }
        if(!checkEqual(newBoard, this.state.board)){
            this.state.board = newBoard;
            this.addRandomBox(this.state.board);
            this.refreshBoard(boxes);
        }
    }
    
    moveRight(boxes: Box[]){
        const newBoard: number[][] = [[], [], [], []];
        for(let row=0 ; row<4 ; row++){
            let last: number = -1;
            for(let col=3 ; col>=0 ; col--){
                if(this.state.board[row]?.[col] !== 0){
                    if(last === this.state.board[row]?.[col] as number){
                        ( (newBoard[row] as number[])[0] as number) *= 2;
                        this.state.score += 2*last;
                    }
                    else (newBoard[row] as number[]).splice(0, 0, this.state.board[row]?.[col] as number);
                    last = this.state.board[row]?.[col] as number;
                }
            }
        }
        for(let row=0 ; row<4 ; row++){
            for(let col=0 ; col<4 ; col++){
                if(newBoard[row]?.[col] === undefined) newBoard[row]?.splice(0, 0, 0);
            }
        }
        if(!checkEqual(newBoard, this.state.board)){
            this.state.board = newBoard;
            this.addRandomBox(this.state.board);
            this.refreshBoard(boxes);
        }
    }

    moveUp(boxes: Box[]){
        let newBoard: number[][] = [[], [], [], []];
        for(let col=0 ; col<4 ; col++){
            let last: number = -1;
            for(let row=0 ; row<4 ; row++){
                if(this.state.board[row]?.[col] !== 0){
                    if(last === this.state.board[row]?.[col] as number){
                        ( (newBoard[col] as number[])[(newBoard[col] as number[]).length - 1] as number) *= 2;
                        this.state.score += 2*last;
                    }
                    else (newBoard[col] as number[]).push(this.state.board[row]?.[col] as number);
                    last = this.state.board[row]?.[col] as number;
                }
            }
        }
        for(let col=0 ; col<4 ; col++){
            for(let row=0 ; row<4 ; row++){
                if(newBoard[col]?.[row] === undefined) newBoard[col]?.push(0);
            }
        }
        newBoard = transPos(newBoard);
        if(!checkEqual(newBoard, this.state.board)){
            this.state.board = newBoard;
            this.addRandomBox(this.state.board);
            this.refreshBoard(boxes);
        }
    }

    moveDown(boxes: Box[]){
        let newBoard: number[][] = [[], [], [], []];
        for(let col=0 ; col<4 ; col++){
            let last: number = -1;
            for(let row=3 ; row>=0 ; row--){
                if(this.state.board[row]?.[col] !== 0){
                    if(last === this.state.board[row]?.[col] as number){
                        ( (newBoard[col] as number[])[0] as number) *= 2;
                        this.state.score += 2*last;
                    }
                    else (newBoard[col] as number[]).splice(0, 0, this.state.board[row]?.[col] as number);
                    last = this.state.board[row]?.[col] as number;
                }
            }
        }
        for(let col=0 ; col<4 ; col++){
            for(let row=0 ; row<4 ; row++){
                if(newBoard[row]?.[col] === undefined) newBoard[row]?.splice(0, 0, 0);
            }
        }
        newBoard = transPos(newBoard);
        if(!checkEqual(newBoard, this.state.board)){
            this.state.board = newBoard;
            this.addRandomBox(this.state.board);
            this.refreshBoard(boxes);
        }
    }
} 

function checkEqual(arr1: number[][], arr2: number[][]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let row=0 ; row<arr1.length ; row++) {
        if ((arr1[row] as number[]).length !== (arr2[row] as number[]).length) {
            return false;
        }
        for (let col = 0 ; col < (arr1[row] as number[]).length ; col++) {
            if ((arr1[row] as number[])[col] !== (arr2[row] as number[])[col]) {
                return false; 
            }
        }
    }
    return true;
}

function transPos(arr: number[][]): number[][]{
    const newArr: number[][] = [[], [], [], []];
    for(let row=0 ; row<arr.length ; row++){
        for(let col=0 ; col<(arr[row] as number[]).length ; col++){
            (newArr[col] as number[]).push(arr[row]?.[col] as number);
        }
    }
    return newArr;
}