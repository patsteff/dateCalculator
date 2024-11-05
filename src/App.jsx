import { useEffect, useState } from "react";
import UserDate from "./components/UserDate.jsx";
import Output from "./components/Output.jsx";
import { supabase } from "./client.js";


function App() {

  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({title: "", content: ""})
  const {title, content} = post

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select()
      setPosts(data)
      console.log("data:", data)
  }

  async function createPost() {
    await supabase
      .from('posts')
      .insert([
        {title, content}
      ])
      .single()
    setPost({title: "", content: ""})
    fetchPosts()     
  }

  const [userDateInput, setUserDateInput] = useState({
    lastPeriod: new Date().toISOString().slice(0, 10),
    duration: 28,
  });


  function handleChange(inputIdentifier, newValue) {
    setUserDateInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: inputIdentifier === "duration" ? parseInt(newValue, 10) : newValue,
      };
    });
  }


  return (
    <>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setPost({...post, title: e.target.value})}/>
      <input type="text" placeholder="Content" value={content} onChange={e => setPost({...post, content: e.target.value})}/>
      <button onClick={createPost}>Create Post</button>
    </div>
    <div id="user-input">
      {
        posts.map(post => (
          <div key="post.created_at">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.id}</p>
            <p>{post.created_at}</p>
          </div>
        ))
      }
    </div>
    <UserDate userDateInput={userDateInput} handleChange={handleChange}/>
    <Output userDateInput={userDateInput}/>
    </>
  )
}

export default App
