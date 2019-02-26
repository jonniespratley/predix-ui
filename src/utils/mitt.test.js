import sinon from 'sinon';
import Mitt from './mitt';

describe('mitt', () => {
  const sandbox = sinon.createSandbox();
 
  test('on/off', () => {
    const pubsub = new Mitt();
    const allSpy = sandbox.spy();
    const onSpy = sandbox.spy();
    pubsub.on('*', allSpy);
    pubsub.on('test', onSpy);
    pubsub.on('foo', ()=>{});
    
    pubsub.emit('test', 1);
    pubsub.emit('foo', 'bar');
    expect(onSpy.called);
    expect(allSpy.callCount).toBe(2);

    pubsub.emit('test', 1);
    expect(onSpy.callCount).toBe(2);
    
    pubsub.off('test', onSpy);
    pubsub.emit('test', 1);
    expect(onSpy.callCount).toBe(2);
  });
});
