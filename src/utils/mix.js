
export function mix(...mixins) {
  class Mix {
    constructor(...args) {
      this.initialize && this.initialize(...args);
      /* eslint-disable-next-line */
      for (const i in mixins) {
        const newMixin = new mixins[i](...args);

        copyProperties(this, newMixin);
        copyProperties(this.prototype, newMixin.prototype);
      }
    }
  }
  /* eslint-disable-next-line */
  for (const i in mixins) {
    const mixin = mixins[i];
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}

export function copyProperties(target = {}, source = {}) {
  const ownPropertyNames = Object.getOwnPropertyNames(source);

  ownPropertyNames
    .filter(key => !/^(prototype|name|constructor)$/.test(key))
    .forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(source, key);

      Object.defineProperty(target, key, desc);
    });
}
