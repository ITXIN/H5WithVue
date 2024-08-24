class Eventmitter{
  constructor(){
    this._events = {}
  }
  on(eventName,cb){
    const cbs = this._events[eventName]||[]
    cbs.push(cb)
    this._events[eventName] = cbs
  }

  emit(eventName,...args){
    const cbs = this._events[eventName]||[]
    cbs.forEach(cb => cb(...args));
  }
  off(eventName,cb){
    const cbs = this._events[eventName]||[]
    const cbsNew = cbs.filter(fn => fn !== cb )
    this._events[eventName] = cbsNew
  }
  once(eventName,cb){
    const one = (...args)=>{
      cb(...args)
      this.off(eventName,one)
    }
    this.on(eventName,one)
  
  }
}
// 
// const ev = new Eventmitter()
// const cb = (res)=>{
//   console.log('====res',res);
//   }
// // ev.on('dd',cb)

// ev.once('dd',cb)
// ev.emit('dd',{key:'value'})
// ev.emit('dd',{key:'value2'})
// console.log('========ev',ev);

// open -n  /Applications/Google\Chrome.app/ -- args --disable-web-security --user-data-dir=/User/apple1/chromeUserData --ignor-certificate-errors --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecur

