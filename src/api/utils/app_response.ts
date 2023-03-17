import { Response } from "express";

enum HttpStatus {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

interface ApiResponse<T> {
  status: string;
  message: string;
  data?: T;
}

export const appResponse = <T>(
  res: Response,
  status: HttpStatus,
  message: string,
  data?: T
) => {
  const statusString = HttpStatus[status];
  const response: ApiResponse<T> = { status: statusString, message };
  if (data) {
    response.data = data;
  }
  res.status(status).json(response);
};
