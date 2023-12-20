import Herosection from './_components/hero';
import PromoSection from './_components/promo';

export default function Home() {
  return (
    <main className='max-w-screen-xl px-4 py-8 my-20  sm:py-12 sm:px-6 lg:px-8 mx-auto'>
      <Herosection />
      <PromoSection />
    </main>
  );
}
