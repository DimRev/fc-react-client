import AppDiv from "~/features/layout/components/AppDiv";
import AppHero from "~/features/layout/components/AppHero";
import AppPage from "~/features/layout/components/AppPage";
import {
  H1,
  ListItem,
  P,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  UnorderedList,
} from "~/features/shared/components/Typography";

function HomePage() {
  return (
    <AppPage testId="page-home">
      <AppHero>
        <H1>Home Page - Hero Section</H1>
      </AppHero>
      <AppDiv>
        <P>This is the home page.</P>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>King's Treasury</TableHeadCell>
              <TableHeadCell>People's Happiness</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Empty</TableCell>
              <TableCell>Overflowing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Modest</TableCell>
              <TableCell>Satisfied</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Full</TableCell>
              <TableCell>Ecstatic</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <UnorderedList>
          <ListItem>1st level of puns: 5 gold coins</ListItem>
          <ListItem>2nd level of jokes: 10 gold coins</ListItem>
          <ListItem>3rd level of one-liners : 20 gold coins</ListItem>
        </UnorderedList>
      </AppDiv>
    </AppPage>
  );
}

export default HomePage;
