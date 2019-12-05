import React from 'react';
import './App.css';
import Comments from './Comments';

class PostDetail extends  React.Component {
  constructor(props){
    super(props);
    this.state = {

      postComments : [],
      hideComments : false,

    }
    this.showComments = this.showComments.bind(this);
    this.hideCommentsOnClick = this.hideCommentsOnClick.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.location.state.postDetail.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({postComments: data})
        console.log(data)
      })

  }

  showComments(){
      this.setState({hideComments: true})
  }

  hideCommentsOnClick(){
    this.setState({hideComments: false})
  }

  deletePost(){
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.location.state.postDetail.id}`, {
          method: 'delete'
        })
        window.history.back();
   
  }

  render() {

    console.log(this.props.location.state)
    

  return (
    <div className="row">
       
          <div className="column">
                         
                <div className="card">
                    <h1>{this.props.location.state.postDetail.title}</h1>
                            <button className ="deletePost" onClick={this.deletePost}>Delete</button>
                            {this.props.location.state.postDetail.body}
                            <button className='showComment' onClick={this.showComments} >
                                Comments
                            </button> 
             
                  {this.state.hideComments ?

                  <Comments hideCommentsOnClick={this.hideCommentsOnClick} postComments={this.state.postComments}/>
                      :

                      ''
                }
                
                </div>                     
          </div>        
    </div>
  );
}
}

export default PostDetail;

