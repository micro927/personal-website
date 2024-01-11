import { data } from './core/data';
import { menuList } from './core/presentation/menuList';
import Navbar from './components/navbar';
import Welcome from './components/section/welcome';
import Work from './components/section/work';
import TechStacks from './components/section/techStacks';
import Education from './components/section/education';
import Footer from './components/footer';
import OnboardingDisplay from './components/onboardingMessageDisplay';
import { OnboardingMessageProvider } from './components/onboardingMessageProvider';
import GoogleAnalyticScript from './components/googleAnalyticScript';

export default async function Home() {
  const { personalInformation, works, techSkills, educations } = data;
  const currentWorkSkillIdList = [...works].reverse()[0].skillList;

  return (
    <OnboardingMessageProvider>
      <div className="flex min-h-screen w-screen flex-col items-center">
        <header className="w-full">
          <Navbar menuList={menuList} />
        </header>
        <main className="flex w-full flex-col">
          <Welcome personalInformation={personalInformation} />
          <Work works={works} />

          <TechStacks
            skills={techSkills}
            currentWorkSkillIdList={currentWorkSkillIdList}
          />
          <Education educations={educations} />
        </main>
        <Footer />
        <OnboardingDisplay />
      </div>
      <GoogleAnalyticScript />
    </OnboardingMessageProvider>
  );
}
