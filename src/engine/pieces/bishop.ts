import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";
import GetDiagonalMovements from "../movement/getDiagonalMovements";

export default class Bishop extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const availableMoves: Square[] = [];

        const getDiagonalMovement = new GetDiagonalMovements();
        getDiagonalMovement.getAvailableMoves(board, availableMoves, currentSquare)

        return availableMoves;
    }
}
