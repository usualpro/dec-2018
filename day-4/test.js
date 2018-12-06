maxTemp = 0;
secondTempMax = 0;
tabDays = [5, 2, 1, 4, 9, 2, 15];

function getMax (current, index) {
    tabDays.slice(index).map((currentElement) => {
       if((currentElement > current) && secondTempMax === 0){
           maxTemp += (currentElement - current);
       }else{
           secondTempMax += (currentElement - current);
       }

       if(secondTempMax > maxTemp) {
           maxTemp = secondTempMax;
           secondTempMax = 0;
       }
    })
}


tabDays.map(function (element, index) {
     getMax(element, index);
});

console.log('result', maxTemp) ;
