import DefaultNavbar from "components/default/DefaultNavbar";
import Header from "components/default/Header";
import PostSection from "components/default/PostSection";

export default function Home() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <PostSection />
      </main>
      {/* <DefaultFooter /> */}
    </>
  );
}
