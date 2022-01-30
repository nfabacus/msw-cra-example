import { useState, useEffect } from 'react';
import './App.css';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [ posts, setPosts ] = useState<Post[]>([]);
  const [ user, setUser ] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
      .catch(err => {
        console.log(err)
      })
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      <h1>User And Posts</h1>
      <div>
        <h2>User</h2>
        <p>{ user?.title }</p>
      </div>
      <div>
        <h2>Posts</h2>
        {
          posts.map(({ id, title }) => (
            <li key={id} style={{ listStyle: 'none' }}>
              <p>
                { title }
              </p>
            </li>
          ))
        }
      </div>
    </div>
  );
}

export default App;
