import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res);
            this.setState({
                posts : res.data.slice(0,10)
            })
        })
    }
    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                        <Link to = {'/' + post.id}>
                            <span className = 'card-title'>{post.title}</span>
                        </Link> 
                            <p className = 'card-body'>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className ='center'>No Post yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home
