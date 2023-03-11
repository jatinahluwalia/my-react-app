import Navbar from './Navbar'
import Home from './Home'
import BlogList from './BlogList'
import {useState} from 'react'
import './style.css'
function App() {
  const [blogs, setBlogs] = useState([
    {title: "name", content: "anything", id: 1},
    {title: "name 2", content: "anything", id: 2},
    {title: "name 3", content: "anything", id: 3},
  ])
  return (
    <>
      <Navbar></Navbar>
      <section className='blogs'>
        <Home></Home>
        <BlogList blogs={blogs}></BlogList>
      </section>
      
    </>
  );
}

export default App;
