import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';

const endpoint = 'https://api.hashnode.com/';
const GET_USER_ARTICLES = `
{
  user(username: "DanneBrob") {
    publication {
      posts(page: 0) {
       slug
       title
       brief
       coverImage
       dateAdded
       _id
      }
    }
  }
}
`;

const Blogposts = () => {
  const [posts, setPosts] = useState();
  const { data, status, isLoading, error } = useQuery('user', () => {
    return request(endpoint, GET_USER_ARTICLES);
  });

  return (
    <div>
      {' '}
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Fetching data...</p>}
      {status === 'success' && (
        <div className="blog-container">
          <h2 class="heading my-words">My Words</h2>

          {data.user.publication.posts.map((post) => {
            return (
              <div className="blog-post blog-one" key={post._id}>
                <img src={post.coverImage} alt={post.title} />
                <p className="date">{post.dateAdded.slice(0, 10)}</p>
                <h3>{post.title}</h3>
                <p>{post.brief}</p>
                <div className="button read-more-button">
                  <a href={`https://dannebrob.hashnode.dev/${post.slug}`}>
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                    >
                      <path
                        d="M3.7901 25.5C2.62911 25.5 1.83143 25.1886 1.31948 24.6565C0.804279 24.1211 0.5 23.2811 0.5 22.0609V3.93902C0.5 2.72546 0.804006 1.88486 1.31987 1.34755C1.83234 0.813759 2.63029 0.5 3.7901 0.5H16.2099C17.3698 0.5 18.1677 0.813761 18.6802 1.34754C19.196 1.88486 19.5 2.72545 19.5 3.93902V22.0609C19.5 23.2811 19.1957 24.1211 18.6806 24.6565C18.1686 25.1886 17.3709 25.5 16.2099 25.5H3.7901ZM1.78572 4.08314V21.9168C1.78572 22.5526 1.94523 23.1293 2.34651 23.5468C2.75116 23.9678 3.32358 24.1462 3.97669 24.1462H16.0117C16.6647 24.1462 17.2387 23.9679 17.6459 23.5486C18.0506 23.1319 18.2144 22.5552 18.2144 21.9168V4.08314C18.2144 3.4448 18.0506 2.86803 17.6459 2.45131C17.2387 2.03205 16.6647 1.85381 16.0117 1.85381H3.97669C3.32359 1.85381 2.75117 2.03215 2.34651 2.45318C1.94523 2.8707 1.78572 3.44737 1.78572 4.08314ZM14.274 6.7896H5.73762C5.59098 6.7896 5.4796 6.68598 5.4796 6.52101C5.4796 6.38368 5.57537 6.27643 5.73762 6.27643H14.274C14.4195 6.27643 14.5204 6.3786 14.5204 6.52101C14.5204 6.69115 14.404 6.7896 14.274 6.7896ZM14.274 10.8968H5.73762C5.59101 10.8968 5.4796 10.7931 5.4796 10.6282C5.4796 10.4908 5.57538 10.3836 5.73762 10.3836H14.274C14.4195 10.3836 14.5204 10.4857 14.5204 10.6282C14.5204 10.7983 14.404 10.8968 14.274 10.8968ZM9.86586 15.0039H5.73762C5.57538 15.0039 5.4796 14.8967 5.4796 14.7593C5.4796 14.5841 5.60093 14.4787 5.73762 14.4787H9.86586C9.93129 14.4787 9.98403 14.5038 10.0245 14.5474C10.0667 14.5928 10.1006 14.6651 10.1006 14.7593C10.1006 14.9122 10.001 15.0039 9.86586 15.0039Z"
                        fill="#333333"
                        stroke="black"
                      />
                    </svg>
                    <p>Read article</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blogposts;
