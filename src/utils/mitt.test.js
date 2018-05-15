import sinon from 'sinon';
import Mitt from './mitt';
import { expect } from 'chai';

describe('mitt', () => {
  let emitter = null;
  test('creates instance', () =>{
    emitter = new Mitt();
    expect(emitter).to.not.be.null;
  });

  describe('on', () => {
    test('on(event, handler) - adds event listener', () =>{
      let spy = sinon.spy();
      emitter.on('foo', spy);
      emitter.emit('foo', 'bar');
      expect(spy.calledOnce).to.be.true;
    });
    test('on(*, handler) - triggers handler for *', () =>{
      let spy = sinon.spy();
      let allSpy = sinon.spy();
      emitter.on('foo', spy);
      emitter.on('*', allSpy);
      emitter.emit('foo', 'bar');
      expect(spy.calledOnce).to.be.true;
      expect(allSpy.calledOnce).to.be.true;
    });
    test('on - * all event handlers', () =>{
      let spy = sinon.spy();
      emitter.on('*', spy);

      emitter.emit('foo', 'bar');
      expect(spy.callCount).to.equal(1);
      emitter.emit('foo', 'bar');
      emitter.emit('bar', 'bar');
      expect(spy.callCount).to.equal(3);
    });
  });

  describe('off', () => {
    test('off - removes event listener', () =>{
      let spy = sinon.spy();
      emitter.on('foo', spy);
      emitter.emit('foo', 'bar');
      expect(spy.callCount).to.equal(1);

      emitter.off('foo', spy);
      emitter.emit('foo', 'bar');
      expect(spy.callCount).to.equal(1);
    });

    test('off - does not remove unknown event listener', () =>{
      let spy = sinon.spy();
      emitter.on('foo', spy);
      emitter.off('bar', spy);
      emitter.emit('foo', 'bar');
      emitter.emit('bar', 'bar');
      expect(spy.callCount).to.equal(1);
    });
  });
});
