import React from 'react';
/*
 * Complete SVG icon collection from the Polymer project (goo.gl/N7SB5G)
 * You should not include the entire set in your application.
 */
export default class IronIcon extends React.Component{
  constructor(props){
    super(props);
    this.defaultProps = {
      size: 22
    };
  }

  mergeStyles(...args){
    return Object.assign({}, ...args);
  }

  renderGraphic() {
    switch (this.props.icon) {
      case 'accessibility':
        return (
          <g><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6h-2v-13h-6v-2h18v2z"/></g>
        );
    }
  }

  render() {
    const { size, style, color } = this.props;
    let styles = {
      fill: 'currentcolor',
      verticalAlign: 'middle',
      height: size,
      width: size
    };

    return (
      <svg viewBox="0 0 22 22"
        preserveAspectRatio="xMidYMid meet"
        style={this.mergeStyles(
          styles,
          style
        )}>
        {this.renderGraphic()}
      </svg>
    );
  }
}
