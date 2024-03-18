import React, { Component } from "react";
import css from "./css/Content.module.css";
import posts from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      savedPosts: posts.savedPosts,
      isLoaded: false,
      posts: [],
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
    this.setState({
      posts: posts.savedPosts,
    });
  }

  handleSearchChange = (event) => {
    const value = event.target.value;
    const foundPosts = posts.savedPosts.filter((post) => post.name.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      searchText: value,
      savedPosts: foundPosts,
    });
  };

  render() {
    const { savedPosts } = this.state;

    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input
              type="text"
              id="searchInput"
              value={this.state.searchText}
              onChange={this.handleSearchChange}
              placeholder="By Author"
            />
          </form>
          <p>posts found: {this.state.savedPosts.length}</p>
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
