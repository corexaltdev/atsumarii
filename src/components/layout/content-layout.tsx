import Header from '../header';
import Footer from '../footer';

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
        <main className="bg-background">
          <div className="space-y-6 w-full">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
}
