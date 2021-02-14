const reqList = `<ul>
    <li>Be open for enrollment</li>
    <li>
      Run regularly (ideally in self-paced format, otherwise running multiple
      times per year)
    </li>
    <li>
      Be of generally high quality in teaching materials and pedagogical
      principles
    </li>
    <li>
      Match the curricular standards of the CS 2013: Curriculum Guidelines for
      Undergraduate Degree Programs in Computer Science
    </li>
  </ul>`;
const articles = [
  {
    name: "interview-handbook",
    author: "Yangshun Tay",
    title: "Tech Interview Handbook",
    link: "https://yangshun.github.io/tech-interview-handbook/",
    content: [
      `The Tech Interview Handbook contains carefully curated content to help you ace your next technical interview with a focus on algorithms. While there are a ton of interview resources on the internet, the best ones are either not free, or they do not cover the complete interview process, usually only focusing on algorithms.`,
      `Whether you are a beginner to technical interviews or a seasoned engineer who have not been on the other side of the interviewing table in a while and want to get back into the game, the Tech Interview Handbook has got you covered.`,
      `Now, I'll be honest here, I have not read the whole thing. The above was taken from the introduction to the handbook. However, this resource is free, and I just love free things. One can tell the author is passionate about web design not only because it's free, but because the website is expertly built, with a very pleasant UI. There is an entire section on algorithms, and having some sort of curriculum on these need-to-know topics can give you an advantage over other self-taught coders.`,
      "There are books out there on this, but who honestly wants to read a technical manual on interviewing? This handbook is more like a freeCodeCamp course- it has that essential straight-to-the-point minimal feel that's lighter than the starched reality of a book. And it's easier to refernce back to than a video.",
    ],
  },
  {
    name: "css-grid",
    title: "cssgr.id - Technically Not an Article",
    author: "Dan Netherton",
    link: "cssgr.id",
    content: [
      `I hate grids. Actually, no, I love grids. They make organizing your site easier and- I could go into the historical significance of the grid and how cavemen drew them in sand and whatnot but I'll spare you. However, it is tedious to code them. I have to re-learn how to do it every time. The syntax just looks wierd to me. This is where cssgr.id comes in.`,
      `This website is a simple grid maker that conveniently outputs css for you to copy onto your project. You can input the number of items in your grid, the columns, rows, gap space in px, max-width, and placeholder text. AND if you select an individual grid cell you can edit the column and row span to merge cells. This is an easy way to visualize and create grids for your website.`,
    ],
  },
  {
    name: "ethical-jobs",
    title: "Ethical Tech Jobs Boards",
    author: "Ted Fickes & Edward Saperia",
    link:
      "https://docs.google.com/spreadsheets/d/1dFVoF6f9VU5pjaGhyyvQaBN0n6ae-iLCtlvsO1N2jhA/edit?usp=sharing",
    content: [
      `We live in a society. A society that has jobs. Jobs held and led by people. And sometimes these people can be bad, downright unethical. As a person with agency, I'd like to steer clear of these organizations: to discorage unethical behaviour, and for my own spiritual sanctitiy. `,
      `This good excel sheet has been organized by two tech dudes (sorry I don't know much about them but one owns a company that "advance the work of progressive organizations, advocacy campaigns and social good startups around the world.") It containes links to job boards and descriptions of the kind of jobs you can find there. If you're offput by it being an excel sheet, just know that this sort of ground-up work is what advances progressive ideas in a society. Then it is up to the people to endorse these ideals.`,
    ],
  },
  {
    name: "ossu",
    title: "Open Source Society University - Free CS Curriculum",
    author: "Eric Douglas et al.",
    link: "https://github.com/ossu/computer-science",
    content: [
      `All the knowledge of a Computer Science degree without the tution. The OSSU curriculum is a complete education in computer science using online materials. It's not merely for career training or professional development. It's for those who want a proper, well-rounded grounding in concepts fundamental to all computing disciplines, and for those who have the discipline, will, and (most importantly!) good habits to obtain this education largely on their own, but with support from a worldwide community of fellow learners. `,
      `It is designed according to the degree requirements of undergraduate computer science majors, minus general education (non-CS) requirements, as it is assumed most of the people following this curriculum are already educated outside the field of CS. The courses themselves are among the very best in the world, often coming from Harvard, Princeton, MIT, etc.
      `,
    ],
  },
];

export default articles;
