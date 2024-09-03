import Image from "next/image"
import helpIcon from '@/app/assets/svgs/question-circle-svgrepo-com.svg'
import gridIcon from '@/app/assets/svgs/grid-svgrepo-com.svg'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const FeaturesTab = () => {
    return (
        <div className="w-[95%] xl:w-[85%] h-[40%] bg-card rounded-2xl flex">

            <div className="w-12 ml-2 h-full flex flex-col items-center gap-20 py-4">
                <HoverCard>
                    <HoverCardTrigger>
                        <Image src={helpIcon} alt="helpIcon" className="w-8 cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-32 text-sm">Need Help?</HoverCardContent>
                </HoverCard>
                <Image src={gridIcon} alt="gridIcon" className="mr-4" />

            </div>

            <div className="w-full h-full flex justify-center my-5">
                <Tabs defaultValue="about" className="w-[90%]">
                    <TabsList className="grid w-full grid-cols-3 lg:px-2 bg-[#171818]">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="exp">Experiences</TabsTrigger>
                        <TabsTrigger value="recommended">Recommended</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="w-full h-52 bg-yellow-20 text-lg mt-7 overflow-y-auto text-[#6a6d70]">
                        <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                        <br />
                        <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                    </TabsContent>
                    <TabsContent value="exp" className="w-full h-52 bg-yellow-20 text-lg mt-7 overflow-y-auto text-[#6a6d70]">

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nobis incidunt possimus! Nam ipsa laudantium, accusantium impedit ipsum deleniti sapiente?</p>
                    </TabsContent>
                    <TabsContent value="recommended" className="w-full h-52 bg-yellow-20 text-lg mt-7 overflow-y-auto text-[#6a6d70]">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere ipsa soluta esse quam iusto officia placeat rerum eos quod est temporibus illum minima earum possimus nisi similique natus reprehenderit doloribus, optio tempora. Ipsa voluptates cumque vitae dolor suscipit consequuntur.</p>
                    </TabsContent>
                </Tabs>
            </div>


        </div>
    )
}

export default FeaturesTab
