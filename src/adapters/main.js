/**
 * name
 * charge
 * class
 * location
 * date
 * turn
 * input
 *  hour
 *  minute
 * ouput
 *  hour
 *  minute
 * novelity
 * observations
 */
import moment from "moment";
import "moment-timezone";
export const assitanceStringify = (data) => {
  const inputHour = moment(data?.input).tz("America/Bogota").hour();
  const inputMinute = moment(data?.input).tz("America/Bogota").minute();
  console.log("INPUT TIME:", inputHour, inputMinute);
  return JSON.stringify({
    // APELLIDOS Y NOMBRES
    texto0: data?.name.toString(),
    // CARGO
    cargo: {
      ids: [Number(data?.charge)],
    },
    // CLASE
    clase: {
      index: Number(data?.class),
    },
    // UBICACION
    ubicaci_n: {
      ids: [Number(data?.location)],
    },
    // FECHA
    fecha: moment(data?.date).format("YYYY-MM-DD"),
    // TURNO
    men__desplegable79: {
      ids: [Number(data?.turn)],
    },
    // ENTRADA
    hora: {
      hour: inputHour,
      minute: inputMinute,
    },
    // SALIDA
    dup__of_hora: null,
    // NOVEDAD
    novedad: {
      index: Number(data?.novelity),
    },
    // OBSERVACIONES
    texto: data?.observations,
    //SUPERVISOR
    texto5: data?.supervisor,
  });
};
