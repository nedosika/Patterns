class Singletone {
  constructor(){
    if(!Singletone.instance)
    {
      Singletone.instance = this;
    }
    
    return Singletone.instance;
  }
}

const s1 = new Singletone();
const s2 = new Singletone();

if(s1 === s2) {
  console.log('Singletone is work!!!');
}
else {
  console.log('Singletone is not work!!!');
}
