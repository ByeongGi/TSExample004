import { FilterChain } from './FilterChain';
import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import * as express from 'express';
import { Request, Response, NextFunction ,Router} from 'express';

export default class DelegateFilterChain implements FilterChain {
    
    private filter: FilterConfig;
    private app : express.Application;
    private filters : Array<Filter>;
      
    constructor(app :express.Application, filters:Array<Filter>){
        this.app = app;
        this.filters = filters;        
    }
    
    delegate(servlet: Router) :void{

        this.app.all('*',  
        [  (req:Request, res:Response , next :NextFunction )=>{
            this.doFilter(req,res);
            next();
            }
        ,   servlet
        ,  (req:Request, res:Response)=>{
            this.doFilter(req,res);
            
            }
        ]

    );
    }


    doFilter(req: Request, res: Response) : any 
    {
        
      this.internalDoFilter(req, res);

    }

    internalDoFilter(req: Request, res: Response) : any  
    {
        let filters = this.filters;
        filters.map((filter, index , filters)=>{
            filter.doFilter(req,res);
        });
        
    }

    initFilter(filter: FilterConfig)
    {
        this.filter = filter;
    }

}

