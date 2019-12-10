import React from 'react';

import Comment from './Comment';

function PostItem({author, date, content, comments}) {
  return (
    <div className="container">
      <PostHeader author={author} date={date}/>
      <Post content={content} />
      <PostComment comments={comments} />
    </div>
  );
}

function PostHeader({author, date}){
  return(
    <div className="post-header">
      <img src={author.avatar}/>
      <div className="post-author">
        <span>{author.name}</span> 
        <br />
        <time>{date}</time>
      </div>
    </div>
  )
}

function Post({content}){
  return(
    <div className="post">
      <span>
        {content}
      </span>
    </div>
  )
}

function PostComment({comments}){
  return (
    <ul className="comment-list">
      {comments.map(comment => <li key={String(comment.id)}><Comment comment={comment}/></li>)}
    </ul>
  )
}


export default PostItem;