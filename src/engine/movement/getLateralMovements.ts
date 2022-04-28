import Square from "../square";
import Board from "../board";
import GetAvailableOpponents from "./getAvailableOpponents";
import CheckEmptyOrOpponentAndAddMove from "./checkEmptyOrOpponentAndAddMove";

export default class GetLateralMovements {
    getAvailableMoves(board: Board, availableMoves: Square[], currentSquare: Square) {
        // Vertical moves
        this.getVerticalOrHorizontalAvailableMoves(board, availableMoves, currentSquare, 1, 0); // up
        this.getVerticalOrHorizontalAvailableMoves(board, availableMoves, currentSquare, -1, 0); // down

        // Horizontal moves
        this.getVerticalOrHorizontalAvailableMoves(board, availableMoves, currentSquare,  0,1); // left
        this.getVerticalOrHorizontalAvailableMoves(board, availableMoves, currentSquare, 0,-1); // right
    }

    private getVerticalOrHorizontalAvailableMoves(board:Board, availableMoves:Square[], currentSquare:Square, vertical: number, horizontal: number) {
        let blocked = false;

        for (let num = 1; num <= 7; num++) {
            const availableMove = Square.at(currentSquare.row + num * vertical, currentSquare.col + num * horizontal)
            if(!availableMove.isWithinBoard() || blocked) {
                continue;
            }

            if (!availableMove.isEmpty(board)){
                blocked = true;
            }

            const checkEmptyOrOpponentAndAddMove = new CheckEmptyOrOpponentAndAddMove()
            checkEmptyOrOpponentAndAddMove.getAvailableMoves(board, availableMoves, availableMove, currentSquare)
        }
    }
}