/* eslint-disable */
/**
 * Taken from https://github.com/developit/mitt
 * @description

  import mitt from 'mitt'

  const emitter = mitt()

  // listen to an event
  emitter.on('foo', e => console.log('foo', e) )

  // listen to all events
  emitter.on('*', (type, e) => console.log(type, e) )

  // fire an event
  emitter.emit('foo', { a: 'b' })

  // working with handler references:
  function onFoo() {}
  emitter.on('foo', onFoo)   // listen
  emitter.off('foo', onFoo)  // unlisten
 * @param {*} all 
 */
export default function mitt(all) {
  all = all || Object.create(null);

  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },

    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(type, evt) {
      (all[type] || [])
      .slice()
        .map((handler) => {
          handler(evt);
        });
      (all['*'] || [])
      .slice()
        .map((handler) => {
          handler(type, evt);
        });
    }
  };
}
