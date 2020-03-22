import React from 'react';
import Person from './Person';

class Actor extends Person {
    static defaultProps = {
        x: '50%',
        y: '50%'
    }
}

export default Actor