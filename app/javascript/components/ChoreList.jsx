import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ChoreList extends Component {
    state = { 
        chores: []
    }

    componentDidMount(){
        axios.get('api/chores').then(res => {
            this.setState({ chores: res.data })
        }).catch(err => console.log('error', err))
    }
        
    render() { 
        console.log(this.state)
        return ( 
            <div>
                <h1>List's Chores</h1>
                {   this.state.chores.map(chore => {
                    return(
                        <div key={ chore.id }>
                            <p><Link to={`/chores/${chore.id}`}>{ chore.content }</Link></p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
 
export default ChoreList;