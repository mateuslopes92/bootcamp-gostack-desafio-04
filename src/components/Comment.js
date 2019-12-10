import React from 'react';

// import { Container } from './styles';

export default function Comment({comment}) {
  return (
    <div className="comment-container">
      <img src={comment.author.avatar} alt={comment.author.avatar}/>
      <div className="comment-box">
        <small><b>{comment.author.name}</b> - {comment.content}</small> 
      </div>
    </div>
  );
}
