import { menuList } from './core/menuList';
import { getData } from './core/function/getData';
import Navbar from './components/navbar';
import * as section from './components/section';

export default async function Home() {
  const { personalInformation } = await getData();
  const { Welcome } = section;

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <header className="w-full">
        <Navbar menuList={menuList} />
      </header>
      <main className="w-full max-w-[1024px]">
        <Welcome personalInformation={personalInformation} />
      </main>
    </div>
  );
}
