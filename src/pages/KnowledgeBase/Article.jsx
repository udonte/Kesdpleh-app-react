import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import placeholder from "../../assets/adeola.png";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import laptopTable from "../../assets/knowledgeBase/laptop table.png";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import Button from "../../components/common/Button/Button";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const relatedAnnouncements = [
  {
    title: "Maximising Collaboration",
    snippet: "In the era of remote work and collaborative initiatives...",
    timeAgo: "1 week ago",
    author: "Amaka Fadipe",
  },
  {
    title: "Efficient Project Management",
    snippet: "Learn the top strategies for managing projects...",
    timeAgo: "2 weeks ago",
    author: "John Doe",
  },
  {
    title: "Boosting Productivity",
    snippet: "Discover tools and techniques to enhance your productivity...",
    timeAgo: "3 weeks ago",
    author: "Jane Smith",
  },
];

const popularAnnouncements = [
  {
    title: "Embracing Remote Work",
    snippet: "How to adapt and thrive in a remote work environment...",
    timeAgo: "1 month ago",
    author: "Mike Johnson",
  },
  {
    title: "Team Building Activities",
    snippet: "Explore fun and engaging team-building activities...",
    timeAgo: "2 months ago",
    author: "Sarah Lee",
  },
  {
    title: "Effective Communication",
    snippet: "Tips for improving communication within your team...",
    timeAgo: "3 months ago",
    author: "David Brown",
  },
];

const mockComments = [
  {
    id: 1,
    author: "Steph Ozumba",
    timeAgo: "2 minutes ago",
    content:
      'Digital workflows, the key to seamless efficiency lies in harnessing the right software solutions. "Streamlining Efficiency" is your compass through the realm of cutting-edge software, offering insights into optimizing workflow integration. From intuitive project management tools to collaborative platforms that bridge communication gaps.',
    replies: [
      {
        id: 1,
        author: "Mark Ferry",
        timeAgo: "2 minutes ago",
        content:
          "Realm of cutting-edge software, offering insights into optimizing workflow integration. From intuitive project management tools to collaborative platforms that bridge communication gaps.",
      },
    ],
  },
  {
    id: 2,
    author: "Jane Doe",
    timeAgo: "1 hour ago",
    content:
      "This is another comment to showcase the structure of a comment with potential replies.",
    replies: [],
  },
];

