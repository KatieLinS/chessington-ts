import Square from "../square";
import Board from "../board";
import King from "../pieces/king";

export default class GetLateralMovements {
    getAvailableMoves(board: Board, availableMoves: Square[], currentSquare: Square) {
        this.getVerticalAvailableMoves(board, availableMoves, currentSquare, 1); // up
        this.getVerticalAvailableMoves(board, availableMoves, currentSquare, -1); // down
        this.getHorizontalAvailableMoves(board, availableMoves, currentSquare,  1); // left
        this.getHorizontalAvailableMoves(board, availableMoves, currentSquare, -1); // right
    }

    private getVerticalAvailableMoves(board:Board, availableMoves:Square[], currentSquare:Square, direction: number) {
        let blocked = false;

        for (let rowNum = 1; rowNum <= 7; rowNum++) {
            const availableMove = Square.at(currentSquare.row + rowNum * direction, currentSquare.col)
            if(availableMove.isWithinBoard() && !blocked){
                if (availableMove.isEmpty(board)){
                    availableMoves.push(availableMove);
                } else {
                    blocked = true;
                    this.getAvailableOpponents(board, availableMoves, availableMove, currentSquare)
                }
            }
        }
    }

    private getHorizontalAvailableMoves(board:Board, availableMoves:Square[], currentSquare:Square, direction: number) {
        let blocked = false;

        for (let num = 1; num <= 7; num++) {
            let availableMove = Square.at(currentSquare.row, currentSquare.col + num * direction)
            if(availableMove.isWithinBoard() && !blocked){
                if (availableMove.isEmpty(board)){
                    availableMoves.push(availableMove);
                } else {
                    blocked = true;
                    this.getAvailableOpponents(board, availableMoves, availableMove, currentSquare)
                }
            }
        }
    }

    private getAvailableOpponents(board:Board, availableMoves:Square[], availableMove:Square, currentSquare:Square){
        const currentPiece = board.getPiece(currentSquare);
        const availablePiece = board.getPiece(availableMove);

        // @ts-ignore
        if(availablePiece.player !== currentPiece.player && !(availablePiece instanceof King)) {
            availableMoves.push(availableMove);
        }
    }
}