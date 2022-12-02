import React, { useState } from "react";
import Constants from "./utilities/Constants";
import PostCreateForm from "./components/PostCreateForm";
import PostUpdateForm from "./components/PostUpdateForm";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [showingCreateNewPostForm, setShowingCreateNewPostForm] =
    useState(false);
  const [postCurrentlyBeingUpdated, setPostCurrentlyBeingUpdated] =
    useState(null);

  function getPosts() { // pass forumId for each forum (API_URL_GET_ALL_POSTS_BY_FORUMID)
    const url = Constants.API_URL_GET_ALL_POSTS; // changed from this: "https://localhost:7099/get-all-posts";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((postsFromServer) => {
        console.log(postsFromServer);
        setPosts(postsFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  function deletePost(postId) {
    const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postId}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        setPosts(responseFromServer);
        console.log(responseFromServer);
        onPostDeleted(postId);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {showingCreateNewPostForm === false &&
            postCurrentlyBeingUpdated === null &&(
              <div>
                <h1>Solera Forum - pairs project</h1>

                <div className="mt-5">
                  <button
                    onClick={getPosts} // send the Id for Madrid Forum
                    className="btn btn-dark btn-lg w-100 mt-2"
                  >
                    Solera Madrid Forum (Get posts from Madrid)
                  </button>
                  <button
                    onClick={getPosts} // send the Id for Seville Forum
                    className="btn btn-dark btn-lg w-100 mt-2"
                  >
                    Solera Seville Forum (Get posts from Seville)
                  </button>
                  <button
                    onClick={getPosts} // send the Id for Madrid Forum
                    className="btn btn-dark btn-lg w-100 mt-2"
                  >
                    Solera Remote Forum (Get posts from Online group people)
                  </button>
                  <button
                    onClick={() => setShowingCreateNewPostForm(true)}
                    className="btn btn-secondary btn-lg w-100 mt-4"
                  >
                    Create New Post
                  </button>
                </div>
              </div>
            )}

          {posts.length > 0 &&
            showingCreateNewPostForm === false &&
            postCurrentlyBeingUpdated === null &&
            renderPostsTable()}

          {postCurrentlyBeingUpdated !== null && (
            <PostUpdateForm
              post={postCurrentlyBeingUpdated}
              onPostUpdated={onPostUpdated}
            />
          )}

          {showingCreateNewPostForm && (
            <PostCreateForm onPostCreated={onPostCreated} />
          )}
        </div>
      </div>
    </div>
  );

  function renderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">Post no.</th>
              <th scope="col">Title</th>
              <th scope="col">Post content</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.postId}>
                <th scope="row">{post.postId}</th>
                <td>{post.title}</td>
                <td>
                  CATEGORY: {post.category}
                  <br></br><br></br>
                  {post.image}
                  <br></br><br></br>
                  {post.body}
                </td>
                <td>
                  <button
                    onClick={() => setPostCurrentlyBeingUpdated(post)}
                    className="btn btn-dark btn-lg mx-3 my-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete the post "${post.title}"?`
                        )
                      )
                        deletePost(post.postId);
                    }}
                    className="btn btn-secondary btn-lg mx-2 my-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={() => setPosts([])}
          className="btn btn-dark btn-lg w-100"
        >
          Hide the posts (Empty React Posts array)
        </button>
      </div>
    );
  }

  // onPostCreated - based on Post Create form
  function onPostCreated(createdPost) {
    setShowingCreateNewPostForm(false);

    if (createdPost === null) {
      return;
    }

    alert(
      `Post successfully created. Post with the title: "${createdPost.title}" will show up in the table below.`
    );

    getPosts();
  }

  // onPostUpdated - based on Post Edit/Update form
  function onPostUpdated(updatedPost) {
    setPostCurrentlyBeingUpdated(null);

    if (updatedPost === null) {
      return;
    }

    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === updatedPost.postId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy[index] = updatedPost;
    }

    setPosts(postsCopy);

    alert(
      `The post has been edited successfully. You can see the changes on "${updatedPost.title}" in the table below.`
    );
  }

  // onPostDeleted
  function onPostDeleted(deletedPostPostId) {
    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === deletedPostPostId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy.splice(index, 1);
    }

    setPosts(postsCopy);

    alert(`The post has been deleted successfully.`);
  }

}

export default App;
