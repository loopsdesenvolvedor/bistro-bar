import prisma from "../../lib/prisma";

interface UserRequest {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, confirmEmail, password }: UserRequest) {
    try {
      if (!email) {
        throw new Error("Email/password incorrect");
      }
    } catch (error) {}
  }
}

export { CreateUserService };
