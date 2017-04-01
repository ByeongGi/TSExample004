/* app/server.ts */
// Import everything from express and assign it to the express variable
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

// Import WelcomeController from controllers entry point
// import { WelcomeController, ServiceController } from './controllers';

// Filter
import { DelegateFilterChain , Filter, SecurityFilter , EncodingFilter} from './filters';
import { DispatcherServlet } from './servlet';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;



let filterArr = [new SecurityFilter()
                ,new EncodingFilter()];

const filterChain :DelegateFilterChain = new DelegateFilterChain(app,filterArr);
filterChain.delegate(DispatcherServlet);


// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);

});