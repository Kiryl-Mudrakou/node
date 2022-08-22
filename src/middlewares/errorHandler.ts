import {logger} from "./winstonLogger";
export const errorHandler = function(err: any, req: any, res: any, next: any){
  if (res.headersSent) {
    return next(err)
  }

  logger.error(err.name,{'path':req.path,'body':req.body,'params':req.params,'query':req.query});
  res.status(500).send('Internal Server Error')
}