import { menuList } from './core/menuList';
import { getData } from './core/function/getData';
import Navbar from './components/navbar';
import Welcome from './components/section/welcome';
import AboutMe from './components/section/aboutMe';
import Work from './components/section/work';
import TechStacks from './components/techStacks';

export default async function Home() {
  const { personalInformation, work, techSkills } = await getData();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <header className="w-full">
        <Navbar menuList={menuList} />
      </header>
      <main className="flex w-full max-w-[1044px] flex-col gap-20 px-5">
        <Welcome personalInformation={personalInformation} />
        <AboutMe message={personalInformation.aboutMe} />
        <Work work={work} />
        <TechStacks stacks={techSkills} work={work} />
      </main>
    </div>
  );
}
