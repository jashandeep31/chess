import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../lib/catchAsync";

//  ! deprecated route
export const userLoginHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      message: "Login successful !",
    });
  }
);
