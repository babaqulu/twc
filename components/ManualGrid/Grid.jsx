import Image from 'next/image';
import GridStyle from './Grid.module.scss'

function Grid({
  img,
  gridDirection,
  HeroImg,
  gridInfo,
  regularText,
  GridPar,
  text,
  header,
  headerClass,
  GridWithHeader
}) {


  return (
    <div className={GridStyle[gridDirection]}>
      <Image
        width={2000}
        height={2000}
        className={GridStyle[HeroImg]}
        src={img}
        alt={'hero image'}
      />
            <div className={GridStyle.gridInfo} dangerouslySetInnerHTML={
        { __html: regularText ? `${regularText}`  : `${text}` }}></div>

    </div>
  );
}

export default Grid;
