import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class King extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const availableMoves: Square[] = [];

        for (let rowNum = -1; rowNum <= 1; rowNum++) {
            for (let colNum = -1; colNum <= 1; colNum++) {
                const availableMove = Square.at(currentSquare.row + rowNum, currentSquare.col + colNum)
                if (availableMove.isWithinBoard() && !availableMove.equals(currentSquare)) {
                    availableMoves.push(availableMove);
                }
            }
        }

        return availableMoves;
    }
}
