import { Router, Request, Response, NextFunction } from 'express';

const router : Router = Router();


// requstMapping 여기서 해야한다.
// 컨트롤러를 여기다가 다 묶는다.
router.use("/*", (req: Request, res: Response , next:NextFunction) => {
    req.path
    console.log("====================================================="); 
    console.log(req.param('test'));
    console.log(req.path);
    console.log(req.rawHeaders);
    res.send("service call!");
    console.log("service end");
    console.log("=====================================================");
    next(); 
});



export const DispatcherServlet : Router = router;


