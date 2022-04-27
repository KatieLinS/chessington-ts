import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentPiece = board.findPiece(this)
        const availableMoves: Square[] = [];
        let rowNum: number = 1, colNum: number = 1;

        while (rowNum <= 7 && colNum <= 7) {
            // Forwards diagonal
            if ((currentPiece.row - rowNum >= 0) && (currentPiece.col - colNum >= 0)){
                availableMoves.push(Square.at(currentPiece.row - rowNum, currentPiece.col - colNum));
            }
            if ((currentPiece.row + rowNum <= 7) && (currentPiece.col + colNum <= 7)){
                availableMoves.push(Square.at(currentPiece.row + rowNum, currentPiece.col + colNum));
            }
            // Backwards diagonal
            if ((currentPiece.row - rowNum >= 0) && (currentPiece.col + colNum <= 7)){
                availableMoves.push(Square.at(currentPiece.row - rowNum, currentPiece.col + colNum));
            }
            if ((currentPiece.row + rowNum <= 7) && (currentPiece.col - colNum >= 0)){
                availableMoves.push(Square.at(currentPiece.row + rowNum, currentPiece.col - colNum));
            }
            rowNum++;
            colNum++;
        }
        return availableMoves;
    }
}
