'use strict';


//definicja funkcji ajax 
function ajax(method, url){
     
//    utworzenie obiektu XMLHttpRequest - bez niego nie mozemy uzywac ajax 
    
    let httpReq = new XMLHttpRequest();
    
//    otwieram polaczenie z serwerem
    httpReq.open(method, url);
    
//    onreadystatechange uruchamiana jest za kazdym raze, kiedy zmieni sie readystate(sprawdzajaca status polaczenia)
//    0 : polaczenie nienawiazane
//    1: polaczenie nawiazane
//    2: zadanie odebrane 
//    3: przetwarzanie zadania
//    4: dane zwrocone i gotowe do uzytku
 
    httpReq.onreadystatechange = function (){
        if(httpReq.readyState == 4){
            if(httpReq.status == 200){
                
//                odkladamy dane do szuflady
                let returnData = httpReq.responseText;
                
//                wywolujemy metode ktora obrabia nasze dane
                httpReq.onsuccess(returnData);
                
//                zeruje obiekt, aby nie utrzymac polaczenia
                httpReq = null;
            }
        }
    }

    httpReq.onsuccess = function(response){
        let jsonObj = JSON.parse(response);
        
//        for (i =0; i < jsonObj.lenght; i ++){
//            console.log(jsonObj[i]);
//        }
        console.log(jsonObj.userName + ' ' + jsonObj.userId + ' ' + jsonObj.userURL);

    }
    
//    wysylamy zadanie
    httpReq.send(); 
}

ajax('GET','http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');