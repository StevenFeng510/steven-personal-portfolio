"use client"

import { FaGithub } from "react-icons/fa"
import { IoLogoWechat } from "react-icons/io5"

export default function Header() {
  return (
    <header className="z-[999]">
      {/* Header */}
      <nav className="flex justify-between items-center px-80 py-3 border-b-2 border-gray-300">
        <div className="flex space-x-4">
          <div>Home</div>
          <div>Introduction</div>
          <div>Skills</div>
          <div>Experience</div>
        </div>
        <div className="flex space-x-4 text-xl">
          <FaGithub />
          <IoLogoWechat />
        </div>
      </nav>
    </header>
  )
}
