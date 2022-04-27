import Square from "../square";
import Board from "../board";

export default class GetDiagonalMovements {
    getAvailableMoves(board:Board, availableMoves: Square[], currentSquare: Square) {
        // Forwards diagonal
        this.getForwardAvailableMoves(board, availableMoves, currentSquare, 1)
        this.getForwardAvailableMoves(board, availableMoves, currentSquare, -1)

        // Backwards diagonal
        this.getBackwardAvailableMoves(board, availableMoves, currentSquare, 1)
        this.getBackwardAvailableMoves(board, availableMoves, currentSquare, -1)
    }

    private getForwardAvailableMoves(board:Board, availableMoves:Square[], currentSquare:Square, direction: number) {
        let blocked = false;

        for (let num = 1; num <= 7; num++) {
            const availableMove = Square.at(currentSquare.row + num * direction, currentSquare.col + num * direction)
            if(availableMove.isWithinBoard() && !blocked){
                if (availableMove.isEmpty(board)){
                    availableMoves.push(availableMove);
                } else {
                    blocked = true;
                }
            }
        }
    }

    private getBackwardAvailableMoves(board:Board, availableMoves:Square[], currentSquare:Square, direction: number) {
        let blocked = false;

        for (let num = 1; num <= 7; num++) {
            const availableMove = Square.at(currentSquare.row + num * direction, currentSquare.col - num * direction)
            if(availableMove.isWithinBoard() && !blocked){
                if (availableMove.isEmpty(board)){
                    availableMoves.push(availableMove);
                } else {
                    blocked = true;
                }
            }
        }
    }
}