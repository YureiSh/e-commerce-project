import PageContent from "../layout/PageContent";
import ContactCta from "./page-components/ContactPage/ContactCta";
import ContactHeader from "./page-components/ContactPage/ContactHeader";
import ContactMain from "./page-components/ContactPage/ContactMain";

function ContactPage(){
    
    return(
        <PageContent keepContactHeader={false} >
            <ContactHeader/>
            <ContactMain/>
            <ContactCta/>
        </PageContent>
    );
}
export default ContactPage; 