const Article = () => {
  const navigate = useNavigate();
  const [showReplies, setShowReplies] = useState({});
  const [showReplyCommentBox, setShowReplyCommentBox] = useState({});
  const [comments, setComments] = useState(mockComments);

  const toggleReplies = (commentId) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const toggleReplyCommentBox = (commentId) => {
    setShowReplyCommentBox((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const renderAnnouncement = (announcement) => (
    <div className="flex flex-col gap-4 shadow-xl p-4 rounded-lg  dark:bg-deskit-black-150 dark:text-white">
      <p className="font-bold text-sm text-deskit-blue-300/70 dark:text-white">
        {announcement.title}
      </p>
      <p className="border-b-2 border-gray-200 pb-4">{announcement.snippet}</p>
      <div className="flex items-center justify-between mt-1  dark:text-deskit-black-50">
        <p>{announcement.timeAgo}</p>
        <div className="flex items-center gap-2 ">
          <div className="rounded-full flex items-center justify-center h-[20px] w-[20px] overflow-hidden">
            <img
              src={placeholder}
              alt={announcement.author}
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          <p className="font-bold">{announcement.author}</p>
        </div>
      </div>
    </div>
  );

  const renderComments = (comment) => (
    <div key={comment.id} className="flex flex-col gap-3 ">
      <div className="flex flex-col gap-4 bg-[#F3F5F9] px-8 py-6 rounded-lg dark:bg-deskit-black-100 dark:text-white">
        {/* commenter details */}
        <div className="flex items-center gap-2 ">
          <div className="rounded-full flex items-center justify-center h-[25px] w-[25px] overflow-hidden">
            <img
              src={placeholder}
              alt={comment.author}
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm dark:text-deskit-black-50">
              {comment.author}
            </p>
            <p className="text-gray-500">{comment.timeAgo}</p>
          </div>
        </div>
        {/* actual comment */}
        <div className="text-sm text-gray-600 dark:text-white ">
          {comment.content}
        </div>
      </div>

      {/* replies */}
      <div className="flex items-start gap-3 w-full dark:text-deskit-black-50 ">
        <p
          className="font-semibold cursor-pointer "
          onClick={() => toggleReplyCommentBox(comment.id)}
        >
          Reply
        </p>
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <p
            className="text-purple-800 font-semibold flex items-center gap-1 cursor-pointer  dark:text-deskit-black-50"
            onClick={() => toggleReplies(comment.id)}
          >
            {!showReplies[comment.id] ? (
              <>
                View More{" "}
                <span className="bg-purple-200 text-purple-800 text-[10px] rounded-full p-1 flex items-center justify-center h-4 w-4 font-bold">
                  {comment.replies.length}
                </span>{" "}
              </>
            ) : (
              "Hide Replies"
            )}
          </p>
          {showReplyCommentBox[comment.id] && (
            <div className="flex items-start gap-2 w-full">
              <div className="w-full">
                <CustomInput
                  size={"small"}
                  inputClassName={"w-full px-2 py-1"}
                  placeholder={"Reply the comment..."}
                />
              </div>
              <Button
                className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                type="submit"
                size="sm"
              >
                Reply
              </Button>
            </div>
          )}
          {showReplies[comment.id] && (
            <div className="flex flex-col justify-start gap-2 w-full">
              {comment.replies.map((reply) => (
                <div
                  key={reply.id}
                  className=" flex flex-col gap-2 bg-[#F3F5F9] px-4 py-2 rounded-md w-full dark:bg-deskit-black-100"
                >
                  {/* replier details */}
                  <div className="flex items-center gap-2 border-b-[1px] border-gray-200 pb-1 w-fit">
                    <p className="">{reply.author}</p>
                    <FaCircle className="text-gray-400" size={4} />
                    <p className="text-gray-500">{reply.timeAgo}</p>
                  </div>
                  {/* actual reply */}
                  <div className=" text-gray-600  dark:text-white">
                    {reply.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
    { name: "Category", url: "/dashboard/knowledge-base/category/:id" },
    {
      name: "IT Support",
      url: "",
    },
  ];
  return (
    <div className="w-full text-xs my-8">
      {/* HEADER */}
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500 dark:text-white">
        <div>
          <Breadcrumb paths={paths} pageTitle="Knowledge Base" />
        </div>

        <div
          className="cursor-pointer text-xl hover:text-2xl"
          onClick={() => navigate("/dashboard/knowledge-base/category/:id")}
        >
          <IoReturnUpBackSharp />
        </div>
      </div>
      <div className="w-full flex items-start gap-6">
        <div className="w-3/4 bg-white min-h-[500px] px-8 py-4 rounded-lg shadow-xl pb-8 dark:bg-deskit-black-300 dark:text-white">
          {/* HEAD */}
          <div className="border-b-[1px] border-gray-200 py-2 space-y-4">
            <div className="h-[180px] overflow-hidden rounded-md relative">
              <img
                src={laptopTable}
                alt={"laptop table"}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className=" text-xl font-bold">Public Holiday</p>
            {/* author details */}
            <div className="flex items-start gap-4 dark:text-deskit-black-50">
              <div className="rounded-full flex items-center justify-center h-[30px] w-[30px] overflow-hidden">
                <img
                  src={placeholder}
                  alt={"adeola"}
                  className="rounded-full h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm">
                  <p className="italic">Written by : </p>
                  <p className="font-semibold">Amaka Fadipe</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p>Last Updated : </p>
                  <div className="flex items-center gap-4 ">
                    <p className="font-semibold">5 Months ago</p>
                    <FaCircle className="text-gray-400" size={5} />
                    <p>5 mins read</p>
                    <FaCircle className="text-gray-400" size={5} />
                    <p>20 viewed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 text-base">
            <p>
              In the ever-evolving landscape of digital workflows, the key to
              seamless efficiency lies in harnessing the right software
              solutions. "Streamlining Efficiency" is your compass through the
              realm of cutting-edge software, offering insights into optimizing
              workflow integration. From intuitive project management tools to
              collaborative platforms that bridge communication gaps, this
              article unveils the transformative software solutions that empower
              organizations to work smarter, not harder. Discover how embracing
              the latest in software technology can revolutionize your workflow,
              enhance collaboration, and pave the way for unparalleled
              efficiency in the digital age. Embrace the future of work with the
              right software solutions at your fingertips! In the ever-evolving
              landscape of digital workflows, the key to seamless efficiency
              lies in harnessing the right software solutions. "Streamlining
              Efficiency" is your compass through the realm of cutting-edge
              software, offering insights into optimizing workflow integration.
              From intuitive project management tools to collaborative platforms
              that bridge communication gaps, this article unveils the
              transformative software solutions that empower organizations to
              work smarter, not harder. Discover how embracing the latest in
              software technology can revolutionize your workflow, enhance
              collaboration, and pave the way for unparalleled efficiency in the
              digital age. Embrace the future of work with the right software
              solutions at your fingertips! In the ever-evolving landscape of
              digital workflows, the key to seamless efficiency lies in
              harnessing the right software solutions. "Streamlining Efficiency"
              is your compass through the realm of cutting-edge software,
              offering insights into optimizing workflow integration. From
              intuitive project management tools to collaborative platforms that
              bridge communication gaps.
            </p>
          </div>

          {/* ADD COMMENT */}
          <div className="mt-8">
            <p className="mb-4 font-bold">Add Comment</p>
            <CustomInput
              placeholder={"Enter your comment here.."}
              inputClassName={
                "h-[150px] resize-none text-sm placeholder:font-medium"
              }
              type={"textarea"}
            />
            <div className="flex w-full items-center justify-end mt-4">
              <Button
                className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* COMMENTS */}
          <div className="mt-8">
            {/* header */}
            <div className="border-b-[1px] border-gray-200">
              <p className="border-b-[1px] border-deskit-blue-600 w-fit py-2 px-2 flex items-center gap-1 font-bold text-sm">
                Comments{"  "}
                <span className="bg-red-600 rounded-full p-1 text-white flex items-center justify-center h-6 w-6 font-medium">
                  {comments.length}
                </span>{" "}
              </p>
            </div>

            {/* each comment */}
            <div className="mt-8 flex flex-col gap-4">
              {comments.map(renderComments)}
            </div>
          </div>
        </div>

        {/* ASIDE ARTICLES */}
        <div className="w-1/4 min-h-[800px] flex flex-col gap-8">
          {/* Related Announcements */}
          <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-lg shadow-xl  dark:bg-deskit-black-300">
            <p className="font-bold mb-4 text-base dark:text-white">
              Related Announcements
            </p>
            <div className="flex flex-col justify-start gap-4 ">
              {relatedAnnouncements.map((announcement, index) => (
                <React.Fragment key={index}>
                  {renderAnnouncement(announcement)}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Popular Announcements */}
          <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-lg shadow-xl  dark:bg-deskit-black-300">
            <p className="font-bold mb-4 text-base dark:text-white">
              Popular Announcements
            </p>
            <div className="flex flex-col justify-start gap-4">
              {popularAnnouncements.map((announcement, index) => (
                <React.Fragment key={index}>
                  {renderAnnouncement(announcement)}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
