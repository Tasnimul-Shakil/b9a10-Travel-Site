import { Link, useLoaderData } from 'react-router-dom';
import CompanyInfo from '../Shared/CompanyInfo/CompanyInfo';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import Card from './Card';
import 'animate.css';
import Footer from '../Shared/Footer/Footer';
import { useState } from 'react';
import Testimonials from '../Shared/Testimonials/Testimonials';
import EmailInfo from '../Shared/EmailInfo/EmailInfo';
import { Helmet } from 'react-helmet-async';
import Blogs from './Blogs';
// import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/navigation';





const Home = () => {
    // const cards = useLoaderData();
    const { cardData, blogData } = useLoaderData();
    
    
    console.log(cardData); 
    console.log(blogData); 
      
    const [dataLength] = useState(6);
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>TourPlanner | Home</title>
            </Helmet>
            <Navbar/>
            {/* {
                cardData.slice(0,dataLength).map(aCards => <Header
                    key={aCards.id}
                    card={aCards}
                    ></Header>)
            } */}
            {/* <Header/> */}
            <Header cards={cardData} />

            <CompanyInfo/>
            <div className="mx-auto space-y-3 text-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8" >
                <h1 className=' animate__animated animate__bounce text-3xl font-bold '>Based on your location</h1>
                <p className=''>Some of our picked properties near you location.</p>
                <div className=' pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                    {
                        cardData.slice(0,dataLength).map(aCards => <Card
                            key={aCards.id}
                            card={aCards}
                            ></Card>)
                    }
                </div>
                <Link to={`/viewAllCards`}>
                    <button className=' btn mt-10 px-10 font-semibold text-white bg-[#7065F0] hover:bg-[#cce65b] hover:text-black'>Browse more properties</button>
                </Link>
            </div>
            <Testimonials/>
            <div className='py-16 '>
            <h1 className=' text-3xl pb-3 font-bold text-center '>Recent Articles & News</h1>
            <p className=' text-center pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Swiper
                // className= 'mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 bg-white border-0  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'
                slidesPerView={1}
                rewind={true}
                navigation={true}
                // modules={[Navigation]}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 1)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                } 
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 2)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'> 
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 3)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 4)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 5)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 6)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 7)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 8)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
                <SwiperSlide className='px-4 max-w-2xl'>
                {
                    blogData
                    .filter(aCards => aCards.blog_id === 9)
                    .map(aCards => <Blogs
                        key={aCards.id}
                        card={aCards}
                        ></Blogs>)
                }    
                </SwiperSlide>
            </Swiper>
            </div>
            <EmailInfo/>
            <Footer/>
        </div>
    );
};

export default Home;