import React, { useEffect, useMemo, useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import Modal from '../components/UI/Modal/Modal'
import PostForm from '../components/BlogPosts/PostForm';
import JsonService from '../components/API/JsonService'
import PostList from '../components/BlogPosts/PostList';
import Navbar from '../components/UI/Navbar/Navbar'
import { getPageCount, getPagesArray } from '../utilities/pages';
import Pagination from '../components/UI/Pagination/Pagination';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const memoizedPages = useMemo(() => getPagesArray(totalPages),[totalPages]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function fetchPosts(limit, page) {
        const response = await JsonService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    }

    useEffect(() => {
        fetchPosts(limit, page)
    },[limit, page])

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }
    

    return (
        <div>
            <Navbar/>
            <MyButton onClick={() => setModal(true)}>Create post</MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            {/* <MyButton onClick={fetchPosts}>Get posts</MyButton> */}
            <PostList remove={removePost} title='Blog posts' posts={posts} />
            <Pagination changePage={changePage} memo={memoizedPages} page={page} />
        </div>
    );
};

export default BlogPosts;