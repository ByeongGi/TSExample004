import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import { Request, Response, NextFunction } from 'express';

export default class SecurityFilter implements Filter {

    filterConfig: FilterConfig;
    doFilter(req: Request, res: Response) 
    {
        console.log("START TIME :" + new Date());
        console.log("SecurityFilter!!!!1");
        console.log(req.query);
        let params :any = req.query;
        
    }

    initFilter(filterConfig: FilterConfig)
    {
        this.filterConfig = filterConfig;
    }

}


