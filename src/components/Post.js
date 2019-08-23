import React, { Component } from 'react'
import Rainbow from '../hoc/Rainbow';
//import axios from 'axios';
import {connect} from 'react-redux';
import {deletePost} from '../action/postAction';

export class Post extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          post : null
    //     }
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
    //         console.log(res);
    //         this.setState({
    //             post : res.data
    //         })
    //     })
    // }
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {
        const head = {
           fontWeight: 'bold'
        }
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post card">
                <div className="card-content">
                    <span className = 'card-title center' style = {head}>{this.props.post.title}</span>
                    <p>{this.props.post.body}</p>
                </div>
                <div className="center">
                    <button className="btn red" onClick = {this.handleClick}>Delete Post</button>
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

const mapStateToProps = (state, ownProps) =>{
    let id =  parseInt(ownProps.match.params.post_id);
    return{
        post: state.posts.find(post => post.id === id)
    }
}
const mapStateToDispatch = (dispatch) => {
    return{
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Rainbow(Post))
