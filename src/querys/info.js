export const infoQuery = (board_id) => `
    query {
        boards(ids: ${board_id}) {
            columns {
                id
                settings_str
            }
        }
    }`;
