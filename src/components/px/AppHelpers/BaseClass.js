import Mitt from '../../../utils/mitt';

const emitter = new Mitt();

export default class BaseClass {
  emitter = emitter;
  fire = emitter.emit;
  on = emitter.on;
  off = emitter.off;

  constructor() {
    this.addEventListener = emitter.on;
  }

  set(name, val) {
    this[name] = val;
  }
  push(name, val) {
    this[name].push(val);
  }
  splice(name, val, index) {
    this[name].splice(val, index);
  }
}
