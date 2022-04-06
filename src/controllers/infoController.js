import { axiosInstance } from "../axios/instance";
import { infoQuery } from "../querys/info";
import { dataFormat } from "../adapters/info";

export const infoController = async (req, res) => {
  try {
    const resp = await axiosInstance({
      url: "/",
      method: "POST",
      data: { query: infoQuery },
    });
    const info = dataFormat(resp);
    res.status(200).json({
      data: info,
      err: false,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      data: err,
      err: true,
    });
  }
};
