import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class App extends  React.Component {
  constructor(props){
    super(props);
    this.state = {

      users : []

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({users: data})
      })

  }

  render() {

    console.log("homepage")

  return (
    <div className="row">
      <h1 style={{display:"flex",justifyContent:"center"}}>Users</h1>
       
          <div className="column">
              {this.state.users.map((user) => {
                return(
                <div className="card" key={user.id}>
                  {user.name}
                  <h4>{user.company.name}</h4>
                    <Link to={`/post_page/${user.id}/${user.name}`}> 
                    <h3 style={{color:"red"}}> Blog Posts</h3>
                    </Link>
                </div>
                )
              })}
          </div>
        
    </div>
  );
}
}

export default App;
