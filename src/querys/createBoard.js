export const createBoard = `
    mutation duplicate_board
    (
        $board_id: Int!,
        $board_name: String
    ) {
        duplicate_board (
            board_id: $board_id,
            board_name: $board_name,
            duplicate_type: duplicate_board_with_structure
        ) {
            board {
                id
                name
            }
        }
    }`;
