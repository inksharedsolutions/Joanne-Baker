import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        Larry Banta was born and raised in Ohio, on a farm near Cincinnati. Upon graduating high school in Lebanon, Ohio, he left for college in Lincoln, Nebraska, where he obtained a BS in microbiology. From there, he attended University of Nebraska Medical College, where he was awarded his MD degree. <br/>
                        </p>

                        <h1 className="author-name-tag" >
                            <span></span>
                            <span>Larry E. Banta, MD</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                        <button className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;