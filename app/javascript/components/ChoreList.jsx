import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChoreList extends Component {
    state = { 
        chores: []
    }

    componentDidMount(){
        
    }
        
    render() { 
        console.log(this.state)
        return ( 
            <div>
                <h1>ChoreList</h1>

            </div>
        );
    }
}
 
export default ChoreList;