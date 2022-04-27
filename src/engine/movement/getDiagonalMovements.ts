import Square from "../square";

export default class GetDiagonalMovements {
    getAvailableMoves(availableMoves: Square[], currentSquare: Square) {
        let rowNum: number = 1, colNum: number = 1;
        let availableMove: Square;
        while (rowNum <= 7 && colNum <= 7) {
            // Forwards diagonal
            availableMove = Square.at(currentSquare.row - rowNum, currentSquare.col - colNum)
            if (availableMove.isWithinBoard()){
                availableMoves.push(availableMove);
            }
            availableMove = Square.at(currentSquare.row + rowNum, currentSquare.col + colNum)
            if (availableMove.isWithinBoard()){
                availableMoves.push(availableMove);
            }

            // Backwards diagonal
            availableMove = Square.at(currentSquare.row - rowNum, currentSquare.col + colNum)
            if (availableMove.isWithinBoard()){
                availableMoves.push(availableMove);
            }
            availableMove = Square.at(currentSquare.row + rowNum, currentSquare.col - colNum)
            if (availableMove.isWithinBoard()){
                availableMoves.push(availableMove);
            }
            rowNum++;
            colNum++;
        }
    }
}