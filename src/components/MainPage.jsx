import "./MainPage.css";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
import { default as Third } from "./ThirdSection"; //alias import
import { FourthSection } from "./FourthSection";
import { FifthSection } from "./FifthSection";
import SixthSection from "./SixthSection"; //
import Footer from "./FooterSection"; //default
import { HeaderSection } from "./HeaderSection";

function MainPage() {
  return (
    <main>
      <HeaderSection></HeaderSection>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Third></Third>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
      <hr className="horizontal" />
      <Footer></Footer>
    </main>
  );
}

export { MainPage };
