import React, {useState, useEffect} from 'react'

export default function Async() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            data => setPosts(data),
            error => console.log("here is error",error)
            );
    }, []);
  return (
    <div>
        <h2>Async Component Content</h2>
        <ul>
            {posts?.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}
