import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import { Request, Response, NextFunction } from 'express';

export class SecurityFilter implements Filter {

    filter: FilterConfig;
    doFilter(req: Request, res: Response, next: NextFunction) 
    {
        console.log("SecurityFilter!!!!");

        next();
    }

    initFilter(filter: FilterConfig)
    {
        this.filter = filter;
    }

}


