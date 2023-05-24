import { Request, Response } from "express";
import { GiphRepository } from '../repository/GiphRepository'


export const GiphController = {

  async seedDB(req: Request, res: Response) {
    const { data } = req.body;
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

  async getUserGifs(req: Request, res: Response) {
    const user = res.locals.user;
    const { id } = user;
    const userGifs = await GiphRepository.findUserGifs(id)
    if (userGifs) return res.status(200).send(userGifs);
    if (!userGifs) return res.status(204).send(userGifs);
    return res.status(500).send();
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
      res.status(200).send();
    }
  },

  async deleteAllUserGifs(req: Request, res: Response) {
    const user = res.locals.user;
    const { id } = user;
    const userGifsDelete = await GiphRepository.deleteAll(id);
    if (userGifsDelete) return res.status(200).send();
    return res.status(500).send();
  },

  async deleteOneUserGif(req: Request, res: Response) {
    const id = req.params.id
    try {
      await GiphRepository.deleteOneGif(id)
      return res.status(200).send()
    } catch (error) {
      return res.status(500)
    }

  }


}

