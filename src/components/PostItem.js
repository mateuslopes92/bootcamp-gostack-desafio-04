import React from 'react';

function PostItem({author, date, content, comments}) {
  return (
    <div>
      <PostHeader author={author} date={date}/>
    </div>
  );
}

function PostHeader({author, date}){
return(
  <div className="post-header">
    <img src={author.avatar}/>
    <div>
      <span>{author.name}</span>
      <span>{date}</span>
    </div>
    
  </div>
)
}


export default PostItem;