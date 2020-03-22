import React from 'react';
import './Stage.css';

class Stage extends React.Component {
    render() {
        return (
            <div className="stage">
                {this.props.children}
            </div>
        );
    }
}

export default Stage;