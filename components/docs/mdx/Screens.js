import Image from 'next/image';
import { getLocalImageSize } from '@/lib/utils/imageSize';
import ScreensCarousel from './ScreensCarousel';

/**
 * Captures d'écran présentées en carrousel
 * <Screens items={[{ src: '/screens/a.png', alt: '...', caption: '...' }, ...]} />
 */
export default function Screens({ items }) {
  const slides = items.map(({ src, alt, caption }) => {
    const size = getLocalImageSize(src);
    return {
      caption,
      image: size
        ? <Image src={src} alt={alt || caption || ''} width={size.width} height={size.height} sizes="(max-width: 991px) 100vw, 990px" />
        // eslint-disable-next-line @next/next/no-img-element
        : <img src={src} alt={alt || caption || ''} />,
    };
  });
  return <ScreensCarousel slides={slides} />;
}
