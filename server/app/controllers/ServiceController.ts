import { Router, Request, Response, NextFunction } from 'express';
import RequestMapping from '../anonotation/RequestMapping';
import Controller from '../anonotation/Controller';

@Controller
class ServiceController {
          
    @RequestMapping('/')
    public index(): void {
        console.log("TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }


}


export default ServiceController;


// const router: Router = Router();

// router.use("/service", (req: Request, res: Response , next:NextFunction) => {
//     console.log("====================================================="); 
//     console.log(req.param('test'));
//     res.send("service call!");
//     console.log("service end");
//     console.log("====================================================="); 
// });




// export const ServiceController: Router = router;


