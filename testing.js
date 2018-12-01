let mrM= require('./mrmesseks');

let theBox=new mrM.SingeltonBox('LaUnicaCaja');
let theBoxtwo=new mrM.SingeltonBox('DeMilNombres');
console.assert(theBox.name==='DeMilNombres');
reality=[];
theBox.pressButton(reality);
theBox.pressButton(reality);
theBox.pressButton(reality);
console.assert(reality.length === 3);
console.assert(Object.getPrototypeOf(reality[0])=== mrM.mrMeeseeks.methods);
reality[0].makeRequest("make more popular at shool","Summer");
console.assert(reality[0].action === 'make more popular at shool');
console.assert(reality[0].object === 'Summer');
console.assert(reality[1].action !== 'make more popular at shool');
console.assert(reality[1].object !== 'Summer');
reality[0].fulfillRequest(theBox,reality);
console.assert(reality.length === 2);
reality[0].makeRequest("make a more complet woman","Beth");
reality[0].fulfillRequest(theBox,reality);
reality[0].makeRequest("take two strokes off at golf","Jerry\'s game");
reality[0].fulfillRequest(theBox,reality);
console.assert(reality.length === 21);
reality[0].learnRequest(theBox,reality,mrM.draw);
reality[0].learnRequest(theBox,reality,mrM.draw,'tomatoInPot');
console.assert(reality.length === 1);

let miracle= [true,false];
let index=Math.floor((Math.random() * miracle.length));

if (miracle[index]){
    reality[0].learnRequest(theBox,reality,mrM.putt,'onionInJar');
} else{
  reality[0].learnRequest(theBox,reality,mrM.putt);  
}

