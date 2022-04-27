import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentPiece = board.findPiece(this)
        const availableMoves: Square[] = [];

        let rowNum: number = 0, colNum: number = 0;
        while (rowNum <= 7) {
            if (!Square.at(rowNum, currentPiece.col).equals(Square.at(currentPiece.row, currentPiece.col))){
                availableMoves.push(Square.at(rowNum, currentPiece.col));
            }
            rowNum++;
        }
        while (colNum <= 7) {
            if (!Square.at(currentPiece.row, colNum).equals(Square.at(currentPiece.row, currentPiece.col))){
                availableMoves.push(Square.at(currentPiece.row, colNum));
            }
            colNum++;
        }
        // for(let rowNum:number = 0, rowNum < 7, rowNum++){
        //
        // }

        return availableMoves;
    }
}
