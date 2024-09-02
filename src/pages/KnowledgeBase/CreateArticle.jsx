import React, { useState, useRef } from "react";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { BsFileImageFill } from "react-icons/bs";
import Button from "../../components/common/Button/Button";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import CustomDropDown from "../../components/common/CustomDropdown/CustomDropdown";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import TiptapEditor from "../../components/common/TiptapEditor/TiptapEditor";
import AddTags from "../../components/knowledgeBase/AddTags/AddTags";

const CreateArticle = () => {
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();
  const [articleContent, setArticleContent] = useState("");
  const [tags, setTags] = useState(["React", "JavaScript"]);
  const [image, setImage] = useState(null);

  const [articleData, setArticleData] = useState({
    image: image,
    title: "",
    category: [],
    tags: tags,
    content: articleContent,
  });

  const departments = [
    {
      value: "itSupport",
      label: "IT Support",
    },
    {
      value: "facility",
      label: "Facility",
    },
    {
      value: "logistics",
      label: "Logistics",
    },
    {
      value: "procurement",
      label: "Procurement",
    },
    {
      value: "finance",
      label: "Finance",
    },
    {
      value: "humanResource",
      label: "Human Resource",
    },
    {
      value: "project",
      label: "Project",
    },
    {
      value: "others",
      label: "Others",
    },
  ];

  // image handlers
  const fileInputRef = useRef(null);

  // tag handlers
  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle dropdown selection
  const handleSelect = (name, value) => {
    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // submit article
  const submitArticle = async (event) => {
    event.preventDefault();
    const article = {
      ...articleData,
      content: articleContent,
      tags: tags,
      image: image,
    };
    console.log("Submitted Article: ", article);
  };
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
    { name: "Write Article", url: "" },
  ];
  return (
    <div>
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500 dark:text-white">
        <div>
          <Breadcrumb paths={paths} pageTitle="Article" />
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="bg-white p-8 rounded-lg dark:bg-deskit-black-300 dark:text-white">
          <div className="flex items-start justify-between">
            <p className="text-xl font-bold mb-12">Write an Article</p>
            <div
              className="cursor-pointer text-xl hover:text-2xl"
              onClick={() => navigate("/dashboard/knowledge-base")}
            >
              <IoReturnUpBackSharp />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {/* image container */}
            <div className="">
              <p className="font-bold mb-2 text-sm">
                Upload Article Header Photo
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-[290px] h-[170px] ">
                  {image ? (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-lg border border-gray-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#F3F5F9] rounded-lg dark:bg-deskit-black-100 dark:text-white">
                      <span
                        className="rounded-full p-8 bg-[#F3F5F9] flex items-center gap-2 cursor-pointer dark:bg-deskit-black-100 dark:text-white"
                        onClick={handleUploadClick}
                      >
                        <BsFileImageFill size={20} color="#A6ABC8" />
                        <p className="underline text-sm font-medium">
                          Click to Upload Image
                        </p>
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {image && (
                    <Button
                      className="bg-deskit-red-500/10 text-deskit-red-500"
                      onClick={handleRemoveImage}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* article details */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-bold mb-2 text-sm">Title</p>
                <CustomInput
                  name="title"
                  placeholder={"Article Title"}
                  handleInputChange={handleInputChange}
                />
                <div className="mt-8">
                  <AddTags
                    initialTags={tags}
                    placeholder="Enter a new tag.."
                    onAddTag={handleAddTag}
                    onRemoveTag={handleRemoveTag}
                  />
                </div>
              </div>

              <div>
                <p className="font-bold mb-2 text-sm">Department</p>
                <CustomDropDown
                  name={"category"}
                  onSelect={handleSelect}
                  label=""
                  placeHolder="Select Department"
                  options={departments}
                />
              </div>
            </div>

            {/* editor */}
            <div className="w-full">
              <p className="font-bold mb-2 text-sm">Body of Article</p>
              <div className="w-full">
                <TiptapEditor getContent={setArticleContent} />
              </div>
              <div className="flex w-full items-center justify-end mt-4">
                <Button
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  type="submit"
                  onClick={submitArticle}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
