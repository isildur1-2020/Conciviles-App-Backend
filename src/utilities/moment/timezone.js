import "moment-timezone";
import moment from "moment";

export const objectTime = (time) => {
  const date = moment(time).tz("America/Bogota");
  return {
    hour: date.hour(),
    minute: date.minute(),
  };
};

export const currentDate = (time = null) => {
  const date = !time ? moment() : moment(time);
  return date.tz("America/Bogota").format("YYYY-MM-DD");
};
