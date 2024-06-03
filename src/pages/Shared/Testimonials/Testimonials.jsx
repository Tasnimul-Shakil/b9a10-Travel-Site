import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaStarHalfAlt   } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import './SwiperCard.css';

const Testimonials = () => {
    return (
        <div className='lg:flex justify-between items-center lg:px-10 px-4 flex-col lg:gap-6 lg:flex-row lg:py-16 py-10'>
          <div className='lg:pb-0 pb-10'>
            <h1 className='lg:text-3xl text-2xl text-center font-bold'>What our customers <br /> are saying us?</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.</p>
            <div className='flex flex-col items-center text-center lg:flex-row lg:gap-16 gap-4 pt-10'>
                <div className=' space-y-2'>
                    <h1 className='text-3xl font-bold text-[#7065F0]'>10m+</h1>
                    <p className=' font-semibold'>Happy Customers</p>
                </div>  
                <div className=' space-y-2'>
                    <h1 className='text-3xl font-bold text-[#7065F0]'>4.88</h1>
                    <p className=' font-semibold'>Overall rating</p>
                    <div className='flex gap-4 text-[#f0ca4e] text-xl'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt   />
                    </div> 
                </div> 
            </div>
          </div>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper  lg:w-[32rem] w-[18rem] "
            >
            <SwiperSlide className=''>
                <div className="card p-4 border-3 border-[#584ec2] bg-base-100 shadow-xl border-2 rounded-xl">
                    <div className='flex gap-6'>
                        <img className=' lg:w-16 h-16 rounded-full' src="https://i.ibb.co/Hqgy4YR/Avater6.png" alt="" />
                        <div>
                        <h2 className="card-title text-black">John Smith</h2>
                        <p className="card-subtitle text-black">CEO, Smith Enterprises</p>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <p>Outstanding service! From property selection to closing, the team provided expert guidance. Their professionalism and market 
                            knowledge were impressive. Highly recommend!</p>
                        <div className="card-actions pt-4 justify-between">
                            <p className='font-bold'>June 12, 2023</p>
                            <RiDoubleQuotesL className=' text-5xl'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card p-4 border-3 border-[#584ec2] bg-base-100 shadow-xl border-2 rounded-xl">
                    <div className='flex gap-6'>
                        <img className=' w-16 h-16 rounded-full' src="https://i.ibb.co/kG1wD53/Avater1.png" alt="" />
                        <div>
                        <h2 className="card-title text-black">Emily Johnson</h2>
                        <p className="card-subtitle text-black">Marketing Manager, Johnson Corp</p>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <p>Efficient and effective! The team helped us find our dream property swiftly. Their attention to detail and personalized approach exceeded our expectations.</p>
                        <div className="card-actions pt-4 justify-between">
                            <p className='font-bold'>August 5, 2023</p>
                            <RiDoubleQuotesL className=' text-5xl'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card p-4 border-3 border-[#584ec2] bg-base-100 shadow-xl border-2 rounded-xl">
                    <div className='flex gap-6'>
                        <img className=' w-16 h-16 rounded-full' src="https://i.ibb.co/c1HDgr2/Avater4.png" alt="" />
                        <div>
                        <h2 className="card-title text-black">Michael Brown</h2>
                        <p className="card-subtitle text-black">CFO, Brown Investments</p>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <p>Top-notch service! The team expertise and commitment made our real estate transaction seamless. They truly understand their clients needs and deliver exceptional results.</p>
                        <div className="card-actions pt-4 justify-between">
                            <p className='font-bold'>ctober 20, 2023</p>
                            <RiDoubleQuotesL className=' text-5xl'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card p-4 border-3 border-[#584ec2] bg-base-100 shadow-xl border-2 rounded-xl">
                    <div className='flex gap-6'>
                        <img className=' w-16 h-16 rounded-full' src="https://i.ibb.co/grzS39p/Avater2.png" alt="" />
                        <div>
                        <h2 className="card-title text-black">Sarah Lee</h2>
                        <p className="card-subtitle text-black">Entrepreneur</p>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <p>Absolutely fantastic! The team is went above and beyond to find the perfect property for me. Their dedication and professionalism made the entire process stress-free and enjoyable.</p>
                        <div className="card-actions pt-4 justify-between">
                            <p className='font-bold'>December 8, 2023</p>
                            <RiDoubleQuotesL className=' text-5xl'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card p-4 border-3 border-[#584ec2] bg-base-100 shadow-xl border-2 rounded-xl">
                    <div className='flex gap-6'>
                        <img className=' w-16 h-16 rounded-full' src="https://i.ibb.co/PNvFs7k/Avater5.png" alt="" />
                        <div>
                        <h2 className="card-title text-black">David Miller</h2>
                        <p className="card-subtitle text-black">Attorney </p>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <p>Exceptional experience! The team is knowledge of the market and negotiation skills were invaluable. I could not have asked for better guidance in navigating the real estate process.</p>
                        <div className="card-actions pt-4 justify-between">
                            <p className='font-bold'>February 15, 2024</p>
                            <RiDoubleQuotesL className=' text-5xl'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card p-4 border-3 border-[#584ec2] bg-base-100 shadow-xl border-2 rounded-xl">
                    <div className='flex gap-6'>
                        <img className=' w-16 h-16 rounded-full' src="https://i.ibb.co/BPmXysM/Avater3.png" alt="" />
                        <div>
                        <h2 className="card-title text-black">Amanda White</h2>
                        <p className="card-subtitle text-black">Freelancer </p>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <p>Highly recommended! The team provided excellent service from start to finish. Their expertise and attention to detail ensured a smooth and successful transaction. I could not be happier with the outcome.</p>
                        <div className="card-actions pt-4 justify-between">
                            <p className='font-bold'>April 3, 2024</p>
                            <RiDoubleQuotesL className=' text-5xl'/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;