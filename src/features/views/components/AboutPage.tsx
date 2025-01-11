import AppDiv from "~/features/layout/components/AppDiv";
import AppHero from "~/features/layout/components/AppHero";
import AppPage from "~/features/layout/components/AppPage";
import { H1, P } from "~/features/shared/components/Typography";

function AboutPage() {
  return (
    <AppPage testId="page-about">
      <AppHero>
        <H1>About Page - Hero Section</H1>
      </AppHero>
      <AppDiv>
        <P>This is the about page.</P>
      </AppDiv>
    </AppPage>
  );
}

export default AboutPage;
