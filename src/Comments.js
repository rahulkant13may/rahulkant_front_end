import React from 'react';

class Comments extends React.Component {

    render() {
        return (

            <div>
                <button onClick={this.props.hideCommentsOnClick}>Hide Comments</button>

                    {
                        this.props.postComments.map((comments) => {
                            return(
                            <div className="card" key={comments.id}>
                            {comments.name}
                        
                            </div>
                            )
                        })
                    }

              </div>
        )
    }
}

export default Comments