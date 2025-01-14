import Style from './improveBussiness.module.scss'

function improveBussiness({text}) {
  return (
<div className={Style.improveBussiness}>
          <h3 className={Style.improveHeader}>Biznesinizi bizimlə inkişaf etdirin</h3>
          <div className={Style.improveDesc} dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
        </div>
  )
}

export default improveBussiness
