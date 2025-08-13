import React from "react";
import { Link } from "react-router";

export default function CardProduct({ thumbnail, title, id }) {
  return (
    <>
      {/*<!-- Component: Basic image card --> */}
      <Link
        to={`/products/${id}`}
        className="overflow-hidden rounded-2xl bg-white text-slate-500 shadow-sm shadow-slate-100"
      >
        {/*  <!--  Image --> */}
        <figure>
          <img
            src={thumbnail}
            alt="card image"
            className="aspect-video w-full object-contain h-[300px]"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          </header>
        </div>
      </Link>
      {/*<!-- End Basic image card --> */}
    </>
  );
}
