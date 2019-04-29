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
            headers: { 'Content-Type': 'application/json' }
          })
          .then(res => res.json())
          .then(data => {
            this.props.history.push(`/chores/${this.state.id}`);
          })
          .catch(error => console.log('error', error));
      }

    render() { 
        console.log(this.state)
        return ( 
            <div className="mt-2">
                <h3>Edit Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input name="content" placeholder={this.state.content} onChange={this.handleChange} type="text" className="form-control"/>
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