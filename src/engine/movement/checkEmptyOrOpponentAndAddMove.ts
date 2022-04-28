import Board from "../board";
import Square from "../square";
import GetAvailableOpponents from "./getAvailableOpponents";

export default class CheckEmptyOrOpponentAndAddMove{
    getAvailableMoves(board:Board, availableMoves:Square[], availableMove:Square, currentSquare:Square) {
        if (availableMove.isEmpty(board)){
            availableMoves.push(availableMove);
        } else {
            const getAvailableOpponents = new GetAvailableOpponents()
            getAvailableOpponents.getAvailableMoves(board, availableMoves, availableMove, currentSquare);
        }
    }
}