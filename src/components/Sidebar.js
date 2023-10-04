import React from 'react'

const Sidebar = () => {
  return (
    
    <div className='p-5 shadow-lg w-48'>
    <ul>
      <li>Home</li>
      <li>Shorts</li>
      <li>Subscription</li>
    </ul>
    <ul className='border-t-2'>
      <li>Library</li>
      <li>History</li>
      <li>Your Video</li>
      <li>Watch Latter</li>
      <li>Liked videos</li>
    </ul>
  <h1 className='font-bold row border-t-2 pt-5'>Explore</h1>
  <ul>
  <li>Trending</li>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>News</li>
  </ul>
  <ul className='border-t-2 pt-4'>
    <li>Setting</li>
    <li>Report History</li>
    <li>Help</li>
    <li>Send Feedback</li>
  </ul>
    </div>
  )
}

export default Sidebar