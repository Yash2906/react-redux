import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  componentWillMount() {
    // axios.post('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res)
    //         if (res.status === 200) {
    //             console.log('Data', res.data)
    //         }
    //         else {
    //             console.log("Errrooorrrrrr")
    //         }
    //     })
    //   .catch(error => console.log('error: ' + error))

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data =>
        this.setState({
          post: data
        })
      );
  }

  render() {
    const postItems = this.state.post.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
