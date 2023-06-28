import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostHeader from '../components/Pages/Post/PostHeader'
import { api } from '../lib/axios';
import { IPost } from './Blog';
import PostContent from '../components/Pages/Post/PostContent';
import { SpinnerGap } from 'phosphor-react';

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

const Post = () => {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData}/>
      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
        <SpinnerGap size={20} className="text-blue animate-spin" />
      </div>
      ) : (
        <PostContent content={postData.body}/>
      )}
    </>
  )
}

export default Post
