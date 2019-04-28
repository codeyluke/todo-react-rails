import React, { Component } from 'react';

class ChoreAdd extends Component {
    state = { content: ''};   

    handleSubmit = e => {
        e.preventDefault();
        fetch('api/chores', {
            method: 'POST',
            body: JSON.stringify(this.state),     
            headers: {'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            this.props.history.push(`/chores/${data.id}`);
        })
        .catch(error => console.log('error', error));
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCancel = () => {
        this.props.history.push("/chores");
    }

    render() {
        return (
        <div>
            <h1>Create Todo</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Add Todo's</label>   
                <input name="content" rows="5"  onChange={this.handleChange} className="form-control" />
            </div>
            <div className="btn-group">
                <button type="submit" className="btn btn-dark">Create</button>
                <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
            </form>
        </div>
        );
    }
}

export default ChoreAdd;