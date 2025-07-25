import { ImageData } from "@/components/data/imageData";
import ImageCard from "@/components/ui/ImageCard";
export const Skeleton1 = () => {
    const img = ImageData[1];
    return <ImageCard img={img.img} title={img.tittle} alt={`image-${img.id}`} />;
};

export const Skeleton2 = () => {
    const img = ImageData[0];
    return <ImageCard img={img.img} title={img.tittle} alt={`image-${img.id}`} />;
};
export const Skeleton3 = () => {
    const img = ImageData[2];
    return <ImageCard img={img.img} title={img.tittle} alt={`image-${img.id}`} />;
};
