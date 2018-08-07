import { Router } from "express";
import * as multer from "multer"

import Util from "./controllers/responses";


export class Resources
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Router
  {

    /**
    * @api {post} /resource/file Save a file
    * @apiName SaveFile
    * @apiGroup Resources
    * @apiVersion 0.1.0
    * 
    * @apiParam {Object} file File data.
    * @apiSampleRequest off
    * @apiSuccess {String} url File path.
    */

    var upload = multer({
      dest: "assets/public",
    }).single("file");

    this.router.post("/file", (req, res) =>
    {
      upload(req, res, () =>
      {
        let result = {
          url: `http://${req.get("host")}/resources/${req.file.filename}`
        }
        Util.sendObject(res, result);
      });
    });

    return this.router;
  }
}

export default Resources;