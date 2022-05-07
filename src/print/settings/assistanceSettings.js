export const assistanceSettings = (items) => {
  const settings = {
    writeOptions: {
      type: "buffer",
      bookType: "xlsx",
    },
  };
  const columns = [
    { label: "APELLIDOS Y NOMBRES", value: "APELLIDOS Y NOMBRES" },
    { label: "CARGO", value: "CARGO" },
    { label: "CLASE", value: "CLASE" },
    { label: "UBICACIÓN", value: "UBICACIÓN" },
    { label: "Fecha", value: "Fecha" },
    { label: "Turno", value: "Turno" },
    { label: "Hora Entrada", value: "Hora Entrada" },
    { label: "Hora Salida", value: "Hora Salida" },
    { label: "NOVEDAD", value: "NOVEDAD" },
    { label: "Observaciones", value: "Observaciones" },
    { label: "Supervisor/Inspector", value: "Supervisor/Inspector" },
    { label: "Coordinador/Residente", value: "Coordinador/Residente" },
    { label: "Jefe de Area", value: "Jefe de Area" },
    { label: "H. E Diurna", value: "H. E Diurna" },
    { label: "H. E Nocturna", value: "H. E Nocturna" },
    { label: "H.E Diurna Festiva", value: "H.E Diurna Festiva" },
    { label: "H.E Nocturna Festiva", value: "H.E Nocturna Festiva" },
    { label: "Revisión GH", value: "Revisión GH" },
  ];
  const data = [
    {
      columns,
      content: [...items],
      sheet: "Asistencia Conciviles",
    },
  ];
  return {
    data,
    settings,
  };
};
