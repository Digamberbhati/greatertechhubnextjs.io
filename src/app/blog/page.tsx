import React from 'react';
import { Card } from '@/pages/Card';
import data from '@/data/blog.json';

const blogPage = () => {
  return (
    <div className='py-32'>
      <h1 className='text-3xl text-[#F5EBEB] w-full text-center py-8 font-semibold'>Recent Blog Posts</h1>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap flex-col lg:flex-row'>
          {data.map((post,id) => (
            <div className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3' key={post.id}>
              <Card key={post.id}
                topic={post.topic}
                description={post.description}
                image={post.image}
                author={post.author}
                date={post.date}
                blogLink={post.blogLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default blogPage;
