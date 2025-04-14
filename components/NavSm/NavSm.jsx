"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import navStyles from "../Nav/nav.module.scss";
import Language from "../Language/Language";
import HamburgerMenu from "@/public/icons/hamburgermenu.png"


function NavSm({
  consaltingServicesData,
  Logo,
  language_btnColor,
  languageIconColor,
  languageDropIconColor,
  languageIcon,
  languageDropArrow,
  colorClass,
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
  const [activeHamburger, setactiveHamburger] = useState(false);
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
        setactiveHamburger(false)
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
      <div
        className={
          activeDropdown ? navStyles.activeMainNav : navStyles.mainNav
        }
      >
        <div className={navStyles.navContainer}>
          <Link href="/" className={navStyles.logo}>
            <Image width={85} height={24} className={navStyles[logoImgColor]} src={Logo} alt="Logo" />
          </Link>

          
          {/* Small devices navbar */}
          {
            activeHamburger &&
            <ul className={navStyles.navMenuSm} >
          
            <li>
              <Link
                href="/"
                className={`${navStyles.navListLink} ${navStyles[navListLinkColor]}`}
              >
                Əsas səhifə
              </Link>
            </li>

            {/* Small devices about drop down */}
            {consaltingServicesData
              .filter((a) => a.subcategory.length > 0 && a.name === "Haqqımızda")
              .map((a) => (
                <li
                  className={
                    activeDropdownAboutSm === a.name
                      ? `${navStyles.navListLinkActive}`
                      : `${navStyles.navListLink} ${navStyles[navListLinkColor]}`
                  }
                  value={a.name}
                  key={a.id}
                  onClick={() => {
                    if (activeDropdownAboutSm === a.name) {
                      setActiveDropdownAboutSm(null); // Deactivate if already active
                    } else {
                      setActiveDropdownAboutSm(a.name); // Activate the clicked item
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
              <div
        className={
        activeDropdownAboutSm
          ? `${navStyles.dropDownNavbarSm}`
          : `${navStyles.dropDownNone}`
      }
    >
      {consaltingServicesData
        .filter((a) => a.subcategory.length > 0 && a.name === "Haqqımızda")
        .map((c) => (
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
                    setActiveDropdownAboutSm(null);
                  }}
                  key={d.id}
                  className={navStyles.dropDownSelection}
                >
                  {d.name}
                </Link>
              ))}
            </div>
        ))}
              </div>

          {/* Small devices services drop down */}
            {consaltingServicesData
              .filter((a) => a.subcategory.length > 0 && a.name === "Konsaltinq xidmətləri")
              .map((a) => (
                <li
                  className={
                    activeDropdownServicesSm === a.name
                      ? `${navStyles.navListLinkActive}`
                      : `${navStyles.navListLink} ${navStyles[navListLinkColor]}`
                  }
                  value={a.name}
                  key={a.id}
                  onClick={() => {
                    if (activeDropdownServicesSm === a.name) {
                      setActiveDropdownServicesSm(null); // Deactivate if already active
                    } else {
                      setActiveDropdownServicesSm(a.name); // Activate the clicked item
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
              <div
        className={
        activeDropdownServicesSm
          ? `${navStyles.dropDownNavbarSm}`
          : `${navStyles.dropDownNone}`
      }
    >
      {consaltingServicesData
        .filter((b) => b.name === activeDropdownServicesSm)
        .map((c) => (
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
                    setActiveDropdownServicesSm(null);
                  }}
                  key={d.id}
                  className={navStyles.dropDownSelection}
                >
                  {d.name}
                </Link>
              ))}
            </div>
        ))}
              </div>


            {consaltingServicesData
              .filter((a) => a.subcategory.length === 0)
              .map((a) => (
                <Link
                  href={
                    a.link}
                  className={`${navStyles.navListLink} ${navStyles[navListLinkColor]}`}
                  key={a.id}
                >
                  {a.name}
                </Link>
              ))}
            </ul>
          }
          <div className={navStyles.hamburgerWrapper}>
          <button className={navStyles.hamburger}
          onClick={()=>
            {setactiveHamburger(!activeHamburger)
            setActiveDropdown(!activeDropdown)}
          }>
          <Image
          width={42}
          height={15}
          alt="Hamburger menu button"
          src={HamburgerMenu}
          />
          </button>
          <Language
            language_btnColor={language_btnColor}
            languageIconColor={languageIconColor}
            languageDropIconColor={languageDropIconColor}
            languageIcon={languageIcon}
            languageDropArrow={languageDropArrow}
          />
          </div>



        </div>
      </div>

    </div>
  );
}

export default NavSm;
