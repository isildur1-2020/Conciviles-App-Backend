export const employeeQuery = `
{
  boards(ids: 1372142509) {
    items(limit: 5000) {
      name
      column_values {
        id
        text
        value
      }
    }
  }
}`;
