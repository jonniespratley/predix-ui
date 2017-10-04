import React from 'react';
import classnames from 'classnames';
import IronSelector from '../iron-components/iron-selector';

import DeviceView from './device-view';

import stylesheet from './px-demo-helpers.scss';
class DeviceLayoutViewer extends React.Component {
  render(){
    const {
      device,
      src,
      selectedView = 0,
      children
  } = this.props;
    return (
      <div className={`px-demo-helpers ${device}`}>
        <div className={`canvas ${device}`}>
          <IronSelector className={classnames('views', device)}
              selected={device}
              propForSelected="device"
              selectedItem={selectedView}>
            <DeviceView device="laptop" src={src}>{children}</DeviceView>
            <DeviceView device="tablet" src={src} landscape>{children}</DeviceView>
            <DeviceView device="phone" src={src} >{children}</DeviceView>
          </IronSelector>
        </div>
        <style jsx>{stylesheet}</style>
    </div>
    );
  }
}

/**
 * px-demo-helpers component
 */
const DemoHelpers = {
  DeviceView,
  DeviceLayoutViewer
};

export default DemoHelpers
