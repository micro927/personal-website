import { menuList } from './core/menuList';
import { getData } from './core/function/getData';
import Navbar from './components/navbar';
import Welcome from './components/section/welcome';
import Work from './components/section/work';
import TechStacks from './components/section/techStacks';
import Education from './components/section/education';
import Footer from './components/footer';

export default async function Home() {
  const { personalInformation, work, techSkills, education } = await getData();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <header className="w-full">
        <Navbar menuList={menuList} />
      </header>
      <main className="flex w-full flex-col">
        <Welcome personalInformation={personalInformation} />
        <Work work={work} />
        <TechStacks skills={techSkills} work={work} />
        <Education education={education} />
      </main>
      <Footer />
    </div>
  );
}
