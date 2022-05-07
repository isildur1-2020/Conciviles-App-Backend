export const archiveBoard = `
    mutation archive_board($board_id: Int!) {
        archive_board(board_id: $board_id) {
            id
        }
    }`;
