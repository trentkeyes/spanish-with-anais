import './App.css';
import Nav from './components/Sections/Nav';
import Hero from './components/Sections/Hero';
import Counter from './components/Sections/StatsCard';
import ClassesDescription from './components/Sections/ClassesDescription';
import Layout from './components/Layout';
import ReviewsCarousel from './components/Sections/ReviewsCarousel';
import Pricing from './components/Sections/Pricing';
import About from './components/Sections/About';
import TeacherCalendar from './components/Sections/TeacherCalendar';
import Contact from './components/Sections/Contact';
import BackgroundGray from './components/BackgroundGray';
import ReviewCard from './components/ReviewCard';

function App() {
  return (
    <>
      <Layout>
        <Nav />
        <Hero />

        <Counter />
        <ClassesDescription />
        <ReviewsCarousel />
        <ReviewCard />
        <Pricing />
        <Contact />
        <About />
        <TeacherCalendar />
      </Layout>
    </>
  );
}

export default App;
