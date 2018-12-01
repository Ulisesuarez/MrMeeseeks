/* la caja crea mr meseeks, speakOnCreate Woo im Mr. meeseeks Look at me ,  
makeRequest(objeto sobre el que recae y accion), 
Oh yeah! yes ma'am!, Can do, luego 
mrMeeseeks realiza la acción fulfill request (imprimir frase + All done), All done,
 tiene que dejar de existir.
Vamos a suponer que la caja tiene un mrmeesseks prototipo cuando lo crea 
Solo puede haber una instancia de la caja
Hay que enseñar a un mRmeesseks a hacer otro mrMeesseks que saluda diciendo Hiii 

Todos los mr meseeks van a un array reality crear un objeto llamado learnRequest( recibe una función y un objeto) funcion draw(meter tomate en olla)
thats a lower handicap stroke  explota del primero al ultimo y no al reves excepto el ultimo  putt para pasarle al learnRequest del ultimo */ 

class SingeltonBox {
    constructor(labelTest) {
      if (SingeltonBox.exists) {
        this._box = SingeltonBox._box;
        this._box.name=labelTest;
        return this._box;
      }
      SingeltonBox._box=box(labelTest);
      this._box = SingeltonBox._box;
      SingeltonBox.exists = true;
      return this._box;
    }
  }
exports.SingeltonBox= SingeltonBox;
function box(name){
let b= Object.create(box.methods);
b.name=name;
return b;
}
exports.box=box;
box.methods = {

    pressButton: function(reality, meeseekception){
        let meeseeks= mrMeeseeks();
        if(meeseekception){
            Object.assign(meeseeks, meeseekception);
            meeseeks.speaksOnCreate('Hiii');
            meeseekception.makeRequest(meeseekception.action,meeseekception.object);
            reality.push(meeseeks);
        } else{
            meeseeks.speaksOnCreate();
            reality.push(meeseeks);
        }
        return meeseeks;   
    },
    killMrMeeseeks: function(reality){
        reality.shift();
    }
};
exports.mrMeeseeks=mrMeeseeks;
function mrMeeseeks(){
        let m =Object.create(mrMeeseeks.methods);
        m.answers=['Oh yeah! yes ma\'am!', 'Oh yeah! Can do', 'Yes sireee!'];
        m.frustration=0;
return m;}
mrMeeseeks.methods = {
    speaksOnCreate: function(message){
        if(message){
            console.log(message);
        } else{
            console.log('Woo I\'m Mr. meeseeks Look at me');
        }
        
    },
    makeRequest: function(action,object){
        this.action=action;
        this.object=object;
        let index=Math.floor((Math.random() * this.answers.length));
        console.log(this.action + ' ' + this.object);
        console.log(this.answers[index]);    
    },
    fulfillRequest: function(box,reality){
        if(this.action==='take two strokes off at golf' && this.object==='Jerry\'s game') {
            let answers=[
                ' Remember to square your shoulders, Jerry',
                'This is as frustrating for us as it is for you',
                'Just try to relax',
                'I can’t take it anymore. I just want to die!',
                'We all want to die! we’re Meeseeks!',
                'Why did you even rope me into this?',
                'Kill him!'];
            let index=Math.floor((Math.random() * answers.length));
            this.frustration=9001;
            console.log(answers[index]);
            this.pressButton(box,reality);
        } else{
            console.log(this.action+' '+this.object+' All done!');
            box.killMrMeeseeks(reality);
        }
    },
    pressButton: function(box,reality){
        if (reality.length>20){
            this.frustration=4500;
            this.relievingPsychopathy=4500;
        }
        if (this.frustration > 9000){
            box.pressButton(reality, this).fulfillRequest(box,reality);
        }
    },
    learnRequest(box,reality,func,object){
        if(func){
            this.action=func.name;
            this.object=object;
            func(object,box,reality);
        }
        
    }

};
exports.draw=draw;
function draw(object,box,reality){
    if(object === 'tomatoInPot'){
        console.log('Thats a lower handicap stroke!!!');
        while(reality.length>1){
            console.log('AAA');
        box.killMrMeeseeks(reality);
        }
    }
    else{
        console.log('Existence is pain');
    }
}
exports.putt=putt;
function putt(onionInJar,box,reality){
    if(onionInJar == 'onionInJar'){
        console.log('Nice');
        box.killMrMeeseeks(reality);
    }
    else{
        console.log('What about short game?');
    }
}
