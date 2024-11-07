import { Request, Response } from "express";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, confirmEmail, password } = req.body;
  }
}

export { CreateUserController };
