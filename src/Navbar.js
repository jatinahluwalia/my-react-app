import React from 'react'


export default function Navbar() {
  return (
    <nav class="navbar">
      <h1>JITU BLOGS</h1>
      <div class="list">
        <div class="item-1"><a href="/blogs" class="link-1">BLOGS</a></div>
        <div class="item-2"><a href="/blogs/create" class="link-2">NEW BLOG</a></div>
        <div class="item-3"><a href="/contact" class="link-3">CONTACT US</a></div>
        <div class="item-4"><a href="/about" class="link-4">ABOUT US</a></div>
      </div>
      <div class="scroll-tracker"></div>
    </nav>

  )
}