import React from 'react';
import classnames from 'classnames';
/**
 * ExampleComponent component
 */
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AppNavSubItem';
        this.state = {
            selected: props.selected || false
        }
    }
    handleClick(e){
        console.log('handleClick', e);
        if(this.props.onClick){
            this.props.onClick(e);
        }
    }
    render() {
        const {
            item,
            selected,
            children
        } = this.props;
        const { 
            id,
            label
        } = item;
        const subitemClasses = classnames('px-app-nav-subitem', { 'selected': selected });
        return (
            <div className={subitemClasses} id={id} onClick={this.handleClick.bind(this)}>
                <p className='app-nav-subitem__label'>{label}</p>
            </div>
        );
    }
}
