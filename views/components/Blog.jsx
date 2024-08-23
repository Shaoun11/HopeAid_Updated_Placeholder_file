import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import BlogLoader from '../loader/BlogLoader';
const Blog = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('http://localhost:3000/api/donationBlogData')
          .then(response => response.json())
          .then(responseData => {
            const dataArray = responseData.data;
            setData(dataArray);
            setVisibleData(dataArray.slice(0, 3)); // Show only the first 3 items initially
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, []);
      
      const handleViewAll = () => {
        setVisibleData(data);
        setShowAll(true);
      };
      if (loading) {
        return <BlogLoader></BlogLoader>
      }else{
        return (
            // HoperAid Blog Section Code Start
            <div id='blog' className='max-w-7xl mx-auto pt-[60px] pb-[50px]'>
                {/* HoperAid Blog Section Text */}
                 <div className='lg:ml-0 md:ml-6 md:mr-6 ml-4 lg:mr-0 mr-4 md:flex flex justify-between'>
                    <h1 className='lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717]'>
                    Press Release
                    </h1>
                    {/* blog section button*/}
                    {visibleData?.length < data?.length && (
                         <p className='md:block hidden'>
                         <button onClick={handleViewAll} className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl px-8 py-3 hover:text-white hover:border-transparent">
                            View all
                            </button>
                         </p>
                    )}
                </div>
    
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:mt-14 mt-8'>
                {
                    visibleData?.map(donationBlog=><BlogCard key={donationBlog._id} data={donationBlog} ></BlogCard>)
                    }
                </div>
               {/* blog section button responsive */}
               {visibleData?.length < data?.length && (
                <p className='md:hidden block text-center mt-8'>
                    <button onClick={handleViewAll} className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl px-8 py-3 hover:text-white hover:border-transparent">
                       
                       View all
                       </button>
                    </p>
               )}
            </div>
        );
      }
   
};

export default Blog;