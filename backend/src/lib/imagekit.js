import ImageKit from "imagekit";
import { config } from "dotenv";

config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: `https://ik.imagekit.io/${process.env.IMAGE_KIT}/`,
});

export default imagekit;
