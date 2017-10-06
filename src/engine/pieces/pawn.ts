import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const availableMoves: Square[] = [];
        switch(this.player){
            case Player.WHITE:
                availableMoves.push(Square.at(board.findPiece(this).row + 1, board.findPiece(this).col));
                if (board.findPiece(this).row === 1) {
                    availableMoves.push(Square.at(board.findPiece(this).row + 2, board.findPiece(this).col));
                }
                break;
            case Player.BLACK:
                availableMoves.push(Square.at(board.findPiece(this).row - 1, board.findPiece(this).col));
                if (board.findPiece(this).row === 6) {
                    availableMoves.push(Square.at(board.findPiece(this).row - 2, board.findPiece(this).col));
                }
                break;
        }
        return availableMoves;
    }
}
