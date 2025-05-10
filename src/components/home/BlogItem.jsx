import React from 'react'

const BlogItem = () => {
  return (
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
  );
}

export default BlogItem
