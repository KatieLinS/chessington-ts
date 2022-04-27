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
                this.addAvailableMoves(board, availableMoves, currentSquare, 1, 1)
                break;
            case Player.BLACK:
                this.addAvailableMoves(board, availableMoves, currentSquare, 6, -1)
                break;
        }

        return availableMoves;
    }

    private addAvailableMoves(board:Board, availableMoves: Square[], currentSquare: Square, checkRowNumber: number, direction: number) {
        // White / Black can only move one square up / down if they have already moved
        let availableMove = Square.at(currentSquare.row + 1 * direction, currentSquare.col);

        if(availableMove.isWithinBoard()){
            if(availableMove.isEmpty(board)){
                availableMoves.push(availableMove);
                // White / Black can move one or two squares up / down on their first move
                if (currentSquare.row === checkRowNumber) {
                    availableMove = Square.at(currentSquare.row + 2 * direction, currentSquare.col);
                    if(availableMove.isEmpty(board)) {
                        availableMoves.push(availableMove);
                    }
                }
            }
        }
    }
}
