import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import PostFeed from '../components/PostFeed';
import Loader from '../components/Loader';	// Loading wheel component
import { firestore, fromMillis, postToJSON } from '../lib/firebase';
import { useState } from 'react';
import toast from 'react-hot-toast';	// Toast component -- can be any page.


const LIMIT = 1;
export async function getServerSideProps({ context }) {
  const postsQuery = firestore
    .collection('posts')
    .where('published', '==', true)
    .orderBy('created', 'desc')
    .limit(LIMIT);
  const posts = (await postsQuery.get()).docs.map(postToJSON);
  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props){

  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () =>{
    setLoading(true);
    const last = posts[posts.length -1];
    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const query = firestore
      .collection('posts')
      .where('published', '==', true)
      .orderBy('created', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);
    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <div>
    <main>
      <PostFeed posts={posts} />
      {!loading && !postsEnd && <button onClick={() => setLoading(true)}>Load more</button>}
      <Loader show={loading} />
      {postsEnd && "No more posts to load"}
    </main>
      
      <button onClick={() => toast.success('Use this later')}>
      Reminder button
      </button>
      {/* <Loader show />  */}
    </div> 
  );
}





  




// prefetch = {true} //Link prefetching is a way to prefetch the page before it is loaded.
  {/*export default function Home() {
  //   return (
  //     <div>
  //       <Link prefetch={true} href={{ pathname: '/[username]',
  //                   query: { username: 'Luke' },
  //                   }}><a>Luke's profile</a>
  //       </Link>
  //     </div>
  //   );
  // }
  */}