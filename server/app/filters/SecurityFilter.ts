import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import { Request, Response, NextFunction } from 'express';

export default class SecurityFilter implements Filter {

    filter: FilterConfig;
    doFilter(req: Request, res: Response) 
    {
        console.log("START TIME :" + new Date());
        console.log(req.param('test'));
        // console.log(res);
        console.log("SecurityFilter!!!!1");
    }

    initFilter(filter: FilterConfig)
    {
        this.filter = filter;
    }

}


