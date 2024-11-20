import React from 'react'
import Cardblock from '@/components/Cardblock';
const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:flex 2xl:gap-24 2xl:ml-10 ">
        <Cardblock/>
        <Cardblock/>
        <Cardblock/>
        <Cardblock/>
    </div>
    </div>
  );
};

export default Page;



