'use strict';


function ajax(method, url){
    
    let httpReq = new XMLHttpRequest();
    
    httpReq.open(method, url);
    
    httpReq.onreadystatechange = function (){
        if(httpReq.readyState == 4){
            if(httpReq.status == 200){
                
                let returnData = httpReq.responseText;

                httpReq.onsuccess(returnData);

                httpReq = null;
            }
        }
    }

    httpReq.onsuccess = function(response){
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);

        console.log(jsonObj.userName + ' ' + jsonObj.userId + ' ' + jsonObj.userURL);
        let paragraph1 = document.createElement('p');
        paragraph1.innerHTML = (jsonObj.userName + ' ' + jsonObj.userId + ' ' + jsonObj.userURL)
        document.body.appendChild(paragraph1);

    }

    httpReq.send(); 
}



let btn = document.getElementById('button');

function pobierzDane(){
    
    ajax('GET','http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');                       
};

btn.addEventListener('click', pobierzDane);