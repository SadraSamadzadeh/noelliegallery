import { getImage } from "~/server/queries";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNumber = Number(photoId)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");
  const image = await getImage(idAsNumber);
  return (
      <FullPageImageView id={idAsNumber} />
  );
} 