import { useState, useEffect } from 'react'; 
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import galleryImage2 from '../../assets/Home_2.png'
import galleryImage3 from '../../assets/Home_3.png'
import galleryImage4 from '../../assets/Home_4.png'
import galleryImage5 from '../../assets/Home_5.png'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import { GiThorHammer } from "react-icons/gi";
import { TbMeterSquare } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import Card from '../Home/Card';


const ViewDetails = () => {
    const cards = useLoaderData();
    const [dataLength] = useState(3);
    const { id } = useParams(); 
    const [property, setProperty] = useState(null); 

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const response = await fetch(`/Card.json`);
                const data = await response.json();
                const foundProperty = data.find(item => item.id === parseInt(id));
                setProperty(foundProperty);
            } catch (error) {
                console.error('Error fetching property data:', error);
            }
        };
        
        fetchPropertyData();
    }, [id]);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Estatery | Property_Details </title>
            </Helmet>
            <Navbar />
            {property && (
            <>
            <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/"><a className='flex items-center'><IoMdArrowRoundBack /> Home</a></Link>
                        </li> 
                        <li>
                            <Link to="/ViewAllCards"><a>Our Property</a></Link>
                        </li> 
                        <li>
                            <a>{property.estate_title}</a>
                        </li> 
                    </ul>
            </div>
            <div className='grid pt-5 lg:grid-cols-2 gap-1 grid-cols-1'>
                <div>
                    <div className='relative overflow-hidden bg-cover bg-no-repeat rounded-lg'>
                    <img className='transition duration-300 ease-in-out hover:scale-105 rounded-lg w-full' src={property.image} alt="" /> 
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='relative overflow-hidden bg-cover bg-no-repeat rounded-lg'>
                        <img className='transition duration-300 ease-in-out hover:scale-105  rounded-lg' src={galleryImage5} alt="" /> 
                    </div>
                    <div className='relative overflow-hidden bg-cover bg-no-repeat rounded-lg'>
                        <img className='transition duration-300 ease-in-out hover:scale-105 rounded-lg' src={galleryImage2} alt="" />
                    </div>
                    <div className='relative overflow-hidden bg-cover bg-no-repeat rounded-lg'>
                        <img className='transition duration-300 ease-in-out hover:scale-105 rounded-lg' src={galleryImage3} alt="" />
                    </div>
                    <div className='relative overflow-hidden bg-cover bg-no-repeat rounded-lg'>
                        <img className='transition duration-300 ease-in-out hover:scale-105 rounded-lg' src={galleryImage4} alt="" />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex gap-6 lg:max-w-none">
                <div className="py-8 lg:px-1 px-4 lg:flex-auto">
                    <div className=' flex justify-between'> 
                        <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{property.estate_title}</h3>
                        <p className=" text-base flex leading-7 text-gray-600">
                        <IoLocationOutline className='text-2xl'/>
                        {property.location}
                        </p>
                        </div>
                        <div className="">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>{property.price}</h1>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-2 gap-3 pt-6'>
                        <div className='flex lg:gap-3 gap-1 transition justify-center duration-300 text-[#353535] hover:bg-[#cce65b] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl'>
                            <GiThorHammer/>
                            <h2>Built in {property.built_year}</h2>
                        </div>
                        <div className='flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#cce65b] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl'>
                            <TbMeterSquare/>
                            <h2> {property.area}</h2>
                        </div>
                        <div className='flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#cce65b] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl'>
                            <MdOutlineHomeWork/>
                            <h2>{property.status}</h2>
                        </div>
                        <div className='flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#cce65b] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl'>
                            <IoBedOutline/>
                            <h2>{property.bedrooms} Bedrooms</h2>
                        </div>
                        <div className='flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#cce65b] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl'>
                            <PiBathtub/>
                            <h2>{property.bathrooms} Bathrooms</h2>
                        </div>
                        <div className='flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#cce65b] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl'>
                            <GiHomeGarage/>
                            <h2>{property.garage} Garage</h2>
                        </div>
                    </div>
                    <div className='pt-12'>
                        <h1 className='text-2xl font-semibold'>Extra Facts & Features</h1>
                        
                            <div className='grid grid-cols-2' >
                            {property.facilities.map((facility, index) => (
                                <p key={index} className='pt-4 flex items-center gap-4' ><FaRegCheckCircle/> {facility}</p>
                            ))}
                            </div>
                    </div>
                    <div className='pt-12'>
                        <h1 className='text-2xl font-semibold'>Description</h1>
                        <p className='pt-4'>{property.description}</p>
                    </div>
                    
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="mt-6 lg:ml-4 rounded-2xl border text-center lg:justify-center sticky top-0  lg:py-4">
                    <div className="mx-auto p-4 space-y-4">
                        <p className="text-base font-semibold text-gray-600">Request a tour as early as</p>
                        <button className='btn w-full bg-[#e7c873] hover:border-[#e7c873] hover:border-2 hover:bg-[#e7c87300]'>Schedule a Tour <IoMdArrowRoundForward/></button>
                        <button className='btn w-full bg-[#2a974b] text-white hover:border-[#2a974b] hover:text-gray-600 hover:border-2 hover:bg-[#2a974b00]'>
                            Chat via Whatsapp <RiWhatsappFill/>
                        </button> 
                    </div>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <h1 className=' text-3xl font-bold '>See More Similar Properties</h1>
                <div className=' pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                {
                    cards.slice(0,dataLength).map(aCards => <Card
                        key={aCards.id}
                        card={aCards}
                        ></Card>)
                }
                </div>
            </div>
            <Footer/>
            </>
            )}
        </div>
    );
};

export default ViewDetails;
