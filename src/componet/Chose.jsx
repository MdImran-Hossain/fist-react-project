import React from 'react'
import CommonHead from './commonCommponet/CommonHead'
import Paragraf from './commonCommponet/Paragraf'
const Chose = () => {
  return (
    <>
      <section className='p-[90px] bg-secend_bgcolor'>
        <div className="container">
            <div className='flex justify-center items-center '>
                <div className='text-center'>
                     <CommonHead headingContent={"Reason to Choose "} HlastContent={"us"}/>
                     <Paragraf ParagrafContent={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"} ParagrafDesing={'max-w-[800px]'}/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Chose
