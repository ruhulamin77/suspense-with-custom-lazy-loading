import wrapPromise from "./wrapPromise";

function fetchPosts(url) {
  const response = fetch(url).then((res) => res.json());
  return wrapPromise(response);
}

export default fetchPosts;
