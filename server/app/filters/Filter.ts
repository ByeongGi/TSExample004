import { Request, Response, NextFunction } from 'express';
import { FilterConfig } from './FilterConfig';


export interface Filter {
    filter: FilterConfig;
    initFilter(filter: FilterConfig): void;
    doFilter(req: Request, res: Response, next: NextFunction): any;
}


