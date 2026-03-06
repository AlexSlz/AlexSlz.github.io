import MyLinks from './components/MyLinks';
import MyProjects from './components/MyProjects';
import MyTitle from './components/MyTitle';

export default function App() {
  return (
    <main>
      <MyTitle />
      <MyProjects />
      <MyLinks />
      <div id="bg"></div>
    </main>
  );
}
