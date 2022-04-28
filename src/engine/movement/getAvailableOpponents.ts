import Board from "../board";
import Square from "../square";
import King from "../pieces/king";

export default class GetAvailableOpponents{
     getAvailableOpponents(board:Board, availableMoves:Square[], availableMove:Square, currentSquare:Square){
        const currentPiece = board.getPiece(currentSquare);
        const availablePiece = board.getPiece(availableMove);

        // @ts-ignore
        if(availablePiece.player !== currentPiece.player && !(availablePiece instanceof King)) {
            availableMoves.push(availableMove);
        }
    }
}