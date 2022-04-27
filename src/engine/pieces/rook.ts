import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";
import GetLateralMovements from "../movement/getLateralMovements";

export default class Rook extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const availableMoves: Square[] = [];

        const getLateralMovements = new GetLateralMovements();
        getLateralMovements.getAvailableMoves(availableMoves, currentSquare);

        return availableMoves;
    }
}
