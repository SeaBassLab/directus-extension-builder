import axios from "axios";
import * as XLSX from "xlsx";

export const getAsset = (url: string, id: string) => {
  return axios.get(url + "/assets/" + id + "?download", {
    responseType: "arraybuffer",
  });
};

export const xlsxToJson = async (xlsx: any) => {
  const workbook = XLSX.read(xlsx);
  const SheetName = workbook.SheetNames[0];
  const workshhet =
    workbook.Sheets[SheetName ?? ""] || XLSX.utils.aoa_to_sheet([]);
  const json = XLSX.utils.sheet_to_json(workshhet);
  return json;
};
