import { processBlog } from '$lib/utils.server';

export const load = async ({params}) => {
  const slug = params['slug'];
  const blog = await processBlog(slug);

  return {
    blog
  };
};