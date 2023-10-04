import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/config'

const Videocont = () => {
useEffect(()=>{
  getVideo()
},[])

const getVideo = async()=>{
  const data = await fetch(YOUTUBE_API);
  const json = await data.json();
  console.log(json);
}

  return (
    <div>Videocont</div>
  )
}

export default Videocont