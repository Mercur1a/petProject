import React, { useState } from 'react';
import MyInput from '../UI/InputForm/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({ create }) => {
    
    const [post, setPost] = useState({ title: '', body: '' })
    

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }


    return (
        <div>
            <div>
            <MyInput
                placeholder='Post title'
                value={post.title}
                type='text'
                onChange={e => setPost({...post, title:e.target.value})}
            />
            <MyInput
                placeholder='Post body'
                value={post.body}
                type='text'
                onChange={e => setPost({...post, body:e.target.value})}
                />
            </div>
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </div>
    );
};

export default PostForm;