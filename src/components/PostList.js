import React, { Component } from 'react';
import PostItem from './PostItem';
// import { Container } from './styles';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  }    
  render() {
    const {posts} = this.state;
    return (
      <div id="postList">
        {posts.map(post => <PostItem key={post.id} {...post} />)}
      </div>
    );
  }
}
