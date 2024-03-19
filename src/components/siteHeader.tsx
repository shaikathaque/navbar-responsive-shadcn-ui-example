import MainNav from './mainNav';
import MobileNav from './mobileNav';

export default function SiteHeader() {
  return (
    <header className="flex h-16 items-center border-b-2 px-5">
      <MainNav />
      <MobileNav />
    </header>
  );
}
