export const infoQuery = (board_id) => `
{
    boards(ids: ${board_id}) {
        columns {
            id
            settings_str
        }
    }
}`;
