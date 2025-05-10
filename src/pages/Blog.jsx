import React from 'react'
import BlogItem from '../components/home/BlogItem'

const Blog = () => {
  return (
    <div className="container">
      <div className="pt-25 pb-33">
        <h2 className="heading text-center">Blog</h2>
        <p className="secondary w-135 text-center m-auto pt-6 pb-17">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-4 gap-6">
          <div className="shadow-xl">
            <img className="w-full" src="/blog1.png" alt="" />
            <div className="bg-white p-6">
              <small className="font-workSans font-normal text-sm text-secondary">
                <span>22 Oct, 2020</span>/<span>246 Comments</span>
              </small>
              <h2 className="font-workSans font-medium text-lg text-praimary">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </h2>
            </div>
          </div>
          <div className="shadow-xl">
            <img className="w-full" src="/blog2.png" alt="" />
            <div className="bg-white p-6">
              <small className="font-workSans font-normal text-sm text-secondary">
                <span>22 Oct, 2020</span>/<span>246 Comments</span>
              </small>
              <h2 className="font-workSans font-medium text-lg text-praimary">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </h2>
            </div>
          </div>
          <div className="shadow-xl">
            <img className="w-full" src="/blog3.png" alt="" />
            <div className="bg-white p-6">
              <small className="font-workSans font-normal text-sm text-secondary">
                <span>22 Oct, 2020</span>/<span>246 Comments</span>
              </small>
              <h2 className="font-workSans font-medium text-lg text-praimary">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </h2>
            </div>
          </div>
          <div className="shadow-xl">
            <img className="w-full" src="/blog4.png" alt="" />
            <div className="bg-white p-6">
              <small className="font-workSans font-normal text-sm text-secondary">
                <span>22 Oct, 2020</span>/<span>246 Comments</span>
              </small>
              <h2 className="font-workSans font-medium text-lg text-praimary">
                Lorem ipsum dolor sit consea. Nulla purus arcu
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog
