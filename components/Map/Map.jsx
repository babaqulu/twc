

"use client"

import ElaqeStyle from '../../app/[locale]/elaqe/elaqeStyle.module.scss'
function Map() {
  return (
    <div className={ElaqeStyle.map}>
      <iframe
        className={ElaqeStyle.mapImg}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3622078849808!2d49.87192827640088!3d40.378664257954554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5b16f03049%3A0x8b233276e2e00004!2sAzure%20Business%20Center!5e0!3m2!1saz!2saz!4v1716538324954!5m2!1saz!2saz"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Set referrerPolicy attribute
      ></iframe>
    </div>
  );
}

export default Map;
