import React, { Component } from 'react'
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';

export class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post : null
        }
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            console.log(res);
            this.setState({
                post : res.data
            })
        })
    }
    
    render() {
        const head = {
            fontWeight: 'bold'
        }
        const post = this.state.post ? (
            <div className="post card">
                <div className="card-content">
                    <span className = 'card-title center' style = {head}>{this.state.post.title}</span>
                    <p>{this.state.post.body}</p>
                </div>
            </div>
        ) : (
            <div className ='center'>Loading post....</div>
        )
        return (
            <div className="container">
                <h4>Route Parameter</h4>
                {post}
            </div>
        )
    }
}

export default Rainbow(Post)
