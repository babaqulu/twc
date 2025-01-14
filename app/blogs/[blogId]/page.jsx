
import blogStyle from './blog.module.scss'

import linkedinIconBlack from '../../../public/icons/linkedinBlack.png'
import facebookIconBlack from '../../../public/icons/facebookBlack.png'
import instagramIconBlack from '../../../public/icons/instagram-dark.png'
import LogoBlack from '../../../public/icons/logoBlack.png'
import LanguageIconBlack from '../../../public/icons/languageBlack.png'
import DropArrowBlack from "../../../public/icons/downArrowBlack.png"


import Image from 'next/image'
import Link from 'next/link'

import getBlog from "@/services/api/getBlog"
import getAllBlogs from "@/services/api/getAllBlogs"

import getConsaltingServices from '@/services/api/getConsaltingServices';
import Nav from '@/components/Nav/Nav'

export const metadata = {
  title: 'Blog'
}

export default async function Blog({ params }) {
  const consaltingServicesData = await getConsaltingServices()
  const blogs = getAllBlogs()
  const blog = getBlog(params.blogId)
  const [blogsData, blogData] = await Promise.all([blogs, blog])
  return (
    <div>
      <nav className={blogStyle.blogNav}>
      <Nav
        consaltingServicesData={consaltingServicesData}
        navMini={'navMini'}
        activeNavMini={'activeNavMini'}
        contactTextColor={'contactTextBlack'}
        linkedinIcon={linkedinIconBlack}
        facebookIcon={facebookIconBlack}
        instagramIcon={instagramIconBlack}
        socialmediaIconColor={'socialmediaIconColorBlack'}
        Logo={LogoBlack}
        logoImgColor={'logoImgBlack'}
        navListLinkColor={'navListLinkBlack'}
        serviceListLinkColor={'serviceListLinkBlack'}
        heroTitle={'heroTitleBlack'}
        language_btnColor={'language_btnBlack'}
        languageIconColor={'languageIconBlack'}
        languageDropIconColor={'languageDropIconBlack'}
        languageIcon={LanguageIconBlack}
        languageDropArrow={DropArrowBlack}
        infoContainerColor={'infoContainerBlack'}
        dropIcon={DropArrowBlack}
        dropIconColor={'downArrowBlack'}/>
      </nav>

      <div className={blogStyle.wrapper}>
        <div className={blogStyle.descWrapper}>
        <Image
        width={2000}
        height={2000}
        className={blogStyle.descImg}
        alt={"Blog hero image"}
        src={blogData.image}/>
        <h1 className={blogStyle.blogHeader}>{blogData.title}</h1>
        <div className={blogStyle.blogDesc} dangerouslySetInnerHTML={{ __html: blogData.main_description }}></div>
        
        </div>
        <div className={blogStyle.latestBlogs}>
          <h4 className={blogStyle.cardHeader}>Ən son məqalələr</h4>

        <div className={blogStyle.blogsList}>
        {
          blogsData.filter((_,b)=>blogsData.length-3>=b).map((blog)=>{
            return(
              <Link
              key={blog.id}
              className={blogStyle.latestCardLink}
              href={`/blogs/${blog.id}`}>
              <Image
              width={2000}
              height={2000}
              className={blogStyle.latestCardImg}
              alt='Latest'
              src={blog.image}/>
              <div className={blogStyle.latestCardText}>
              <p className={blogStyle.date}>{blog.created_date}</p>
              <p className={blogStyle.title}>{blog.description.slice(0,50)+'...'}</p>
              </div>
              
              </Link>
            )
          })
        }

        </div>
          
        </div>
      </div>
      


    </div>
  )
}


