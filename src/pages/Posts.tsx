import { useEffect, useState } from 'react';
import BlogCard from '../components/mt/BlogCard';
import HorizontalCard from '../components/mt/HorizonBlogCard';
import CircularPagination from '../components/mt/Pagination';
import { IBlogCard } from '../components/mt/types';

const Posts = (): JSX.Element => {
  const [posts, setPosts] = useState<IBlogCard[]>([]);

  useEffect(() => {
    setPosts(
      new Array(30).fill({
        title: 'UI/UX 개선 방안',
        subTitle: 'UI/UX 개선 방안',
        content: 'UI/UX를 어떻게 개선할지 이야기 해보기',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        alt: 'card-image',
        createdAt: '2023/12/8',
      }),
    );
  }, []);

  return (
    <div className="flex flex-col gap-4 align-middle">
      <h1 className="text-3xl font-bold mt-2">Post</h1>
      <div>
        {/* mobile */}
        <div
          className="grid grid-flow-row gap-5
      md:hidden
      sm:grid-cols-1 
      md:grid-cols-2
      lg:grid-cols-3 
      xl:grid-cols-4
      "
        >
          {posts.map((item: IBlogCard) => {
            return <HorizontalCard title={item.title} content={item.content} src={item.src} alt={item.alt} createdAt={item.createdAt} />;
          })}
        </div>

        {/* desktop */}
        <div
          className="md:grid grid-flow-row gap-5
        hidden
        md:visible
        sm:grid-cols-1 
        md:grid-cols-2
        lg:grid-cols-3 
        xl:grid-cols-4
        "
        >
          {posts.map((item: IBlogCard) => {
            return <BlogCard title={item.title} content={item.content} src={item.src} alt={item.alt} createdAt={item.createdAt} />;
          })}
        </div>
      </div>
      <CircularPagination />
    </div>
  );
};

export default Posts;
