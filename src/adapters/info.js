const options = [
  "cargo",
  "clase",
  "ubicaci_n",
  "men__desplegable79",
  "novedad",
];

const clearData = (data, name) => {
  const info = data?.[name];
  const { labels } = JSON.parse(info);
  return labels;
};

const joinData = (data) => {
  return options.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: clearData(data, curr),
    }),
    {}
  );
};

export const dataFormat = (data) => {
  let info = data.data.data.boards[0].columns;
  info = info.filter(({ id }) => options.some((el) => el === id));
  info = info.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.id]: curr.settings_str,
    }),
    {}
  );
  info = joinData(info);
  return info;
};
