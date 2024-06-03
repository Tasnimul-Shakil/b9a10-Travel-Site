import { useLoaderData } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Blogs from '../Home/Blogs';

const AllBlogs = () => {
    const cards = useLoaderData();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Estatery | All Blog </title>
            </Helmet>
            <Navbar/>
            <div className="mx-auto space-y-3 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 " >
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/" onClick={scrollToTop}><a className='flex items-center'><IoMdArrowRoundBack /> Home</a></Link>
                        </li> 
                        <li>All Blog</li> 
                    </ul>
                </div>
                <h1 className=' animate__animated animate__bounce text-3xl font-bold '>All Of Our Blog</h1>
                <p className=''>Some of our picked properties near you location.</p>
                <div className=' pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                    {
                        cards.map(aCards => <Blogs
                            key={aCards.id}
                            card={aCards}
                            ></Blogs>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AllBlogs;