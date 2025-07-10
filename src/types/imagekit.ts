// src/types/imagekit.ts

export type ImageKitFile = {
  fileId: string;
  filePath: string;
  name: string;
  customMetadata?: {
    displayName?: string;
  };
  [key: string]: any; // allow flexibility
};