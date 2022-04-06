import "moment-timezone";
import moment from "moment";

export const objectTime = (date) => {
  const moment = moment(date).tz("America/Bogota");
  return {
    hour: moment.hour(),
    minute: moment.minute(),
  };
};

export const currentDate = () => moment().tz("America/Bogota");
