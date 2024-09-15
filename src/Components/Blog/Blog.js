import React from 'react'
import './Blog.css'
import post_thumbnail from '../Assets/post-thumbnail-01.jpg'
const Blog = () => {
    return (
        <div className="blog">
            <h2>FROM MY BLOG</h2>
            <p>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non</p>
            <p>proident, sunt in culim id est.</p>
            <div className="blog-container">
                <div className="blog-image">
                    <img src={post_thumbnail} alt=''/>
                    <div className="blog-image-text">
                        <h3>Web Design</h3>
                        <p>
                            Javascript algorythm and <br /> data structure for beginners
                        </p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="card-text">
                        <div className="text-box">
                            <h3>Web Design</h3>
                            <p>Design a wesite using Figma easily</p>
                        </div>
                    </div>
                    <div className="card-text">
                        <div className="text-box">
                            <h3>Web Design</h3>
                            <p>Break on through to the other side post thumnail</p>
                        </div>
                    </div>
                    <div className="card-text">
                        <div className="text-box">
                            <h3>Web Design</h3>
                            <p>Imagine there is no heaven post thumnail</p>
                        </div>
                    </div>
                    <div className="card-text">
                        <div className="text-box">
                            <h3>Web Design</h3>
                            <p>When the musics over turn off the light post thumnail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog
