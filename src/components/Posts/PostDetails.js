import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import DateFormatter from "../../utils/DateFormatter";
import LoadingComponent from "../../utils/LoadingComponent";

const PostDetails = () => {
  const { id } = useParams();

  const post = {
    createdAt: new Date().now,
  };

  const postDetails = {
    user: {
      _id: "3igi5grifm959jt",
      firstName: "Marcel",
      lastName: "Paulo",
    },
  };
  const loading = false;
  const appErr = null;
  const serverErr = null;
  // const isDeleted = false;

  useEffect(() => {}, []);

 

  let fromStorage;
  let detailObj;
  if (JSON.parse(localStorage.getItem("posts")) !== null) {
    fromStorage = JSON.parse(localStorage.getItem("posts"));
    detailObj = fromStorage.initialItem.find((item, index) => item._id === id);
    console.log(detailObj);
    console.log(JSON.parse(localStorage.getItem("posts")));
  }

  return (
    <>
      {loading ? (
        <div className="h-screen">
          <LoadingComponent />
        </div>
      ) : appErr || serverErr ? (
        <h1 className="h-screen text-red-400 text-xl">
          {serverErr} {appErr}
        </h1>
      ) : (
        <section className="py-20 2xl:py-40 bg-gray-800 overflow-hidden">
          <div className="container px-4 mx-auto">
            {/* Post Image */}
            {JSON.parse(localStorage.getItem("posts")) !== null && (
              <div>
                <img
                  className="mb-24 w-full h-96  object-cover"
                  src={detailObj.image[0]}
                  alt=""
                />
              </div>
            )}
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mt-7 mb-14 text-6xl 2xl:text-7xl text-white font-bold font-heading">
                {detailObj.title}
              </h2>

              {/* User */}
              <div className="inline-flex pt-14 mb-14 items-center border-t border-gray-500">
                <div className="text-left">
                  <p className="text-gray-500">
                    {<DateFormatter date={post?.createdAt} />}
                  </p>
                </div>
              </div>
              {/* Post description */}
              <div className="max-w-xl mx-auto">
                <p className="mb-6 text-left  text-xl text-gray-200">
                  {postDetails?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center  items-center"></div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
