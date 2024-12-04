import Image from "next/image"

function NotFoundPage() {
	return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-xl font-bold text-center">
            404 : Sorry no page available at this address
        </div>
    <Image src={"/404.gif"} alt="my-gif" height={400} width={400} unoptimized={true}></Image>
    </div>
    
    )
}

export default NotFoundPage