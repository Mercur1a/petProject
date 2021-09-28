import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import JsonService from '../components/API/JsonService';
import Navbar from '../components/UI/Navbar/Navbar';
import '../App.css'

const BlogPostById = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    async function fetchPostById(id) {
        const response = await JsonService.getPostById(id)
        setPost(response.data)
        console.log(response.data)
    }

    async function fetctComment(id) {
        const response = await JsonService.getCommentById(id)
        setComments(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchPostById(params.id)
        fetctComment(params.id)
    }, [])

    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div className='BlogPostID'>
                <div>
                <h1 className='BlogPostTitle'>Post with id Nr:{params.id}</h1>
                    <h3>{post.id} {post.title}</h3>
                    <p>{post.body}</p>
                </div>



                    <div>
                    {comments.map(comm => 
                        <div className='postIdComm' key={comm.id}>
                            <h4>{comm.email}</h4>
                            <p>{comm.body}</p>
                        </div>)}
                    </div>
            </div>
        </div>
    );
};

export default BlogPostById;