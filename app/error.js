"use client"
import Link from "next/link"
function error() {
  return (
    <div className="text-xl lg:text-2xl my-10 flex flex-col justify-center gap-4">
      <h1 className="mx-auto">Something Went Wrong!</h1>
      <Link href="/" className="mx-auto px-6 py-2 text-accent border rounded-sm flex items-center w-fit"><span>Back to Home</span></Link>
    </div>
  )
}

export default error
