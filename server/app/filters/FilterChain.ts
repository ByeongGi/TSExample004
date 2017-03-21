import { Request, Response, NextFunction } from 'express';
import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';


export class FilterChain implements Filter {


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