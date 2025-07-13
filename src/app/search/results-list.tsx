"use client";

import { IKImage } from "imagekitio-next";
import Link from "next/link";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";
import { ImageKitFile } from "@/types/imagekit";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ResultsList({
  files,
  counts,
}: {
  files: ImageKitFile[];
  counts: {
    memeId: string;
    count: number;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {files.map((file) => (
        <Card key={file.fileId}>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>{file.customMetadata?.displayName ?? file.name}</div>
              <div className="flex gap-1 items-center">
                <HeartFilledIcon />
                {counts.find((c) => c.memeId === file.fileId)?.count ?? 0}
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <IKImage
              key={file.fileId}
              path={file.filePath}
              alt={file.name}
              width={300}
              height={300}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            {/* Customize Button */}
            <Button asChild>
              <Link href={`/customize/${file.fileId}`}>Customize</Link>
            </Button>

            {/* Share Section */}
            <div className="mt-2">
              <p className="text-sm font-medium mb-1">Share:</p>
              <div className="flex gap-2">
                <FacebookShareButton url={`http://localhost:3000/customize/${file.fileId}`}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={`http://localhost:3000/customize/${file.fileId}`}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <WhatsappShareButton url={`http://localhost:3000/customize/${file.fileId}`}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <TelegramShareButton url={`http://localhost:3000/customize/${file.fileId}`}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
