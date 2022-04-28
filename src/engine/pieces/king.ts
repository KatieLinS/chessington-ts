import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";
import GetAvailableOpponents from "../movement/getAvailableOpponents";

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
                    if (availableMove.isWithinBoard()) {
                        if (availableMove.isEmpty(board)){
                            availableMoves.push(availableMove);
                        } else {
                            const getAvailableOpponents = new GetAvailableOpponents()
                            getAvailableOpponents.getAvailableOpponents(board, availableMoves, availableMove, currentSquare);
                        }
                    }
                }
            }
        }

        return availableMoves;
    }
}
