

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/free-mode';
import 'swiper/css/pagination'


import LastMemberStyle from './lastTeamMembers.module.scss'

import MemberCard from "../Cards/MemberCard/MemberCard"


import getWorkers from '@/services/api/getWorkers';

async function LastTeamMembers() {
  const workers = getWorkers()
  const workersData = await workers
  workersData.filter((a)=>a.is_last_project===true).map((a)=>a.name)
  
  return (
    <div className={LastMemberStyle.container}>
      <h1 className={LastMemberStyle.header}>Ən son layihədə iştirak edən komanda üzvlərimiz </h1>
      <div className={LastMemberStyle.cardDiv}>
        {
          workersData.filter((worker)=>worker.is_last_project===true).map((lastWorker)=>{
            return(
              <MemberCard
              key={lastWorker.id}
              img={lastWorker.image}
              name={lastWorker.name}
              desc={lastWorker.status}
              education={lastWorker.education}
              Linkedinlink={'https://www.linkedin.com/feed/'}
              FacebookLink={'https://www.facebook.com/home.php'}
              InstagramLink={'https://www.instagram.com/'}
              />
            )
          })
        }

      </div>

    </div>
    // <div>
    //   <h1 className={LastMemberStyle.header}>Ən son layihədə iştirak edən komanda üzvlərimiz </h1>
    // <Swiper
    //     slidesPerView={3}
    //     spaceBetween={0}
    //     freeMode={true}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[FreeMode, Pagination]}
    //     className={LastMemberStyle.longCardsMySwiper}
    //     // breakpoints={{
    //     //   768: {
    //     //     slidesPerView: 3,
    //     //     spaceBetween: 10,
    //     //   }
    //     // }}
    //     >

    //   <SwiperSlide>
    //   <MemberCard
    //   img={Aynurimg}
    //   name={'Aynur sssssss'}
    //   desc={'Biznes Konsultant Təhsil: Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı'}
    //   Linkedinlink={'https://www.linkedin.com/feed/'}
    //   FacebookLink={'https://www.facebook.com/home.php'}
    //   InstagramLink={'https://www.instagram.com/'}
    //   />
    //   </SwiperSlide>

    //   <SwiperSlide>
    //   <MemberCard
    //   img={Aynurimg}
    //   name={'Aynur aaaa'}
    //   desc={'Biznes Konsultant Təhsil: Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı'}
    //   Linkedinlink={'https://www.linkedin.com/feed/'}
    //   FacebookLink={'https://www.facebook.com/home.php'}
    //   InstagramLink={'https://www.instagram.com/'}
    //   />
    //   </SwiperSlide>

    //   <SwiperSlide>
    //   <MemberCard
    //   img={Aynurimg}
    //   name={'Aynur vvvvv'}
    //   desc={'Biznes Konsultant Təhsil: Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı'}
    //   Linkedinlink={'https://www.linkedin.com/feed/'}
    //   FacebookLink={'https://www.facebook.com/home.php'}
    //   InstagramLink={'https://www.instagram.com/'}
    //   />
    //   </SwiperSlide>

    // </Swiper>
    // </div>
  )
}

export default LastTeamMembers
