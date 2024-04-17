import ImageModal from "@/app/components/modal";
import Image from "next/image";

export default function viewImage ({params} : {params: {image:[string, any]}}) {

  return (
    <ImageModal>
        <Image
            className="w-auto h-full sm:max-h-screen "
            src={`/images/${params?.image}`}
            alt={`${params?.image}`}
            width={500}
            height={500}
            layout="responsive"
            priority
        />
    </ImageModal>
  )
}


