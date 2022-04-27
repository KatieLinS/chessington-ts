import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        switch(this.player){
            case Player.WHITE:
                return new Array(Square.at(board.findPiece(this).row + 1, board.findPiece(this).col));
                break;
            case Player.BLACK:
                return new Array(Square.at(board.findPiece(this).row - 1, board.findPiece(this).col));
                break;
        }
    }
}
