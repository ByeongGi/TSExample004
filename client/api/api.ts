var url = 'http://api.data.go.kr/openapi/cty-park-info-std';

url += '?' + encodeURIComponent('ServiceKey') ; 
url += '=' + encodeURIComponent('oGPD0EoyGSxsA74dM3z3pU996RnVsXOIhUG2vTS6Qn4sXL%2BJSD0CAEsuEbrzxYM%2B8W86fMKP5QX5RdRgS6ee0Q%3D%3D');
url += '&' + encodeURIComponent('s_page') + '=' +encodeURIComponent('1');
url += '&' + encodeURIComponent('s_list') + '=' +encodeURIComponent('1');
url += '&' + encodeURIComponent('type')   + '=' +encodeURIComponent('json');

var apiHeaders = new Headers();
apiHeaders.append('Accept','application/json');
apiHeaders.append('Accept-Language',' ko_KR');
var init = { method: 'GET',
               headers: apiHeaders,
               mode: 'no-cors',
               cache: 'default' };


fetch(url,init)
.then((response)=>{
    console.log(response);
});