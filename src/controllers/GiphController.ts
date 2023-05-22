import { Request, Response } from "express";
import { GiphRepository } from '../repository/GiphRepository'


export const GiphController = {
  async reload(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    
    data.map(async (item: any) => {
      let giph = {
        id: item.id,
        giph: item.images.original.url,
        title:  item.title
      }
      await GiphRepository.save(giph);
    })

  }
}
