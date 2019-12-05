import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class PostPage extends  React.Component {
  constructor(props){
    super(props);
    this.state = {

      posts : []

    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data})
      })

  }

  render() {
  return (
    <div className="row">
    <h1 style={{display:"flex",justifyContent:"center"}}>{this.props.match.params.name}</h1>
      <div className="container">
          {this.state.posts.filter(post => post.userId == this.props.match.params.id).map((post) => {
            return(
            <div className="card" key={post.id}>
                <Link style={{ textDecoration: 'none'}}
                    to={{
                    pathname: '/post_page/detail',
                    state: {
                        postDetail: post
                    }
                    }}>
                {post.title}
                </Link>
              
            </div>
            )
          })}
      </div>
    </div>
  );
}
}

export default PostPage;
