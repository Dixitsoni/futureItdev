import AboutUs from './components/aboutus/AboutUs'
import ClientSection from './components/clientsection/ClientSection'
import Contact from './components/contact/Contact'
import CtaSection from './components/ctasection/CtaSection'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroSection from './components/herosection/HeroSection'
import Internship from './components/internship/Internship'
import Model from './components/model/Model'
import PortfolioSection from './components/portfoliosection/PortfolioSection'
// import PriceSection from './components/pricesection/PriceSection'
import ServiceSection from './components/servicesection/ServiceSection'
import SkillSection from './components/skillsection/SkillSection'
import TeamSection from './components/teamsection/TeamSection'
import WhyUs from './components/whyus/WhyUs'

export default function Home() {

  if (typeof window != 'undefined') {
    require("./assets/js/main.js")
  }

  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <main id="main">
          <AboutUs />
          {/* <WhyUs /> */}
          <PortfolioSection />
          <ClientSection />
          <SkillSection />
          <Internship />
          <ServiceSection />
          <CtaSection />
          <TeamSection />
          {/* <PriceSection /> */}
          {/* <Faq /> */}
          <Contact />
        </main>
        <Footer />
        <Model />
      </main>
    </>
  )
}
