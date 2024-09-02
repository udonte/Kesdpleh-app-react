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
import CustomCheckDropdown from "../../components/common/CustomCheckDropdown/CustomCheckDropdown";

const CreateAnnouncement = () => {
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();
  const [announcementContent, setAnnouncementContent] = useState("");
  const [tags, setTags] = useState(["React", "JavaScript"]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const [announcementData, setAnnouncementData] = useState({
    title: "",
    departments: selectedDepartments,
    tags: tags,
    content: announcementContent,
  });

  // tag handlers
  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle dropdown selection
  const handleSelect = (name, values) => {
    setSelectedDepartments(values);
    setAnnouncementData({
      ...announcementData,
      [name]: values,
    });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementData({
      ...announcementData,
      [name]: value,
    });
  };

  // submit announcement
  const submitAnnouncement = async (event) => {
    event.preventDefault();
    const announcement = {
      ...announcementData,
      content: announcementContent,
      tags: tags,
    };
    console.log("Submitted Announcement: ", announcement);
  };
  const paths = [
    { name: "Deskit", url: "" },
    { name: "Knowledge Base", url: "/dashboard/knowledge-base/" },
    { name: "Create Announcement", url: "" },
  ];
  return (
    <div>
      <div className="border-b-[1px] border-deskit-gray-500 bg-deskit-gray-200 w-full my-8 flex items-center justify-between py-4 dark:bg-deskit-black-500 dark:text-white">
        <div>
          <Breadcrumb paths={paths} pageTitle="Knowledge Base" />
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="bg-white p-8 rounded-lg dark:bg-deskit-black-300 dark:text-white">
          <div className="flex items-start justify-between">
            <p className="text-xl font-bold mb-12">Create Announcement</p>
            <div
              className="cursor-pointer text-xl hover:text-2xl"
              onClick={() => navigate("/dashboard/knowledge-base")}
            >
              <IoReturnUpBackSharp />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {/* announcement details */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-bold mb-2 text-sm">Title</p>
                <CustomInput
                  name="title"
                  placeholder={"announcement Title"}
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
                <p className="font-bold mb-2 text-sm">Channel</p>
                <CustomCheckDropdown
                  name={"departments"}
                  onSelect={handleSelect}
                  label=""
                  placeHolder="Select department"
                  options={[
                    {
                      value: "itsupport",
                      label: "IT Support",
                    },
                    {
                      value: "logistics",
                      label: "Logistics",
                    },
                    {
                      value: "finance",
                      label: "Finance",
                    },
                  ]}
                />
              </div>
            </div>

            {/* editor */}
            <div className="w-full">
              <p className="font-bold mb-2 text-sm">Body of announcement</p>
              <div className="w-full">
                <TiptapEditor getContent={setAnnouncementContent} />
              </div>
              <div className="flex w-full items-center justify-end mt-4">
                <Button
                  className="bg-deskit-orange-700 text-white hover:bg-deskit-orange-600"
                  type="submit"
                  onClick={submitAnnouncement}
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

export default CreateAnnouncement;
