import { useEffect } from "react";
import shallow from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";

function App() {
  const { count, title, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );
  const { increment, getPosts, cleanStore, multiply } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>

      <div>
        <button
          onClick={() => {
            increment(10);
          }}
        >
          Increment by 10
        </button>

        <button onClick={() => multiply(2)}>multiply by 2</button>

        <button onClick={() => cleanStore()}>clean store</button>
      </div>

      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
