
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Rajesh Sharma",
            business: "Sharma Electronics",
            rating: 5,
            text: " fantastic website for my electronics store. The design is clean, and I've seen a 30% increase in online orders"
        },
        {
            id: 2,
            name: "Pooja Verma",
            business: "Pooja’s Boutique",
            rating: 5,
            text: " the website delivered exceeded my expectations! Customers love the seamless shopping experience."
        },
        {
            id: 3,
            name: "Arjun Patel",
            business: "Patel Agro Solutions",
            rating: 4,
            text: "This website has transformed my agricultural consultancy. Now farmers can book consultations easily. I appreciate "
        },
        {
            id: 4,
            name: "Neha Iyer",
            business: "Iyer's Home Bakery",
            rating: 5,
            text: " thanks to the new website. Sales have increased, and customers love how easy it is to browse and order."
        },
        {
            id: 5,
            name: "Sameer Reddy",
            business: "Reddy Automobiles",
            rating: 5,
            text: " automobile service website is easy to navigate. Customers can now book service appointments online"
        },
        {
            id: 6,
            name: "Kavita Mehta",
            business: "Mehta Educational Services",
            rating: 4,
            text: " students can register for courses online and access study materials. The website  mobile-friendly. Great work!"
        }
    ];

    return (
        <div id='testimonials' className='py-10 relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What Our Customers Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {/* Black Star Ratings */}
                                <div className='flex text-black'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <Star key={index} fill={index < item.rating ? "black" : "none"} />
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className='py-3 text-gray-700 italic'>" {item.text} "</p>
                                {/* Customer Info */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1 font-medium text-gray-600'>{item.business}</p>
                                    </div>
                                    <Quote className='text-red-400' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
