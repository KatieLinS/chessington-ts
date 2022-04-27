import Square from "../square";

export default class GetLateralMovements {
    getAvailableMoves(availableMoves: Square[], currentSquare: Square) {
        for (let rowNum = 0; rowNum <= 7; rowNum++) {
            const availableMove = Square.at(rowNum, currentSquare.col)
            if (!availableMove.equals(currentSquare)) {
                availableMoves.push(availableMove);
            }
        }
        for (let colNum = 0; colNum <= 7; colNum++) {
            const availableMove = Square.at(currentSquare.row, colNum)
            if (!availableMove.equals(currentSquare)) {
                availableMoves.push(availableMove);
            }
        }
    }
}