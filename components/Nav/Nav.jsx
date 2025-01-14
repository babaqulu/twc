"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import navStyles from "./nav.module.scss";
import Language from "../Language/Language";
import HamburgerMenu from "@/public/icons/hamburgermenu.png"
import NavSm from "../NavSm/NavSm";


function Nav({
  consaltingServicesData,
  linkedinIcon,
  facebookIcon,
  instagramIcon,
  socialmediaIconColor,
  Logo,
  serviceListLinkColor,
  language_btnColor,
  languageIconColor,
  languageDropIconColor,
  languageIcon,
  languageDropArrow,
  colorClass,
  infoContainerColor,
  contactTextColor,
  navListLinkColor,
  logoImgColor,
  navMini,
  activeNavMini,
  dropIcon,
  dropIconColor,
}) {
  const pathname = usePathname()

  const [active, setActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdownAboutSm, setActiveDropdownAboutSm] = useState(null);
  const [activeDropdownServicesSm, setActiveDropdownServicesSm] = useState(null);
  const [isPageRefreshed, setIsPageRefreshed] = useState(false);
  let menuRef = useRef();



  //Scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setActive(scrollPosition > 0);
    localStorage.setItem("scrollPosition", scrollPosition); 
  };

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      
      setActive(parseInt(savedPosition, 10) > 0); 
    }

    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };
  }, []);
  //Scroll event end

  //Outside Click
  useEffect(()=>{
    let handler = (e)=>{
      if (!menuRef.current.contains(e.target)){
        setActiveDropdown(null)
      }
    };
    document.addEventListener("mousedown", handler)

    return ()=>{
      document.removeEventListener("mousedown", handler)
    }
  },[])

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const isReload = navigation && navigation.type === "reload";
    if (!isReload) {
      // Only scroll to top on navigation, not refresh
      window.scrollTo(0, 0);
    }
    setIsPageRefreshed(isReload);
  }, [pathname]);


  return (
    <div 
    ref={menuRef}
      className={
        active
          ? `${navStyles.activeNavbar} ${navStyles[activeNavMini]}`
          : `${navStyles.navbar} ${navStyles[colorClass]} ${navStyles[navMini]}`
      }
    >
      <div className={navStyles.bigDevice}>
      <div
        className={
          activeDropdown ? navStyles.activeMainNav : navStyles.mainNav
        }
      >
        <div
          className={`${navStyles.infoContainer} ${navStyles[infoContainerColor]}`}>

          <div className={navStyles.contact}>
            <p
              className={`${navStyles.contactText} ${navStyles[contactTextColor]}`}
            >
              info@thinkwise.az
            </p>
            <p
              className={`${navStyles.contactText} ${navStyles[contactTextColor]}`}
            >
              +994 50 447 10 90
            </p>
          </div>

          <div className={navStyles.socialmedia}>
            <Link href='/'>
            <Image
              width={10}
              height={10}
              className={navStyles[socialmediaIconColor]}
              src={linkedinIcon}
              alt="Linkedin Icon"
              />
            </Link>
            <Link href='/'>
            <Image
              width={6}
              height={12}
              className={navStyles[socialmediaIconColor]}
              src={facebookIcon}
              alt="Facebook Icon"
              />
            </Link>
            <Link href='/'>
            <Image
              height={11}
              width={11}
              className={navStyles[socialmediaIconColor]}
              src={instagramIcon}
              alt="Instagram Icon"
              />
            </Link>
          </div>
        </div>

        <div className={navStyles.navContainer}>
          <Link href="/" className={navStyles.logo}>
            <Image width={85} height={24} className={navStyles[logoImgColor]} src={Logo} alt="Logo" />
          </Link>

          <ul className={navStyles.navMenu} >
            <li>
              <Link
                href="/"
                className={`${navStyles.navListLink} ${navStyles[navListLinkColor]}`}
                
              >
                Əsas səhifə
              </Link>
            </li>
            {consaltingServicesData
              .filter((a) => a.subcategory.length > 0)
              .map((a) => (
                <li
                
                  className={
                    activeDropdown === a.name
                      ? `${navStyles.navListLinkActive}`
                      : `${navStyles.navListLink} ${navStyles[navListLinkColor]}`
                  }
                  value={a.name}
                  key={a.id}
                  onClick={() => {
                    if (activeDropdown === a.name) {
                      setActiveDropdown(null); // Deactivate if already active
                    } else {
                      setActiveDropdown(a.name); // Activate the clicked item
                    }
                  }}
                >
                  {a.name}
                  <Image
                    className={`${navStyles.dropIcon} ${navStyles[dropIconColor]}`}
                    height={6}
                    width={7}
                    src={dropIcon}
                    alt="Navbar section drop down icon"
                  />
                </li>
              ))}
            {consaltingServicesData
              .filter((a) => a.subcategory.length === 0)
              .map((a) => (
                <Link
                  href={
                    a.name === "Məqalələr"
                      ? "/blogs"
                      : a.name === "Karyera"
                      ? "/karyera"
                      : a.name === "Əlaqə"
                      ? "/elaqe"
                      : "/"
                  }
                  className={`${navStyles.navListLink} ${navStyles[navListLinkColor]}`}
                  key={a.id}
                >
                  {a.name}
                </Link>
              ))}
          </ul>

          <Language
            language_btnColor={language_btnColor}
            languageIconColor={languageIconColor}
            languageDropIconColor={languageDropIconColor}
            languageIcon={languageIcon}
            languageDropArrow={languageDropArrow}
          />
        </div>
      </div>

      <div
      ref={menuRef}
        className={
          activeDropdown
            ? `${navStyles.dropDownNavbar}`
            : `${navStyles.dropDownNone}`
        }
      >
        {consaltingServicesData
          .filter((b) => b.name === activeDropdown)
          .map((c) => (
            <>
              <h3 key={c.id} className={navStyles.dropDownTitle}>
                {c.name}
              </h3>
              <div  className={navStyles.dropDownSelections}>
                {c.subcategory.map((d) => (
                  <Link
                  
                    href={
                      d.name === "Məxfilik siyasəti"
                        ? "/privacyPolicy"
                        : d.name === "FAQ"
                        ? "/faq"
                        : d.name === "Haqqımızda"
                        ? "/haqqimizda"
                        : d.name === "Partnyor və müştərİlərimiz"
                        ? "/haqqimizda/partners-clients"
                        : c.name === "Konsaltinq Xidmətləri"
                        ? `/haqqimizda/xidmetler/${d.id}`
                        : "/"
                    }
                    onClick={() => {
                      setActiveDropdown(null);
                    }}
                    key={d.id}
                    className={navStyles.dropDownSelection}
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </>
          ))}
        <div className={navStyles.dropDownLine}></div>
      </div>
      </div>

      <div className={navStyles.smallDevice}>
        <NavSm
          consaltingServicesData = {consaltingServicesData}
          Logo={Logo}
          serviceListLinkColor={serviceListLinkColor}
          language_btnColor={language_btnColor}
          languageIconColor={languageIconColor}
          languageDropIconColor={languageDropIconColor}
          languageIcon={languageIcon}
          languageDropArrow={languageDropArrow}
          colorClass={colorClass}
          infoContainerColor={infoContainerColor}
          contactTextColor={contactTextColor}
          navListLinkColor={navListLinkColor}
          logoImgColor={logoImgColor}
          navMini={navMini}
          activeNavMini={activeNavMini}
          dropIcon={dropIcon}
          dropIconColor={dropIconColor}/>
      </div>
    </div>
  );
}

export default Nav;
