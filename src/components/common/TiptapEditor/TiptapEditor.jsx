import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import FontFamily from "@tiptap/extension-font-family";
import { Color } from "@tiptap/extension-color";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Underline from "@tiptap/extension-underline";
import {
  MdFormatListNumbered,
  MdOutlineFormatListBulleted,
  MdOutlineRedo,
  MdOutlineUndo,
} from "react-icons/md";
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from "react-icons/bi";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-end gap-2 border-b-[1px] border-b-gray-200 rounded px-4 py-2 text-lg text-deskit-blue-300">
      <button
        className="px-2 py-1  text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 w-10"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <MdOutlineUndo size={25} />
      </button>

      <button
        className="px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 w-10"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <MdOutlineRedo size={25} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 font-extrabold hover:bg-gray-200 w-10 ${
          editor.isActive("bold") ? "bg-gray-200" : ""
        }`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 font-extrabold italic hover:bg-gray-200 w-10 ${
          editor.isActive("italic") ? "bg-gray-200" : ""
        }`}
      >
        I
      </button>
      <button
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 font-extrabold  hover:bg-gray-200 w-10 ${
          editor.isActive("underline") ? "bg-gray-200" : ""
        }`}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 font-extrabold underline hover:bg-gray-200 w-10 ${
          editor.isActive("highlight") ? "bg-gray-200" : ""
        }`}
      >
        A
      </button>

      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 py-1 text-deskit-blue-300 rounded font-bold hover:bg-gray-200 w-10 ${
          editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""
        }`}
      >
        T
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 text-deskit-blue-300 rounded font-bold hover:bg-gray-200 w-10 h-8 text-sm ${
          editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""
        }`}
      >
        T
      </button> */}

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 min-w-10 h-8 text-sm ${
          editor.isActive({ TextAlign: "left" }) ? "bg-gray-200" : ""
        }`}
      >
        <BiAlignLeft size={25} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 min-w-10 h-8 text-sm ${
          editor.isActive({ TextAlign: "center" }) ? "bg-gray-200" : ""
        }`}
      >
        <BiAlignMiddle size={25} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 min-w-10 h-8 text-sm ${
          editor.isActive({ TextAlign: "right" }) ? "bg-gray-200" : ""
        }`}
      >
        <BiAlignRight size={25} />
      </button>
      <div>
        <input
          className="cursor-pointer"
          type="color"
          onInput={(event) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          value={editor.getAttributes("textStyle").color}
          data-testid="setColor"
        />
      </div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 min-w-10 h-8 text-sm ${
          editor.isActive("bulletList") ? "bg-gray-200" : ""
        }`}
      >
        <MdOutlineFormatListBulleted size={25} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 text-deskit-blue-300  dark:text-white rounded  hover:dark:bg-deskit-black-500 hover:bg-gray-200 min-w-10 h-8 text-sm ${
          editor.isActive("orderedList") ? "bg-gray-200" : ""
        }`}
      >
        <MdFormatListNumbered size={25} />
      </button>

      {/* 
      <button
        onClick={() => editor.chain().focus().splitListItem("listItem").run()}
        disabled={!editor.can().splitListItem("listItem")}
      >
        Split list item
      </button>
      <button
        onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
        disabled={!editor.can().sinkListItem("listItem")}
      >
        Sink list item
      </button>
      <button
        onClick={() => editor.chain().focus().liftListItem("listItem").run()}
        disabled={!editor.can().liftListItem("listItem")}
      >
        Lift list item
      </button>
   
      
       <button
        onClick={() => editor.chain().focus().setFontFamily("serif").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "serif" })
            ? "is-active"
            : ""
        }
        data-test-id="serif"
      >
        Serif
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("monospace").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "monospace" })
            ? "is-active"
            : ""
        }
        data-test-id="monospace"
      >
        Monospace
      </button>
      <button
        onClick={() => editor.chain().focus().setFontFamily("cursive").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "cursive" })
            ? "is-active"
            : ""
        }
        data-test-id="cursive"
      >
        Cursive
      </button> */}
    </div>
  );
};

// const limit = 280;
const TiptapEditor = ({ getContent }) => {
  const limit = 1000;
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none border-b border-gray-100 min-h-[200px] dark:text-white",
        spellcheck: "false",
      },
    },
    extensions: [
      StarterKit,
      OrderedList.configure({
        itemTypeName: "listItem",
        HTMLAttributes: {
          class: "list-decimal",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      Heading.configure({ levels: [1, 2, 3] }),
      TextStyle,
      FontFamily,
      Color,
      ListItem,
      Typography,
      Underline,
      CharacterCount.configure({
        limit: 1000,
      }),
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `Start typing here...`,
    onUpdate: ({ editor }) => {
      getContent(editor.getHTML());
    },
  });
  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;
  return (
    <div className="border-[1px] border-gray-100 rounded">
      <MenuBar editor={editor} />
      <div className="py-4 pb-8 px-8 text-base text-deskit-blue-300 focus:border-0">
        <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
        {/* character count */}
        <div
          className={`text-green-500 mt-8 text-xs ${
            editor.storage.characterCount.characters() === limit
              ? "text-red-500"
              : ""
          }`}
        >
          <svg height="20" width="20" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="#e9ecef" />
            <circle
              r="5"
              cx="10"
              cy="10"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
              transform="rotate(-90) translate(-20)"
            />
            <circle r="6" cx="10" cy="10" fill="white" />
          </svg>
          {editor.storage.characterCount.characters()} / {limit} characters
          <br />
          {editor.storage.characterCount.words()} words
        </div>
      </div>
    </div>
  );
};

export default TiptapEditor;
