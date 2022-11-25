import { Request, Response } from "express";
import { getAsset, xlsxToJson } from "./services";

const url = process.env.PUBLIC_URL ?? "http://localhost:8055";

export async function getById(_req: Request, _res: Response) {
  const { id } = _req.params;

  if (id) {
    const response = await getAsset(url, id);

    if (response.status === 200) {
      try {
        const json = await xlsxToJson(response.data);
        if (json.length > 0) {
          _res.status(200).json(json);
        }
      } catch {
        console.error("cannot access");
      }
    } else {
      _res.status(response.status).send(response.statusText);
    }
  } else {
    _res.status(404).send("missing parameter :id");
  }
}

export async function postById(_req: any, _res: Response, services: any) {
  const { id } = _req.params;
  const { ItemsService } = services;
  const { schema, accountability } = _req;
  const service = new ItemsService(_req.body.collection, {
    schema,
    accountability,
  });

  if (id) {
    const response = await getAsset(url, id);

    if (response.status === 200) {
      try {
        const json = await xlsxToJson(response.data);
        if (json.length > 0) {
          service
            .knex(_req.body.collection)
            .insert(json)
            .then(() => {
              _res.status(201).json({
                success: `All data in ${id} was successfully created in ${_req.body.collection}`,
              });
            })
            .catch((err: any) => {
              _res.status(404).send(err);
            });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      _res.status(response.status).send(response.statusText);
    }
  } else {
    _res.status(404).send("missing parameter :id");
  }
}

export async function deleteAll(_req: any, _res: Response, services: any) {
  const { ItemsService } = services;
  const { schema, accountability } = _req;
  const service = new ItemsService(_req.body.collection, {
    schema,
    accountability,
  });

  service
    .knex(_req.body.collection)
    .del()
    .then(() => {
      _res.status(201).json({
        success: `All data was successfully deleted`,
      });
    })
    .catch((err: any) => {
      console.log(err);
      _res.status(404).send(err);
    });
  _res.status(200);
}
