import Image from "next/image";
import type { StaticImageData } from "next/image";
type ImageCardProps = {
    title:string 
    img:string | StaticImageData
    alt?: string
}

const ImageCard = ({ img, title, alt }: ImageCardProps) => {
  return (
    <div className="flex flex-col gap-3 h-screen py-5">
      <p>{title}</p> 
      <Image src={img} alt={alt || title} className="w-full h-screen rounded-3xl object-cover" />
    </div>
  );
};

export default ImageCard;