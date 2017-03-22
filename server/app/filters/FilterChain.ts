import { Request, Response, NextFunction } from 'express';
import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';


export interface FilterChain {

    // init():void;
    doFilter(req: Request, res: Response):any;
    
}