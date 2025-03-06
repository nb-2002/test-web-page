interface GameState{
    board: number[][];
    score: number;
}

export class Game2048{
    public state: GameState;
    
    constructor(){
        this.state = this.initialize();
        console.log("array", this.state.board)
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
                if(board[row] !== undefined){
                    board[row][col] = Math.random() < 0.9 ? 2 : 4;
                }
            }
        }
    }
} 
