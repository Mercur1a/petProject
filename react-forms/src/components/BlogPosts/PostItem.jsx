import React from 'react';
import {useHistory} from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import './PostsStyles.css'

const PostItem = (props) => {
    const router = useHistory();
    return (
        <div className='postItem'>
            <div>
                <strong>{ props.post.id} {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div>
                <MyButton onClick={() => router.push(`/blog/${props.post.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;