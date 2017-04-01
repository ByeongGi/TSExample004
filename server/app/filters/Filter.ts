import { Request, Response, NextFunction } from 'express';
import { FilterConfig } from './FilterConfig';

/**
 *  
 *  Filter interface
 *  @description Filter interface
 */
export interface Filter {
    filterConfig: FilterConfig;
    initFilter(filterConfig: FilterConfig): void;
    doFilter(req: Request, res: Response): any;
}


