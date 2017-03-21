import fs from 'fs';

export default class FileUtils {
    /**
     *  static 메서드만 사용하여 새로운 Intance를 생성하지 못하고 사용할수 있도록 구성하였다.
     */
    private constructor() { }


    /**
     * 
     * 특정 Path 에 대한 경로에 대한 권한을 체크한다.
     * @param path|Buffer
     * @param number
     * @param function
     */
    static fileAcessCheck(path: string | Buffer
                        , mode: number
                        , callback: (err: NodeJS.ErrnoException) => void) {
        let callbackFun = (callback !== undefined) ?
            callback : (err: NodeJS.ErrnoException) => { console.error(err) };
        fs.access(path, mode = fs.constants.W_OK, callbackFun);
    }
    /**
     * fileCreate()
     * @description 특정 경로에 파일이 존재하는지 검사하고 , 해당 파일이 존재하지 않으면
     *              해당 경로에 파일을 생성한다.
     * @param path 
     * @param callbak 
     */
    static fileCreate(path: string | Buffer
        , callbak: (exists: boolean) => void) {
        fs.exists(path, (exists) => {
            if (!exists) {
                fs.open(path, 'w+', function (err, fd) {
                    console.log('file open complete');
                    if (err) throw err;
                });
            }
        });
    }

    /**
     * 파일을 생성한후에 실제적으로 파일을 저장하는 기능을 하는 함수이다.
     * @param filename 
     * @param data 
     * @param encoding 
     * @param callback 
     */
    static fileWrite(filename: string
                    , data: any, encoding = 'utf-8'
                    , callback: (err: NodeJS.ErrnoException) => void) 
    {

        let defalutCallBackFun = (callback !== undefined) ?
            callback 
         : (err: NodeJS.ErrnoException) => { console.error(err) };
        fs.writeFile(filename, data, callback);

    }

    static fileNameUUID() {

    }

}