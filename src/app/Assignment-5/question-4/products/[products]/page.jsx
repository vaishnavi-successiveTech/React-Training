import React from "react";
import fetchProducts from "../../actions";
import Pagination from "./Pagination";

const Page = async ({ params }) => {
  const param = await params;
  const currentPage = param.products;
  const itemsPerPage = 10;
  const skip = (currentPage - 1) * itemsPerPage;
  const { posts, total } = await fetchProducts(skip, itemsPerPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="">
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Page;
