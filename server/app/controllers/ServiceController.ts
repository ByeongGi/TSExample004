// This is Service Controller.
// 모든 Service를 요청을 처리하는 컨트롤러

import { Router, Request, Response, NextFunction } from 'express';

const router: Router = Router();

router.use("/service", (req: Request, res: Response , next:NextFunction) => {
    console.log("====================================================="); 
    console.log(req.param('test'));
    res.send("service call!");
    console.log("service end");
    console.log("====================================================="); 
});




export const ServiceController: Router = router;


