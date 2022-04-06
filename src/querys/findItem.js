export const findItem = `
    query items_by_multiple_column_values (
        $board_id: Int!,
        $column_id: String!,
        $column_values: [String]!
    ) {

        items_by_multiple_column_values (
            board_id: $board_id,
            column_id: $column_id,
            column_values: $column_values
        ) {
            id
            name
        }
    }
`;
