import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(response=>{
        setLoading(false),
        setPost(response.data)
        setError('')
    }).catch(error=>{
        setLoading(false);
        setPost({})
        setError(error.message)
    })
  },[])
  return <div>

    {loading ? <h1>Loading...</h1>: post.title}
    {error ? <h1>{error}</h1>:null}
  </div>;
}

export default DataFetchingOne;
