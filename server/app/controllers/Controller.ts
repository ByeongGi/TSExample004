import Logger from '../logger/Logger';

interface BaseController {

    logger: Logger;

    requsetHandle():any;
}



export default BaseController;