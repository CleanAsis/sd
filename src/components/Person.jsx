import React from 'react';

import './Person.css';
import PersonImg from '../assets/medical-mask.svg';

class Person extends React.Component {

    render() {
        return (
            <PersonImg className="person" height={50} width={50} viewBox="0 0 500 500"
                style={{left: this.props.x, top: this.props.y}}
             />
        );
    }

}

export default Person