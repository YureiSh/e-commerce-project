import { carouselImages } from "../constants/constants";
import PageContent from "../layout/PageContent";
import TeamHeader from "./page-components/TeamPage/TeamHeader";
import TeamMain from "./page-components/TeamPage/TeamMain";

function TeamPage(){
    
    return(
    <>
        <PageContent keepContactHeader={false} >
            <TeamHeader images={carouselImages} />
            <TeamMain />
        </PageContent>
    </>
    );
}
export default TeamPage;