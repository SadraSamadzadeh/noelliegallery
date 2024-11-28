import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { getAlbums, getMyImages } from "~/server/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default async function HomePage() {

  
  async function Images() {
  const images = await getMyImages();
  const albums = await getAlbums();
    return (
      <div>
          <div className="flex flex-wrap justify-center gap-4 p-4">
              {images.map((image, index) => (
            <div key={image.id + " - " + index} className="w-48 h-48 flex flex-col">
              <Link href={`/img/${image.id}`}>
                <Image src={image.url}
                style={{ objectFit: "contain"} } 
                alt={image.name} 
                width={192}
                height={192}
                />
              </Link>
              <div>{image.name}</div>
            </div>
          ))}
          </div>
      </div>
      
    )
  }
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
      
    </main>
  );
}
