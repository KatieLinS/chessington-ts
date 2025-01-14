import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";
import GetAvailableOpponents from "../movement/getAvailableOpponents";
import CheckEmptyOrOpponentAndAddMove from "../movement/checkEmptyOrOpponentAndAddMove";

export default class Knight extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const availableMoves: Square[] = [];
        let availableMove: Square;

        for (let rowNum = -2; rowNum <= 2; rowNum++) {
            if (rowNum !== 0){
                availableMove = Square.at(currentSquare.row + rowNum, currentSquare.col + (Math.abs(rowNum) === 2 ? 1 : 2))
                if (availableMove.isWithinBoard()) {
                    const checkEmptyOrOpponentAndAddMove = new CheckEmptyOrOpponentAndAddMove()
                    checkEmptyOrOpponentAndAddMove.getAvailableMoves(board, availableMoves, availableMove, currentSquare)
                }

                availableMove = Square.at(currentSquare.row + rowNum, currentSquare.col - (Math.abs(rowNum) === 2 ? 1 : 2))
                if (availableMove.isWithinBoard()) {
                    const checkEmptyOrOpponentAndAddMove = new CheckEmptyOrOpponentAndAddMove()
                    checkEmptyOrOpponentAndAddMove.getAvailableMoves(board, availableMoves, availableMove, currentSquare)
                }
            }
        }
        return availableMoves;
    }
}
