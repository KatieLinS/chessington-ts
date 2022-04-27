import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const availableMoves: Square[] = [];

        switch(this.player){
            case Player.WHITE:
                this.addAvailableMoves(availableMoves, currentSquare, 1, 1)
                break;
            case Player.BLACK:
                this.addAvailableMoves(availableMoves, currentSquare, 6, -1)
                break;
        }
        return availableMoves;
    }

    private addAvailableMoves(availableMoves: Square[], currentSquare: Square, checkRowNumber: number, direction: number) {
        availableMoves.push(Square.at(currentSquare.row + 1 * direction, currentSquare.col));
        if (currentSquare.row === checkRowNumber) {
            availableMoves.push(Square.at(currentSquare.row + 2 * direction, currentSquare.col));
        }
    }
}
