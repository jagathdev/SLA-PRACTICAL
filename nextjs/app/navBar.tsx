import Link from "next/link"

const navBar = () => {
    return (
        <>
            <div className="bg-gray-300 flex justify-between items-center gap-5">
                <div>
                    <h1>Logo</h1>
                </div>
                <div className="flex gap-10 mr-5">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}
export default navBar;

