import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
// import Posts from "./components/Posts";
const Posts = lazy(() => import("./components//Posts"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Posts />
    </Suspense>
  );
}

export default App;
