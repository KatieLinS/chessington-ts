import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';

export default class Board {
    constructor(onPieceCaptured, onCurrentPlayerChanged) {
        this.onPieceCaptured = onPieceCaptured;
        this.onCurrentPlayerChanged = onCurrentPlayerChanged;
        this.currentPlayer = Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        const capturedPiece = this.getPiece(toSquare);
        
        if (!!movingPiece) {
            if (movingPiece.player !== this.currentPlayer) {
                throw new Error('The moving piece does not belong to the current player');
            }

            if (!!capturedPiece) {
                this.onPieceCaptured(capturedPiece);
            }

            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);

            this.currentPlayer = this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE;
            this.onCurrentPlayerChanged(this.currentPlayer);
        }
    }
}