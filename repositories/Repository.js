import TagRepository from '@/repositories/TagRepository';

export default ($axios) => ({
  Tag: TagRepository($axios),
})