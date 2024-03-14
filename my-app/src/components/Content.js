import React, { Component } from "react";
import css from "./css/Content.module.css";
import posts from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPosts: posts.savedPosts,
      isLoaded: false,
    };
  }

  getData() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      });
    }, 2000);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { savedPosts } = this.state;

    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>

        <div className={css.SearchResults}>
          {/* Part 1: Creating the map function */}

          {/* {savedPosts.map((post) => {
            return (
              <div className={css.SearchItem} key={post.title}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="random" />
                <p>{post.description}</p>
              </div>
            );
          })} */}

          {/* Part 2: Creating a child component */}
          {!this.state.isLoaded && <Loader />}
          {this.state.isLoaded && <PostItem savedPosts={savedPosts} />}
        </div>
      </div>
    );
  }
}

export default Content;
