import React, { Component } from 'react';

class ChoreEdit extends Component {
    state = { 
        content: ""
    }

    componentDidMount(){
        fetch(`api/chores/${this.props.match.params.id}`)
        .then(res => res.json())
        .then((res) => {
            this.setState(res)
        }).catch(err => console.log('error', err))
    }
    
    handleCancel = () => {
        this.props.history.push(`/chores/${this.state.id}`)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch(`api/chores/${this.props.match.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'}
            
        }).then(res => res.json())
        console.log(res)
        .then( data => {
            console.log(data)
            this.props.history.push(`/chores/${this.state.id}`);
        }).catch(err => console.log('error', err))
    }

    render() { 
        console.log(this.state)
        return ( 
            <div>
                <h1>Edit Todo - {this.state.content}</h1>
                <form>
                    <div className="form-group">
                        <input name="content" onChange={this.handleChange} type="text" className="form-control"/>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-dark" type="submit">Update</button>
                        <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>

        );
    }
}
 
export default ChoreEdit;