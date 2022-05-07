export const boardInfo = (id) => `
{
    boards(ids: ${id}) {
        id
        name
    }
}`;
