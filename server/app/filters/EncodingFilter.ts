import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import { Request, Response, NextFunction } from 'express';

export default class EncodingFilter implements Filter {

    public filterConfig: FilterConfig;
    private encoding :string;

    public constructor(encoding: string = 'UTF-8') {
        this.encoding = encoding;
    }

    doFilter(req: Request, res: Response) {
        // Encoding setting 
        // console.log("START TIME :" + new Date());
        // console.log("EncodingFilter!!!!1");
        req.setEncoding(this.encoding);
        // res.setHeader()
    }

    initFilter(filterConfig: FilterConfig) {
        this.filterConfig = filterConfig;
    }

}


