import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Queen extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentPiece = board.findPiece(this)
        const availableMoves: Square[] = [];

        // Move Laterally
        let rowNumL: number = 0, colNumL: number = 0;
        while (rowNumL <= 7) {
            if (!Square.at(rowNumL, currentPiece.col).equals(Square.at(currentPiece.row, currentPiece.col))){
                availableMoves.push(Square.at(rowNumL, currentPiece.col));
            }
            rowNumL++;
        }
        while (colNumL <= 7) {
            if (!Square.at(currentPiece.row, colNumL).equals(Square.at(currentPiece.row, currentPiece.col))){
                availableMoves.push(Square.at(currentPiece.row, colNumL));
            }
            colNumL++;
        }

        // Move Diagonally
        let rowNumD: number = 1, colNumD: number = 1;
        while (rowNumD <= 7 && colNumD <= 7) {
            // Forwards diagonal
            if ((currentPiece.row - rowNumD >= 0) && (currentPiece.col - colNumD >= 0)){
                availableMoves.push(Square.at(currentPiece.row - rowNumD, currentPiece.col - colNumD));
            }
            if ((currentPiece.row + rowNumD <= 7) && (currentPiece.col + colNumD <= 7)){
                availableMoves.push(Square.at(currentPiece.row + rowNumD, currentPiece.col + colNumD));
            }
            // Backwards diagonal
            if ((currentPiece.row - rowNumD >= 0) && (currentPiece.col + colNumD <= 7)){
                availableMoves.push(Square.at(currentPiece.row - rowNumD, currentPiece.col + colNumD));
            }
            if ((currentPiece.row + rowNumD <= 7) && (currentPiece.col - colNumD >= 0)){
                availableMoves.push(Square.at(currentPiece.row + rowNumD, currentPiece.col - colNumD));
            }
            rowNumD++;
            colNumD++;
        }
        return availableMoves;
    }
}
