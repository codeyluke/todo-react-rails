import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChoreInfo extends Component {
    state = { 
        chore: {}
    }
    
    componentDidMount(){
        fetch(`/api/chores/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            this.setState({ chore:data })
        }).catch(err => console.log('error',err))
    }

    handleDelete = () => {
        fetch(`/api/chores/${this.props.match.params.id}`, {method: 'DELETE'})
        .then(()=> {
            this.props.history.push('/chores')
        }).catch(err => console.log('error', err))
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
                <h2> { this.state.chore.content }</h2>
                <p>
                    <Link to={`/chores/${this.state.chore.id}/edit`} className="btn btn-outline-dark">Edit Todo</Link>
                    <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button>
                    <Link to="/chores" className="btn btn-outline-dark">Back to List</Link>
                </p>
            </div>
        );
    }
}
 
export default ChoreInfo;