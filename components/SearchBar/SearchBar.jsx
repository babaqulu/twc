"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import Image from 'next/image'
import searchStyle from './searchStyle.module.scss'
import MagnifyingGlass from "@/public/icons/magnifyingGlass.png"


function SearchBar() {
const [ isTyping, setIsTyping ] = useState(false)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const handleSearch = (searchTerm) => {
  //   const params = new URLSearchParams(searchParams);
  //   if (searchTerm) {
  //     params.set("query", searchTerm);
  //   } else {
  //     params.delete("query");
  //   }
  //   replace (`${pathname}?${params.toString()}`);
  // };

  const handleSearch = useDebouncedCallback((value)=>{
    const params = new URLSearchParams(searchParams);
    setIsTyping(value.trim() !== "");
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace (`${pathname}?${params.toString()}`, {scroll:false})
  }, 500) 


  return (
    <div className={searchStyle.main}>
      <input 
      className={searchStyle.search} 
      placeholder='Axtar' 
      type="search"
      defaultValue={searchParams.get('query')?.toString()}
      onChange={(e)=>{
        handleSearch(e.target.value)
      }}/>
      <Image
      src={MagnifyingGlass}
      alt='search icon'/>
      
    </div>
  )
}

export default SearchBar
