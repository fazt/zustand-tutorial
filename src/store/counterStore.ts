import create from "zustand";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  getPosts: () => Promise<void>;
  cleanStore: () => void;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  title: "Some title",
  count: 10,
  posts: [],
  increment: (value: number) =>
    set((state) => ({ ...state, count: state.count + value })),
  getPosts: async () => {
    const posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    set((state) => ({ ...state, posts }));
  },
  cleanStore: () => set({}, true),
  multiply: (value: number) => {
    // const count = get().count
    const { count } = get();
    set({ count: count * value });
  },
}));
