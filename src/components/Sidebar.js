import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if (!isMenuOpen) return null;
  return (
    
    <div className='p-5 shadow-lg w-48 pt-5'>
    <ul>
      <li>Home</li>
      <li>Shorts</li>
      <li>Subscription</li>
    </ul>
    <ul className='border-t-2 pt-5'>
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