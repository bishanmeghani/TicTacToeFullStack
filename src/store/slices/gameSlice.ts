import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GameState = {
    board: string[];
    currentPlayer: 'X' | 'O';
    winner: string | null;
};

const initialState: GameState = {
    board: Array(9).fill(''),
    currentPlayer: 'X',
    winner: null,
};

const gameSlice = createSlice({
    name: 'game',
    initialState, 
    reducers: {
        makeMove: (state, action: PayloadAction<number>) => {
            if (state.board[action.payload] === '' && !state.winner) {
                state.board[action.payload] = state.currentPlayer;
                state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
            }
        },
        resetGame: () => initialState,
        setWinner: (state, action: PayloadAction<string>) => {
            state.winner = action.payload;
        },
    }
});

export const { makeMove, resetGame, setWinner } = gameSlice.actions;
export default gameSlice.reducer;