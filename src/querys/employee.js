import { mondayBoards } from "../mondayConfig";
const LIMIT = 10000;
export const getEmployees = () => `
{
  boards(ids: ${mondayBoards.employees}) {
    items(limit: ${LIMIT}) {
      name
      column_values {
        id
        text
        value
      }
    }
  }
}`;
