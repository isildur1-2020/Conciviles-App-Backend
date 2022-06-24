export const createBoard = `
    mutation duplicate_board
    (
        $board_id: Int!,
        $board_name: String,
        $keep_subscribers: Boolean
    ) {
        duplicate_board (
            board_id: $board_id,
            board_name: $board_name,
            duplicate_type: duplicate_board_with_structure,
            keep_subscribers: $keep_subscribers
        ) {
            board {
                id
                name
            }
        }
    }`;
