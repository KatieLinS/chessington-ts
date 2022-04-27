import Square from "../square";

export default class GetLateralMovements {
    getAvailableMoves(availableMoves: Square[], currentSquare: Square) {
        for (let rowNum = 0; rowNum <= 7; rowNum++) {
            const availableSquare = Square.at(rowNum, currentSquare.col)
            if (!availableSquare.equals(currentSquare)) {
                availableMoves.push(availableSquare);
            }
        }
        for (let colNum = 0; colNum <= 7; colNum++) {
            const availableSquare = Square.at(currentSquare.row, colNum)
            if (!availableSquare.equals(currentSquare)) {
                availableMoves.push(availableSquare);
            }
        }
    }
}