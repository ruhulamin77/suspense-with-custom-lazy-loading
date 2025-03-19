import fetchPosts from "../api/api";

const resource = fetchPosts("https://jsonplaceholder.typicode.com/posts");
const Posts = () => {
  const posts = resource.read();

  return (
    <div className="p-5 bg-slate-900 text-gray-200">
      <div className="text-lg font-semibold">Total Posts: {posts.length}</div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
