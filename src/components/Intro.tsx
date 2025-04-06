"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import React from "react"

export default function Intro() {
  return (
    <section className="ml-75">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10"
      >
        <img src="/111.png" alt="" width={150} className="rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-left gap-4  mt-10"
      >
        <span className="">你好， 我是</span>
        <h1 className="text-4xl font-bold">冯世昌</h1>

        <TypeAnimation
          sequence={[
            "<Frontend Developer />", // Types 'One'
            2000, // Waits 1s
            "<Student />", // Deletes 'One' and types 'Two'
            2000,
          ]}
          wrapper="span"
          cursor={true} 
          repeat={Infinity}
          className="text-4xl font-bold"
        />

        <div className="flex gap-2">
          <span># StevenFeng</span> <span># Shichang</span>
        </div>

        <p className="text-md">
          我是一位澳大利亚悉尼大学在读的信息技术硕士生,
          专业方向是软件工程。我热衷于搭建项目。
        </p>
      </motion.div>
    </section>
  )
}
