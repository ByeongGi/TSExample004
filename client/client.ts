import Vue from 'vue';

const appConfig: any = {
    el: '#exam_1',
    data: {
        message: '안녕하세요 TEST HOT LOAD Vue!'
    }
};

var exam_1: Vue = new Vue(appConfig);

const appConfig_2: any = {
    el: '#exam_2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
};
var exam_2: Vue = new Vue(appConfig_2);


const appConfig_3: any = {
    el: '#exam_3',
    data: {
        seen: true
    }
};

var exam_3: Vue = new Vue(appConfig_3);


const appConfig_4 = {
    el: '#exam_4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
};

var exam_4 = new Vue(appConfig_4);


const appConfig_5: any = {
    el: '#exam_5',
    data : {
        message : 'Reverse Test'
    },
    methods:{
        callBackFun: function(){ // Arrow Function 은 자동으로 Scope를  바인딩 하지 않음
            console.log(this);
            this.message = this.message
                               .split('')
                               .reverse()
                               .join('');                               
        }
    }
};

var exam_5 : Vue = new Vue(appConfig_5);


