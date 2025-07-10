// src/lib/imagekit-server.ts
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,   // okay for frontend
  privateKey: process.env.PRIVATE_KEY!,             // ONLY for backend
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export { imagekit };