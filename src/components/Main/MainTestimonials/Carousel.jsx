
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination, Navigation, } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='h-[350px] '>
      <Swiper
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwipe"
      >
        <SwiperSlide className=''>
                <div className='relative text-gray-600 py-7 px-6 w-9/12 max-w-2xl border border-gray-100 shadow-md'>
                  <div className='absolute top-[-20px] flex items-center justify-center w-4 h-4 p-3 bg-indigo-600 text-white rounded-md'>
                    <img src="/icons/quote-left-solid.svg" alt="quote icon"/>
                  </div>
                  
                  <p className='mb-6 text-left'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  
                  {/*  */}
                  <div className='flex items-center gap-4'>
                    <div className='w-[90px] h-[90px] rounded-full overflow-hidden'>
                       <img src="/images/michael-dam-avatar.jpg" alt="avatar image" className='max-w-full'/>
                    </div>
                    <div className='text-left'>
                        <h3 className='mb-2 font-semibold text-xl'>Roger Scott</h3>
                        <p className='text-base'>Marketing Manager</p>
                    </div>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className=''>
                <div className='relative text-gray-600 py-7 px-6 w-9/12 max-w-2xl border border-gray-100 shadow-md'>
                  <div className='absolute top-[-20px] flex items-center justify-center w-4 h-4 p-3 bg-indigo-600 text-white rounded-md'>
                    <img src="/icons/quote-left-solid.svg" alt="quote icon"/>
                  </div>
                  
                  <p className='mb-6 text-left'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  
                  {/*  */}
                  <div className='flex items-center gap-4'>
                    <div className='w-[90px] h-[90px] rounded-full overflow-hidden'>
                       <img src="/images/michael-dam-avatar.jpg" alt="avatar image" className='max-w-full'/>
                    </div>
                    <div className='text-left'>
                        <h3 className='mb-2 font-semibold text-xl'>Roger Scott</h3>
                        <p className='text-base'>Marketing Manager</p>
                    </div>
                  </div>
                </div>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  );
}


