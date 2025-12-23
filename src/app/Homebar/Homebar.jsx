import Footer from "@/components/global/footer/footer";
import Header from "@/components/global/header/header";
import MiddleSection from "@/components/global/MiddleSection/MiddleSection";
import PartnerSection from "@/components/global/PartnerSection/PartnerSection";
import TopMenuBar from "../TopMenuBar/TopMenuBar";
export default function Homebar() {
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