export const clearColumns = (data) => {
  let info = new Map();
  let aux = {};
  const options = ["apellidos_y_nombre", "cargo6", "clase", "texto"];
  data.forEach(({ id, text, value }) => {
    const isValid = options.some((option) => option === id);
    if (isValid) {
      aux = {
        id,
        text,
        value: JSON.parse(value),
      };
      info.set(id, aux);
    }
  });
  return info;
};

export const employeesFormat = (data) => {
  let info = data?.data?.data?.boards?.[0]?.items;
  info = info.reduce((prev, curr) => {
    const { name, column_values } = curr;
    return [
      ...prev,
      {
        id: name,
        info: clearColumns(column_values),
      },
    ];
  }, []);
  return info;
};
