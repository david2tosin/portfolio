'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5)


  return (
    <section ref={ref} id="Home" className="mb-28 max-w-3xl text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image src='/profile.jpg' alt="Tosin potrait" width={192} height={192} priority={true}
            className="h-24 w-24  rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl scroll-mt-[100rem]"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Tosin.</span> I'm a junior <span className="font-bold">frontend developer.{" "}
        </span> I enjoy building functional <span  className="italic">sites & apps</span>. My focus is{" "} <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
         href="#contact"
         className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me header
          <BsArrowRight
            className='opacity-70 group-hover:translate-x-1 transition'
          />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
          href="/https://docs.google.com/document/d/e/2PACX-1vQmsj1cr7Ek8fodMcBwDW1wsDZQzqd0qSjZEeATHQcLHHMIPn3i-DEil9EByUEMlw/pub"
          download={true}
        >
          Download CV
          <HiDownload
            className='opacity-60 group-hover:translate-y-1 transition'
          />
          </a>

        <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
        href="https://www.linkedin.com/in/oluwatosinoduwole/" target="_blank">
          <BsLinkedin />
        </a>

        <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
        href="https://github.com/david2tosin" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
export default Intro