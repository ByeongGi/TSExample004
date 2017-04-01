import cheerio from 'cheerio';


export default class HTMLLoader {

    cacheHtml: string;
    parserRoles: Array<ParserRole>;


    constructor(html: string, parserRoles: Array<ParserRole>) {
        this.cacheHtml = html;
        this.parserRoles = parserRoles;
        this.load();
    }

    /**
     * Response 된 데이터를 cheerio 에 로드 시킨다
     * @param html 
     * @param options 
     */
    private load() {
        return cheerio.load(this.cacheHtml);
    }

    /**
     * 
     * @method 
     * @description
     */
    public findDataAtHtml() {
        let $html = this.load();
        let targetDataList = this.parserRoles.map((elem, index, array) => {
            return elem.target = $html(elem.role, elem.scope).text();
        });

        return targetDataList;
    }
    
}