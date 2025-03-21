import Link from "next/link"

function NotFound() {
  return (
    <div className="text-xl lg:text-2xl my-10 flex flex-col justify-center gap-4">
      <h1 className="mx-auto">The Page you are looking for doesn&apos;t exists.</h1>
      <Link href="/" className="mx-auto px-6 py-2 text-accent border rounded-sm flex items-center w-fit"><span>Back to Home</span></Link>
    </div>
  )
}

export default NotFound
