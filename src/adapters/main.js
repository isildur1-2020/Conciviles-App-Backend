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
import { objectTime, currentDate } from "../utilities/moment/timezone";
export const assitanceStringify = (data) =>
  JSON.stringify({
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
    fecha: currentDate(data?.date),
    // TURNO
    men__desplegable79: {
      ids: [Number(data?.turn)],
    },
    // ENTRADA
    hora: objectTime(data?.input),
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
