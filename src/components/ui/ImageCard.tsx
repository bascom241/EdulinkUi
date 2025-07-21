import Image from "next/image";
import type { StaticImageData } from "next/image";
type ImageCardProps = {
    title:string 
    img:string | StaticImageData
    alt?: string
}

const ImageCard = ({ img, title, alt }: ImageCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p>{title}</p>
      <Image src={img} alt={alt || title} width={100} height={100} />
    </div>
  );
};

export default ImageCard;