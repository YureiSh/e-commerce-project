import PageContent from "../layout/PageContent";
import AboutCta from "./page-components/AboutUsPage/AboutCta";
import AboutHero from "./page-components/AboutUsPage/AboutHero";
import AboutMain from "./page-components/AboutUsPage/AboutMain";

function AboutUsPage() {

    return(
    <PageContent keepContactHeader={false} >
        <AboutHero />
        <AboutMain />
        <AboutCta />
    </PageContent>
    );
}
export default AboutUsPage;