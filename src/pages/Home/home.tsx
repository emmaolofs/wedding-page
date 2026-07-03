import { Box, Container, Grid } from "@mantine/core";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { CountdownSection } from "./components/CountdownSection";
import { SaveTheDateHero } from "./components/SaveTheDateHero";
import { WeddingLocationSection } from "./components/WeddingLocationSection";
import { WeddingDetailsSection } from "./components/WeddingDetailsSection";
import classes from "./home.module.css";

function Home() {
  return (
    <Box className={classes.page}>
      <Box className={classes.langSwitcher}>
        <LanguageSwitcher />
      </Box>

      <SaveTheDateHero />

      <Box className={classes.infoSection}>
        <Container size="lg">
          <Box className={classes.infoCardsOverlap}>
            <Grid columns={14} gap={{ base: "lg", md: "xl" }} align="stretch">
            <Grid.Col span={{ base: 14, md: 4 }}>
              <Box className={`${classes.infoCard} ${classes.infoCardSide}`}>
                <WeddingLocationSection />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 14, md: 6 }}>
              <Box className={`${classes.infoCard} ${classes.infoCardCountdown}`}>
                <CountdownSection />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 14, md: 4 }}>
              <Box className={`${classes.infoCard} ${classes.infoCardSide}`}>
                <WeddingDetailsSection />
              </Box>
            </Grid.Col>
          </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
