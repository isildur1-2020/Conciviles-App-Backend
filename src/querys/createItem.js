export const createItem = `
    mutation create_item (
        $boardId: Int!,
        $groupId: String!,
        $itemName: String!,
        $columnValues: JSON!) { 

            create_item (
                board_id: $boardId,
                group_id: $groupId,
                item_name: $itemName, 
                column_values: $columnValues
            ) 
        { 
            id
        } 
    }
`;
