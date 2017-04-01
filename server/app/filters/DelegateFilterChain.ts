import { FilterChain } from './FilterChain';
import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import * as express from 'express';
import { Request, Response, NextFunction ,Router} from 'express';
/**
 * DelegateFilterChain
 *  
 * @description DelegateFilterChain 는 실제로는 fiter 를 하지않고 하위 
 *              필터 객체들에게 실제 필터링 동작을 하도록 위임하여 실행한다. 
 * @since 2017.03.31
 * @author ByeongGiKim
 * @version 0.1
 */
export default class DelegateFilterChain implements FilterChain {
    
    private filterConfig: FilterConfig;
    private app : express.Application;
    private filters : Array<Filter>;
      
    constructor(app :express.Application, filters:Array<Filter>){
        this.app = app;
        this.filters = filters;        
    }
    
    /**
     * Express의 Router를 받아서 전후 필터링 처리를 할수 있도록 제어권을 넘겨준다.
     * @param servlet 
     */
    public delegate(servlet: Router) :void{

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

    /**
     * Filter를 실행한다.
     * @param req 
     * @param res 
     */
    public doFilter(req: Request, res: Response) : any 
    {
        
      this.internalDoFilter(req, res);

    }
    /**
     * 실제적으로 필터를 실행하는 내부 메소드 
     * @param req 
     * @param res 
     */
    private internalDoFilter(req: Request, res: Response) : any  
    {
        let filters = this.filters;
        filters.map((filter, index , filters)=>{
            filter.doFilter(req,res);
        });
        
    }

   public initFilter(filterConfig: FilterConfig)
    {
        this.filterConfig = filterConfig;
    }

}

