import "moment-timezone";
import moment from "moment";

export const objectTime = (date) => {
  const moment = moment(date).tz("America/Bogota");
  return {
    hour: moment.hour(),
    minute: moment.minute(),
  };
};

export const currentDate = (date = null) => {
  !date
    ? moment().tz("America/Bogota").format("YYYY-MM-DD")
    : moment(date).tz("America/Bogota").format("YYYY-MM-DD");
};
