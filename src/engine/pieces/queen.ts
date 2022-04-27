import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";
import GetLateralMovements from "../movement/getLateralMovements";
import GetDiagonalMovements from "../movement/getDiagonalMovements";

export default class Queen extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const availableMoves: Square[] = [];

        // Move Laterally
        const getLateralMovements = new GetLateralMovements();
        getLateralMovements.getAvailableMoves(board, availableMoves, currentSquare);

        // Move Diagonally
        const getDiagonalMovement = new GetDiagonalMovements();
        getDiagonalMovement.getAvailableMoves(board, availableMoves, currentSquare)

        return availableMoves;
    }
}
