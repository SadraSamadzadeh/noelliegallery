import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/CE0PMWe618kZnyDcBcNozHMFTxBR4ZcKiQVOuUtakhsE68jI",
  "https://utfs.io/f/CE0PMWe618kZ0So01dp9epnutVKhHmiGMQjcWv4PwaIS35Jl",
  "https://utfs.io/f/CE0PMWe618kZQRIgQinGJopZ1wIvHsDUxf4hEl3zOLnR9cmN",
  "https://utfs.io/f/CE0PMWe618kZ2pzy6z9O0jQxRoGt79k4XNdDJbWSE3681hZi",
  "https://utfs.io/f/CE0PMWe618kZMAcWTPF6Oo0I12TrlEN78vnF3VbfxaLCpsyc",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
         [ ...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          )) 
      }
      </div>
    </main>
  );
}
