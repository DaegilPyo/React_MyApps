import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
// import { Link } from 'react-router-dom';
class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }
    postSelectedHandler = (id) => {
        // this.setState({ selectedPostId: id });
        // this.props.history.push({ pathname: '/' + id });
        this.props.history.push('/posts/' + id);
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //   <Link to={'/' + post.id} key={post.id} >
                    <Post
                        key={post.id}
                        // {...this.props}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });
        }
        return (
            <div>
                <section className="Posts" >
                    {posts}
                </section>
                {/* <FullPost id={this.state.selectedPostId}></FullPost> */}
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} ></Route>
            </div>
        );
    }
}

export default Posts;