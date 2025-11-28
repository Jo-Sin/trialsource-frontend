import BarrierSection from "./sections/BarrierSection";
import ConnectionSection from "./sections/ConnectionSection";
import DiscoverySection from "./sections/DiscoverySection";
import EcosystemSection from "./sections/EcosystemSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TrustSection from "./sections/TrustSection";


const HomePage = () => {

    return (
        <>
            <HeroSection />
            <BarrierSection />
            <HowItWorksSection />
            <TrustSection />
            <ConnectionSection />
            <DiscoverySection />
            <EcosystemSection />
        </>
    )
}

export default HomePage;