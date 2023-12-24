import { menuList } from './core/menuList';
import { getData } from './core/function/getData';
import Navbar from './components/navbar';
import Welcome from './components/section/welcome';
import AboutMe from './components/section/aboutMe';
import Work from './components/section/work';

export default async function Home() {
  const { personalInformation, work } = await getData();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <header className="w-full">
        <Navbar menuList={menuList} />
      </header>
      <main className="w-full max-w-[1044px] px-5">
        <Welcome personalInformation={personalInformation} />
        <div className="flex flex-col gap-20">
          <AboutMe message={personalInformation.aboutMe} />
          <Work work={work} />
        </div>
      </main>
    </div>
  );
}
