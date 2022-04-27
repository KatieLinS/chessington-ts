import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentPiece = board.findPiece(this)
        const availableMoves: Square[] = [];

        switch(this.player){
            case Player.WHITE:
                availableMoves.push(Square.at(currentPiece.row + 1, currentPiece.col));
                if (currentPiece.row === 1) {
                    availableMoves.push(Square.at(currentPiece.row + 2, currentPiece.col));
                }
                break;
            case Player.BLACK:
                availableMoves.push(Square.at(currentPiece.row - 1, currentPiece.col));
                if (currentPiece.row === 6) {
                    availableMoves.push(Square.at(currentPiece.row - 2, currentPiece.col));
                }
                break;
        }
        return availableMoves;
    }
}
