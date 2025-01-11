import AppDiv from "~/features/layout/components/AppDiv";
import AppHero from "~/features/layout/components/AppHero";
import AppPage from "~/features/layout/components/AppPage";
import { H1, P } from "~/features/shared/components/Typography";

function ContactPage() {
  return (
    <AppPage testId="page-contact">
      <AppHero>
        <H1>Content Page - Hero Section</H1>
      </AppHero>
      <AppDiv>
        <P>This is the content page.</P>
      </AppDiv>
    </AppPage>
  );
}

export default ContactPage;
