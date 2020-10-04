import React from 'react';
import ReactDOM from'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App=()=>{
return (

<div className= "ui container comments">
   <ApprovalCard/>
   <CommentDetail author="Shayok" timeAgo="Today at 6.00AM" comments="Nice Blog Post!" image={faker.image.avatar()}/>
   <CommentDetail author="Ullah" timeAgo="Today at 5 pm"comments="Dope"image={faker.image.avatar()}/>
   <CommentDetail author="Isfat" timeAgo="Yesterday at 9am" comments="incredible" image={faker.image.avatar()}/>
</div>
);
};
ReactDOM.render(<App />, document.querySelector('#root'))    
