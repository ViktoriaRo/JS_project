import React from 'react';
import Titles from './Titles';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction';

class About extends React.Component {
	handleClick = () => {
		this.props.deletePost(this.props.posts.id);
	}

	render(){
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map(post => {
				return (
		          <div className="post card" key={post.id}>
		            <div className="card-content">
		                <span className="card-title red-text">{post.title}</span>
		              <p>{post.body}</p>
		            </div>
		          </div>
		        )
      		})
   		 ) : (
     	 <div className="center">No posts to show</div>
  	  );

    return (
    
      <div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-5 title-container">
								<Titles />
							</div>
							<div className="col-7 form-container">
						          {postList}
		              			<button className="right" onClick={this.handleClick}>Delete posts</button>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
	}
};		

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => {dispatch(deletePost(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);