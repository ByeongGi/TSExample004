import { Router, Request, Response, NextFunction } from 'express';

export interface Servlet{

    doService(req:Request,res:Response) :any;
    // doService(req:Request,res:Response) :any;

}


