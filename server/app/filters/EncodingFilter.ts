import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import { Request, Response, NextFunction } from 'express';

export default class EncodingFilter implements Filter {

    filter: FilterConfig;
    doFilter(req: Request, res: Response) 
    {   
        console.log("START TIME :" + new Date());
        console.log("EncodingFilter!!!!1");
    }

    initFilter(filter: FilterConfig)
    {
        this.filter = filter;
    }

}


