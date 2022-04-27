import Square from "../square";

export default class GetDiagonalMovements {
    getAvailableMoves(availableMoves: Square[], currentSquare: Square) {
        let rowNum: number = 1, colNum: number = 1;
        let availableSquare: Square;
        while (rowNum <= 7 && colNum <= 7) {
            // Forwards diagonal
            availableSquare = Square.at(currentSquare.row - rowNum, currentSquare.col - colNum)
            if (this.checkAvailableSquareIsWithinBoard(availableSquare)){
                availableMoves.push(availableSquare);
            }
            availableSquare = Square.at(currentSquare.row + rowNum, currentSquare.col + colNum)
            if (this.checkAvailableSquareIsWithinBoard(availableSquare)){
                availableMoves.push(availableSquare);
            }

            // Backwards diagonal
            availableSquare = Square.at(currentSquare.row - rowNum, currentSquare.col + colNum)
            if (this.checkAvailableSquareIsWithinBoard(availableSquare)){
                availableMoves.push(availableSquare);
            }
            availableSquare = Square.at(currentSquare.row + rowNum, currentSquare.col - colNum)
            if (this.checkAvailableSquareIsWithinBoard(availableSquare)){
                availableMoves.push(availableSquare);
            }
            rowNum++;
            colNum++;
        }
    }

    private checkAvailableSquareIsWithinBoard(square: Square): boolean {
        return square.row >= 0 && square.col >= 0 && square.row <= 7 && square.col <= 7
    }
}