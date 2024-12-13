
import { getMyImages } from "~/server/queries";
import { DBImage, Image, columns } from "./columns"
import { DataTable } from "./data-table"
import { useUser } from "@clerk/nextjs";
import { clerkClient } from "~/app/api/clerk/clerk";

async function getData(): Promise<Image[]> {
  // Fetch data from your API here.
  const Images : DBImage[] | {error: string} = await getMyImages();
  if (Array.isArray(Images)) {
    const updatedArrayPromise = Images.map(async (image) => {
      const userId = image.userId;
      const username = await TurnUserIdIntoUsername(userId);
      return {
        ...image,
        userId: username,
        createdAt: image.createdAt.toLocaleDateString(),
        updatedAt: image.updatedAt?.toLocaleDateString(),
      };
    });
    const updatedArray = await Promise.all(updatedArrayPromise);
    return updatedArray;
  }
}
async function TurnUserIdIntoUsername(userId : string) {
    const name = (await clerkClient.users.getUser(userId)).fullName;
    if (!name) return "No Name";
  return name; 

}

export default async function Table() {
  const data = await getData()
  return (
    <div className="w-full py-10 flex">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
