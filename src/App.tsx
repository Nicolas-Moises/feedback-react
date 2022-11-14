import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: String , name: String , role: String }
//publisheAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Nicolas-Moises.png",
      name: "Nicolas Moises",
      role: "Front-end developer",
    },
    publishedAt: new Date("2022-11-13 15:26:49"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/peemedeiros.png",
      name: "Pedro Medeiros",
      role: "Back-end developer",
    },
    publishedAt: new Date("2022-11-10 15:26:49"),
    content: [
      { type: "paragraph", content: "Oba pessoal 👋" },
      {
        type: "paragraph",
        content: "Fiz esse deploy ontem pra empresa",
      },
      {
        type: "paragraph",
        content: "foi um upgrade em Laravel e espero que curtam",
      },
      { type: "link", content: "👉 peemedeiros/github" },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
