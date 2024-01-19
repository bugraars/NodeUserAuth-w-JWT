
import express from 'express';
const { Request, Response, NextFunction } = express;

const errorMiddleware = (error, req, res, next) => {
  console.error(error.stack);

  if (res.headersSent) {
    return next(error);
  }

  // Hatanın türüne göre uygun yanıtı oluştur
  if (error instanceof SyntaxError) {
    res.status(400).json({ error: 'Invalid JSON syntax' });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default errorMiddleware;
