import { HelmetProvider, Helmet } from "react-helmet-async";
import scss from "./Home.module.scss";

const Home = () => (
  <HelmetProvider>
    <Helmet>
      <title>Phonebook</title>
    </Helmet>
    <div className={scss.box}>
      <h1 className={scss.title}>
        <p>Unlock your phonebook</p>
        <p>☎</p>
      </h1>
    </div>
  </HelmetProvider>
);

export default Home;
