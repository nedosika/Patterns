class Target {
  request(){
    console.log('Target request');
  }
}

class Adaptee{
  specifiedRequest(){
    console.log('Specified request');
  }
}

class Adapter{
  constructor(adaptee){
    this._adaptee = adaptee;
  }

  request(){
    console.log('Adapter work and resolve adaptee:');
    this._adaptee.specifiedRequest();
  }
}

const target = new Target();
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

target.request();
adapter.request();
