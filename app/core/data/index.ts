import {
  Data,
  JobTypeEnum,
  LanguageSkillLevelEnum,
  TechSkillIdEnum,
  TechSkillTypeEnum,
} from '../types/data';

export const data: Data = {
  personalInformation: {
    name: 'Sitthiphon',
    surname: 'Skulphan',
    nameTH: 'สิทธิพล',
    surnameTH: 'สกุลพรรณ์',
    nickname: 'Micro',
    born: '1992-05-08',
    hometown: 'Chiang Mai, Thailand',
    phone: '084-172-2554',
    email: 'sitthiphon.s@outlook.com',
    linkedin: 'linkedin.com/in/sitthiphon-skulphan',
    github: 'github.com/micro927',
    facebook: 'facebook.com/nsBelieve',
    mainJobTitle: 'Software developer',
    aboutMe:
      "I'm Software developer with experience in Front-end developer for software company, and 3+ years of experience in Full stack developer for Thailand public university. Focusing on user experience on client-side and performance on server-side. Fully believe that technology will make the people's life better and easier. Still passionate in learning new useful skills, frameworks and tools for improve development efficiency and productivity.",
  },
  works: [
    {
      jobNo: 0,
      jobTitle: 'University Officer (non programming job)',
      jobType: JobTypeEnum.NONE,
      organization: 'Registration office, Chiang Mai University',
      dateStart: '2015-03-01',
      dateEnd: '2019-08-01',
      descriptionList: [],
      skillList: [],
    },
    {
      jobNo: 1,
      jobTitle: 'Full Stack Developer',
      jobType: JobTypeEnum.FULLSTACK,
      organization: 'Registration office, Chiang Mai University',
      dateStart: '2019-09-09',
      dateEnd: '2023-03-31',
      descriptionList: [
        'Built 5 web applications that perform CRUD operations, file reading, PDF generating and information dashboard using PHP, jQuery',
        'Develop RESTful API for internal use and provides data to an affiliated organization using PHP, Node.js/Express.js, connected with MySQL database',
      ],
      skillList: [
        TechSkillIdEnum.PHP,
        TechSkillIdEnum.JS,
        TechSkillIdEnum.JQUERY,
        TechSkillIdEnum.MYSQL,
        TechSkillIdEnum.NODEJS,
        TechSkillIdEnum.EXPRESSJS,
        TechSkillIdEnum.REACTJS,
      ],
    },
    {
      jobNo: 2,
      jobTitle: 'Front-end Developer',
      jobType: JobTypeEnum.FRONTEND,
      organization: '20Scoops CNX',
      dateStart: '2023-04-01',
      dateEnd: '',
      descriptionList: [
        'Proficient in building performant web application using React.js and TypeScript',
        'Translating design concepts from Figma into responsive user interfaces',
        'Collaborate with cross-functional teams and seamlessly integrating with back-end systems',
      ],
      skillList: [
        TechSkillIdEnum.REACTJS,
        TechSkillIdEnum.TS,
        TechSkillIdEnum.TAILWIND,
        TechSkillIdEnum.GITHUB_ACTIONS,
      ],
    },
  ],
  educations: [
    {
      level: 3,
      levelTitle: 'Master Degree',
      levelTitleTH: 'ปริญญาโท',
      majorTitle: 'Computer Science',
      majorTitleTH: 'วิทยาการคอมพิวเตอร์',
      institute: 'Faculty of Science, Chiang Mai University',
      degree: 'M.Sc.',
      yearGrad: '2022',
      researchTitle:
        'Population Trajectory Pattern Analysis in Chiang Mai University Based on Jumbo Net Wireless Network',
      researchFields: ['Data Clustering', 'DBSCAN'],
      researchTools: ['Python', 'Pandas', 'Jupyter Notebook'],
      researchUrls: 'cmu.to/thesis164251',
    },
    {
      level: 1,
      levelTitleTH: 'ปริญญาตรี',
      levelTitle: 'Bachelor Degree',
      majorTitle: 'Modern Management and IT',
      majorTitleTH: 'การจัดการสมัยใหม่และเทคโนโลยีสารสนเทศ',
      institute: 'College of Arts Media and Technology, Chiang Mai University',
      degree: 'B.A.',
      yearGrad: '2014',
    },
  ],
  techSkills: [
    {
      skillId: TechSkillIdEnum.PHP,
      skillTitle: 'PHP',
      type: TechSkillTypeEnum.LANGUAGE,
      level: 4,
    },
    {
      skillId: TechSkillIdEnum.JS,
      skillTitle: 'JavaScript',
      type: TechSkillTypeEnum.LANGUAGE,
      level: 7,
    },
    {
      skillId: TechSkillIdEnum.TS,
      skillTitle: 'TypeScript',
      type: TechSkillTypeEnum.LANGUAGE,
      level: 7,
    },
    {
      skillId: TechSkillIdEnum.HTML,
      skillTitle: 'HTML',
      type: TechSkillTypeEnum.LANGUAGE,
      level: 6,
    },
    {
      skillId: TechSkillIdEnum.CSS,
      skillTitle: 'CSS',
      type: TechSkillTypeEnum.LANGUAGE,
      level: 5,
    },
    {
      skillId: TechSkillIdEnum.PYTHON,
      skillTitle: 'Python',
      type: TechSkillTypeEnum.LANGUAGE,
      level: 3,
    },
    {
      skillId: TechSkillIdEnum.NODEJS,
      skillTitle: 'Node.js',
      type: TechSkillTypeEnum.BACKEND,
      level: 7,
    },
    {
      skillId: TechSkillIdEnum.EXPRESSJS,
      skillTitle: 'Express.js',
      type: TechSkillTypeEnum.BACKEND,
      level: 6,
    },
    {
      skillId: TechSkillIdEnum.REACTJS,
      skillTitle: 'React.js',
      type: TechSkillTypeEnum.FRONTEND,
      level: 8,
    },
    {
      skillId: TechSkillIdEnum.TAILWIND,
      skillTitle: 'TailwindCSS',
      type: TechSkillTypeEnum.FRONTEND,
      level: 7,
    },
    {
      skillId: TechSkillIdEnum.BOOTSTRAP,
      skillTitle: 'BootstrapCSS',
      type: TechSkillTypeEnum.FRONTEND,
      level: 6,
    },
    {
      skillId: TechSkillIdEnum.JQUERY,
      skillTitle: 'jQuery',
      type: TechSkillTypeEnum.FRONTEND,
      level: 5,
    },
    {
      skillId: TechSkillIdEnum.MYSQL,
      skillTitle: 'MySQL',
      type: TechSkillTypeEnum.DATABASE,
      level: 7,
    },
    {
      skillId: TechSkillIdEnum.GITHUB_ACTIONS,
      skillTitle: 'Github Actions',
      type: TechSkillTypeEnum.OPERATION,
      level: 4,
    },
    {
      skillId: TechSkillIdEnum.DOCKER,
      skillTitle: 'Docker (Beginner)',
      type: TechSkillTypeEnum.OPERATION,
      level: 2,
    },
  ],
  languageSkills: [
    {
      languageTitle: 'Thai',
      level: LanguageSkillLevelEnum.NATIVE,
    },
    {
      languageTitle: 'English',
      level: LanguageSkillLevelEnum.INTERMEDIATE,
    },
  ],
};