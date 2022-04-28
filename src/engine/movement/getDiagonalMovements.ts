import Square from "../square";
import Board from "../board";
import King from "../pieces/king";
import GetAvailableOpponents from "./getAvailableOpponents";
import CheckEmptyOrOpponentAndAddMove from "./checkEmptyOrOpponentAndAddMove";

export default class GetDiagonalMovements {
    getAvailableMoves(board:Board, availableMoves: Square[], currentSquare: Square) {
        // Forwards diagonal moves
        this.getForwardOrBackwardAvailableMoves(board, availableMoves, currentSquare, 1, 1)
        this.getForwardOrBackwardAvailableMoves(board, availableMoves, currentSquare, -1, -1)

        // Backwards diagonal moves
        this.getForwardOrBackwardAvailableMoves(board, availableMoves, currentSquare, 1, -1)
        this.getForwardOrBackwardAvailableMoves(board, availableMoves, currentSquare, -1, 1)
    }

    private getForwardOrBackwardAvailableMoves(board:Board, availableMoves:Square[], currentSquare:Square, rowDirection: number, colDirection: number) {
        let blocked = false;

        for (let num = 1; num <= 7; num++) {
            const availableMove = Square.at(currentSquare.row + num * rowDirection, currentSquare.col + num * colDirection)

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