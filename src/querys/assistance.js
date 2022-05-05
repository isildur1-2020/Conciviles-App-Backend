const LIMIT = 10000;
export const assistance = (board) => `
{
  boards(ids: ${board}) {
    items(limit: ${LIMIT}) {
      column_values {
        id
        title
        text
      }
    }
  }
}
`;
