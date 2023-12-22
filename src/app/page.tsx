import Collection from './_components/collection';
import Feature from './_components/feature';
import Herosection from './_components/hero';
import PromoSection from './_components/promo';
import Section from './_components/section';
import Footers from './_components/footers';
import NFTCards from './_components/nftCards';
import Navbar from './_components/navbar';

export default function Home() {
  return (
    <main className='max-w-screen-xl px-4 py-4 lg:px-8 mx-auto'>
      <Navbar />
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
