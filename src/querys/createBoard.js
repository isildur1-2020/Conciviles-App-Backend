import moment from "moment";
const month = moment().date();
const name = `Asistencia ${month}`;
export const createBoard = (boardId) => `
mutation {
    duplicate_board(board_id:${boardId}, duplicate_type: duplicate_board_with_structure) {
        board {
            id
        }
    }
}
`;
