import Collection from './_components/collection';
import Feature from './_components/feature';
import Herosection from './_components/hero';
import PromoSection from './_components/promo';
import Section from './_components/section';
import Footers from './_components/footers';
import NFTCards from './_components/nftCards';

export default function Home() {
  return (
    <main className='max-w-screen-xl px-4 py-8 lg:px-8 mx-auto'>
      <Herosection />
      <PromoSection />
      <Collection />
      <Feature />
      <Section />
      <NFTCards />
      <Footers />
    </main>
  );
}
