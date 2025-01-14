import HeaderStyle from './headerStyle.module.scss'

function Header({headline, theCompHeader}) {
  return (
        <h3 className={`${HeaderStyle.theHeader} ${HeaderStyle[theCompHeader]}`}>
        {headline}
      </h3>

  )
}

export default Header
