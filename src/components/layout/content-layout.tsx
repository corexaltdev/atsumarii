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
        <main className="bg-background">{children}</main>
      </div>
      <Footer />
    </>
  );
}
