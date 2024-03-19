import SiteHeader from '@/components/siteHeader';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center">
        <h1>Responsive Navbar using Shadcn/ui</h1>
      </div>
    </div>
  );
}

export default App;
