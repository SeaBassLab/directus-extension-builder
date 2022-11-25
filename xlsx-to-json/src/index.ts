import { Router } from "express";
import { getById, postById, deleteAll } from "./controllers";

export default {
  id: "sheetToJson",
  handler: (router: Router, { services }: any) => {
    router.get("/:id", (_req, _res) => getById(_req, _res));
    router.post("/:id", (_req, _res) => postById(_req, _res, services));
    router.delete("/", (_req, _res) => deleteAll(_req, _res, services));
  },
};
