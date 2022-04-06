export const output = `
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

export const update = `
    mutation change_column_value (
        $board_id: Int!,
        $item_id: Int!,
        $column_id: String!,
        $value: JSON!
    ) {

        change_column_value (
            board_id: $board_id,
            item_id: $item_id,
            column_id: $column_id,
            value: $value
        ) {
            id
        }
    }
`;
