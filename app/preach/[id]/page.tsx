"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Video from '@/components/myComponents/subs/video'
import Books from '@/components/myComponents/subs/books'
import Audio from '@/components/myComponents/subs/audio'
import { useParams } from 'next/navigation'

const Preaching = () => {
  let { id } = useParams()
  return (
    <Tabs defaultValue="audio" className="flex flex-col lg:flex-row gap-[60px] my-5">
      <TabsList className="flex flex-row lg:flex-col w-full max-w-[380px] lg:max-w-[280px] xl:max-w-[340px] max-h-[177px] mx-auto /xl:mx-0 gap-1 ">
        <TabsTrigger value="audio" className='rounded-full flex-1'>Audios</TabsTrigger>
        <TabsTrigger value="video" className='rounded-full flex-1'>Videos</TabsTrigger>
        <TabsTrigger value="book" className='rounded-full flex-1'>Books</TabsTrigger>
      </TabsList>
      <div className="min-h-[70vh] w-full">
        <div>
          { (id != "default") ? <div>video, audio and pdf display</div> : <div></div>}
        </div>
        <TabsContent value="audio" className="w-full">
          <Audio />
        </TabsContent>
        <TabsContent value="video" className="w-full">
          <Video />
        </TabsContent>
        <TabsContent value="book" className="w-full">
          <Books />
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default Preaching
