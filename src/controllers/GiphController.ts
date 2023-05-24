import { Request, Response } from "express";
import { GiphRepository } from '../repository/GiphRepository'


export const GiphController = {

  async seedDB(req: Request, res: Response) {
    const {data} = req.body;
    console.log(data);
    
    data.data.map(async (item: any) => {
      let giph = {
        id: item.id,
        giph: item.images.original.url,
        title: item.title,
        preview_giph: item.images.fixed_width.url
      }
      await GiphRepository.save(giph);
    })

  },

  async getAll(req: Request, res: Response) {
    const giphs = await GiphRepository.getAll();
    return res.status(200).send(giphs);
    
  },
  

  async saveUploadedGiph(req: Request, res: Response) {
    const { giph, title, id } = req.body;
    const giphData = {
      id,
      title,
      giph,
      preview_giph: giph
    }
    const GiphSaved = await GiphRepository.save(giphData);
    
    if (GiphSaved) {
      res.status(200).send()
    }


  }
}

