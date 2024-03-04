import { getAllBlogs } from '$lib/utils.server';

export const load = async () => {
  const blogs = await getAllBlogs();
  
  return {
    blogs
  };
};