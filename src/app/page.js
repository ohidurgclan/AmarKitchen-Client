
import TopMenuBar from "./TopMenuBar/TopMenuBar";
import Header from "./components/global/header/header";
import Footer from "./components/global/footer/footer";
import MiddleSection from "./components/global/MiddleSection/MiddleSection";
import PartnerSection from "./components/global/PartnerSection/PartnerSection";
export default function Home() {
  return (
    <>
    <TopMenuBar/>
    <Header/>
    <MiddleSection/>
    <PartnerSection/>
    <Footer/>
    </>
  );
}