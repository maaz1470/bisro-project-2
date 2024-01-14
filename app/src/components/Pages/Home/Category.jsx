import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider1 from './../../../assets/home/slide1.jpg'
import Slider2 from './../../../assets/home/slide2.jpg'
import Slider3 from './../../../assets/home/slide3.jpg'
import Slider4 from './../../../assets/home/slide4.jpg'
import Slider5 from './../../../assets/home/slide5.jpg'
import SectionTitle from '../../shared/SectionTitle';
export default function Category() {
    return (
        <section>
            <SectionTitle
                subHeading={'from something is happened'}
                heading={'Feature Slider'}
            ></SectionTitle>
            <div className='my-2 max-w-3xl mx-auto'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={Slider1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Slider5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}