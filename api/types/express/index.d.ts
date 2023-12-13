import { Request as e_request } from "express";
import { User } from "../user";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
