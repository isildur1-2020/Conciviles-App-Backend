export const formatAssistance = (data) => {
  const items = data?.data?.data?.boards?.[0]?.items;
  return items.map(({ column_values }) => {
    return column_values.reduce((prev, curr) => {
      const { title, text } = curr;
      return {
        ...prev,
        [title]: text,
      };
    }, {});
  });
};
