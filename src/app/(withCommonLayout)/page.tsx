import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection'
import HowWorks from '@/components/UI/HomePage/HowWorks/HowWorks'
import Specialist from '@/components/UI/HomePage/Specialist/Specialist'
import TopRelatedDoctors from '@/components/UI/HomePage/TopRelatedDoctors/TopRelatedDoctors'
import WhyUs from '@/components/UI/HomePage/WhyUs/WhyUs'

export default function Home() {
  return (
  <div>
 <HeroSection />
 <Specialist />
 <TopRelatedDoctors />
 <WhyUs />
 <HowWorks />
  </div>
  )
}
