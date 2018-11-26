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

function box(name){
let b= Object.create(box.methods);
b.name=name;
return b;
}
box.methods = {

    pressButton: function(reality){
        let meeseeks= mrMeeseeks();
        reality.push(meeseeks);
        meeseeks.speaksOnCreate();

    },
    killMrMeesseks: function(reality){
        reality.shift();
    }
};

function mrMeeseeks(){
        let m =Object.create(mrMeeseeks.methods);
        m.answers=['Oh yeah! yes ma\'am!', 'Can do', 'Come on'];
return m;}
mrMeeseeks.methods = {
    speaksOnCreate: function(){
        console.log('Woo I\'m Mr. meeseeks Look at me');
    },
    makeRequest: function(action,object){
        this.action=action;
        this.object=object;
        let index=Math.floor((Math.random() * this.answers.lenght));
        console.log(this.answers[index]);    
    },
    fulffillRequest:function(){
        console.log(this.action+' '+this.object+' All done!');
        box.killMrMeesseks();
    }

};
let theBox=new SingeltonBox('jajaja');
console.log(theBox);
//console.log(theBox.label);
let theBoxtwo=new SingeltonBox('changeLabel');
console.log(theBox);
reality=[];
theBox.pressButton(reality);
theBox.pressButton(reality);
console.log(reality);