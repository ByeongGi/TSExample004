import { Router, Request, Response, NextFunction } from 'express';

const router : Router = Router();


// requstMapping 여기서 해야한다.
// 컨트롤러를 여기다가 다 묶는다.
// requstMapping를 선언한  Controller 자동으로 router객체를 통해서 
// 등록하는 function으로 구현할가 고민중....
router.use((req: Request, res: Response , next:NextFunction) => {
    req.path
    console.log("====================================================="); 
    console.log(req.param('test'));
    console.log(" baseUrl : "+req.baseUrl);
    console.log(" originalUrl : "+req.originalUrl);
    console.log(" hostname : "+req.hostname);
    console.log(" method : "+req.method);
    console.log(" ip : "+req.ip);
    console.log(req.body);
    res.send("service call!");
    console.log("service end");
    console.log("=====================================================");
    next(); 
});

class internalServlet {

    


}

export const DispatcherServlet : Router = router;


