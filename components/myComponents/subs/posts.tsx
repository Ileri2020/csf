"use client"
import React from 'react'
import Post from './post'
import posts from '@/data/posts'

const Posts = () => {
  return (
    <div className='flex flex-col w-fit mx-auto'>
        {posts.post.map((post, index)=>{
        return(
            <Post key={index} img={post.img} time={post.time} owner={post.owner} event={post.event} post={post.post} />
        )
        })}
      </div>
  )
}

export default Posts
