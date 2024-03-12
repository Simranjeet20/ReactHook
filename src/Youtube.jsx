import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Youtube() {
    const[videos,setvideo]=useState([])

    //Using useeffect to call api
    useEffect(()=>{
        const fetchdata=async()=>{

            try{
                const response =await axios.get(
                    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD7DSedOYMvNwAWdBSIGqRx0ombXao5w1M&part=snippet&type=video&q=music'
                );

                setvideo(response.data.items);
            }catch (error){
                console.error("Error Error Error",error)
            }

        };
        fetchdata()
    },[])
  return (
<>
<ul>
    {
        videos.map((value)=>{
            return <li>{value.snippet.title}
            <img src={value.snippet.thumbnails.default.url} alt={value.snippet.title} />
            </li>
        })
    }
</ul>
</>
  )
}
