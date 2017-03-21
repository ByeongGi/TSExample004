/* app/server.ts */

// Import everything from express and assign it to the express variable
import * as express from 'express';

import { Request, Response, NextFunction } from 'express';

// Import WelcomeController from controllers entry point
import { WelcomeController, ServiceController } from './controllers';
import { RequestMapping } from '../app/anonotation/RequestMapping';
import { SecurityFilter } from '../app/filters/SecurityFilter';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

app.all("*",

    [

        (req: Request, res: Response, next: NextFunction) => {

            let securityFilter: SecurityFilter = new SecurityFilter();
            securityFilter.doFilter(req, res, next);
            // 필터 객체 
            console.log("전처리");

            next();
        },
        ServiceController,

        (req: Request, res: Response, next: NextFunction) => {


            // 보안 처리 
            // 필터 객체 
            console.log("후처리");

            next();
        }


    ]

);


// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);

});