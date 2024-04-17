import Image from "next/image";

export default function viewImage ({params} : {params: {image:[string, string]}}) {

  return (
    <div className="flex justify-center items-center w-screen h-screen"> 
      <div className="relative sm:max-h-screen aspect-square">
        <Image
            className="w-auto h-full sm:max-h-screen "
            src={`/images/${params?.image}`}
            alt={`${params?.image}`}
            width={500}
            height={500}
            layout="responsive"
        />
      </div>
    </div>
  )
}


