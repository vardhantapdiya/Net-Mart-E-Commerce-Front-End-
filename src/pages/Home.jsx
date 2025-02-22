import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import Product from "../components/Product"


const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);
    async function fetchProductData(){
      setLoading(true);
      try{
        const result = await fetch(API_URL);
        const data = await result.json();
        setPosts(data);
      }
      catch(err){
        console.log("Error in fetching");
        setPosts([]);
      }
      setLoading(false);
    }

    useEffect(()=>{
      fetchProductData();
    },[])

  return (
    <div>
      {
        loading ? <Spinner/> : posts.length > 0 ? (
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl p-2 mx-auto
          space-y-10 space-x-5 min-h-[80vh]'>
            {
              posts.map((post)=>(
                <Product key = {post.id} post = {post}/>
              ))
            }
          </div>
        ) : <div className='flex justify-center items-center h-screen m-auto -mt-12 text-red-700 font-semibold text-2xl'>
          <p>Oops No Data Found!!!</p>
        </div>
      }
    </div>
  )
}

export default Home
