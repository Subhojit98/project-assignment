"use client"
import Image from "next/image"
import helpIcon from '@/app/assets/svgs/question-circle-svgrepo-com.svg'
import gridIcon from '@/app/assets/svgs/grid-svgrepo-com.svg'
import modelPicture1 from '@/app/assets/olivie-strauss-J-UrJxkjut4-unsplash.jpg'
import modelPicture2 from '@/app/assets/olivie-strauss-J-UrJxkjut4-unsplash.jpg'
import modelPicture3 from '@/app/assets/olivie-strauss-J-UrJxkjut4-unsplash.jpg'
import rightArrow from '@/app/assets/svgs/right-arrow-svgrepo-com.svg'
import leftArrow from '@/app/assets/svgs/left-arrow-svgrepo-com.svg'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { useState } from "react"

const GalleryTab = () => {

    const [addedImages, setAddedImages] = useState<any>([modelPicture1.src, modelPicture2.src, modelPicture3.src])
    const handelImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const createImage = URL.createObjectURL(e.target.files[0])
            setAddedImages([...addedImages, createImage])
        }
    }

    const handelnextButton = () => {
        const elm = document.querySelector(`#pic-${addedImages.length}`)
        elm?.scrollIntoView({ behavior: "smooth" })

    }
    const handelPrivioustButton = () => {
        const elm = document.querySelector(`#pic-1`)
        elm?.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <div className="w-[95%] xl:w-[85%] h-[40%] bg-card rounded-2xl flex">

            <div className="w-[8%] ml-2 h-full flex flex-col items-center gap-20 py-4">
                <HoverCard>
                    <HoverCardTrigger> <Image src={helpIcon} alt="helpIcon" className="w-8 cursor-pointer" /></HoverCardTrigger>
                    <HoverCardContent className="w-32 text-sm">Need Help?</HoverCardContent>
                </HoverCard>

                <Image src={gridIcon} alt="gridIcon" className="mr-4" />
            </div>

            <div className="w-[90%] h-full">
                <div className="w-full h-[22%] flex items-center justify-between px-5 mt-3">
                    <div className="w-28 lg:w-32 bg-gray-950 flex justify-center items-center h-14 rounded-2xl text-lg lg:text-xl p-1 text-white">
                        <span>Button Text</span>
                    </div>

                    <div className="flex">

                        <div className="file-upload">
                            <label htmlFor="file-input">

                                <div className="w-28 lg:w-32 bg-card shadow-[8px_14px_10px_rgba(0,10,26,0.7),_0px_8px_24px_rgba(17,17,26,0.1),_0px_-2px_6px_rgba(255,255,255,1)] text-center h-12 rounded-3xl text-sm p-1 text-white mr-8 flex items-center justify-center cursor-pointer uppercase">
                                    <p className=""> + add image</p>
                                </div>
                            </label>
                            <input id="file-input" type="file" accept="image/*, .jpeg, .png ,jpg, .webp" className="hidden" onChange={handelImagesUpload} />
                        </div>

                        <button className="w-10 h-10 bg-[#282b2e] rounded-full mr-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.3)] hover:bg-gray-700" onClick={handelPrivioustButton} ><Image src={leftArrow} className="w-7 m-auto" alt="left button arrow" /></button>

                        <button className="w-10 h-10 bg-[#282b2e] rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.3)] hover:bg-gray-700"><Image src={rightArrow} className="w-7 m-auto" alt="right button arrow" onClick={handelnextButton} /></button>
                    </div>


                </div>

                <div className="w-full h-[78%] flex overflow-x-auto gap-x-5 items-center px-4 no-scrollbar">

                    {/* Images from upload */}
                    {
                        addedImages.length > 0 && addedImages.map((img: string, i: number) => {
                            return <Image key={i} id={`pic-${i + 1}`} src={img} width={1000} height={1000} alt="" className="w-48 h-44 rounded-xl bg-black object-cover object-center grayscale hover:grayscale-0 duration-300 ease-in-out hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:scale-110 hover:-rotate-3"></Image>
                        })
                    }


                </div>


            </div>

        </div>
    )
}

export default GalleryTab
