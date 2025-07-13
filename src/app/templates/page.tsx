import { unstable_noStore } from "next/cache";
import Link from "next/link";
import { imagekit } from "@/app/lib/imagekit-server";
import { Card, CardContent } from "@/components/ui/card";
import { ImageKitFile } from "@/types/imagekit"; // our shared type

export default async function TemplatesPage() {
  unstable_noStore();

  // Fetch all files tagged “template”
  const files = (await imagekit.listFiles({
    tags: "template",
  })) as ImageKitFile[];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-4xl font-bold">Choose a Meme Template</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {files.map((file) => (
          <Card key={file.fileId} className="overflow-hidden">
            <CardContent className="p-0">
              <Link
                href={`/customize/${file.fileId}`}
                className="block hover:opacity-80 transition"
              >
                {/* Use ImageKit URL directly for speed */}
                <img
                  src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/${file.filePath}?tr=w-400`}
                  alt={file.name}
                  className="w-full h-auto"
                />
              </Link>
            </CardContent>
            <div className="p-4 text-center font-medium">
              {file.customMetadata?.displayName ?? file.name}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
