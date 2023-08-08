import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Counter from './components/StatsCard';
import ClassesDescription from './components/ClassesDescription';
import Layout from './components/Layout';
import ReviewsCarousel from './components/ReviewsCarousel';

function App() {
  return (
    <>
      <Layout>
        <Nav />
        <Hero />
        <Counter />
        <ClassesDescription />
        <ReviewsCarousel />
        <h1>What my students say carosuel</h1>
        <h1>Pricing</h1>
        <h1>Contact</h1>
        <h1>About</h1>
        <h1>Calendar on separate page</h1>
      </Layout>
    </>
  );
}

export default App;
