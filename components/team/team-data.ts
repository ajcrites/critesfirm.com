import nicoleImage from '../../assets/images/team/nicole.jpg';
import brandyImage from '../../assets/images/team/brandy.jpg';
import diamondImage from '../../assets/images/team/diamond.jpg';
import summerImage from '../../assets/images/team/summer.jpg';

interface StaticImageData {
   src: string;
   height: number;
   width: number;
   blurDataURL?: string;
}

export interface TeamData {
  id: string;
  name: string;
  bio: string[];
  image: StaticImageData;
}

export const teamData: TeamData[] = [
  {
    id: 'nicole',
    name: 'Nicole Crites',
    bio: [
      "Founding Partner Nicole Crites began her legal career all the way back in high school when she participated in Volusia County's Teen Court Program. This program is designed as a diversionary program for juvenile defendants with minor criminal charges. Nicole volunteered as a teen prosecutor and went on to win Prosecutor of the Year in her county.",

      "Nicole's commitment to service continued into adulthood, when she became a volunteer Guardian ad Litem for Alachua County. Having not even started law school yet, Nicole had plenty of experience making court appearances, speaking to judges, and confronting uncomfortable truths in pursuit of the best interests of the children she served. It was through these experiences that Nicole solidified her desire to help families going through tough times, and more specifically, help the children of families going through tough times.",

      "Nicole received her undergraduate degree from the University of Florida in 2011 and went on to receive her Juris Doctorate from the University of Florida, Levin College of Law. While in law school, Nicole participated in the prosecution clinic and worked in the Domestic Violence Unit of the State Attorney's Office in the Eighth Judicial Circuit, seeking justice and, most importantly, safety for the victims of domestic violence.",

      "After being admitted to the Florida bar and working in domestic relations in Florida, Nicole decided to move closer to her family in Atlanta. Nicole continued to work in domestic relations law after her move and has frequently litigated complex matters, involving trusts, closely held businesses, complicated child custody matters, and equitable division of assets whose value is difficult to ascertain. Nicole fervently believes that it is best for children if their parents can resolve issues through a collaborative and non-adversarial approach. However, Nicole recognizes this approach is not always feasible for certain litigants and has developed an assertive and confident style of litigation in the courtroom. Nicole understands that there is wisdom in the Art of War, and that a long-term strategy, not short-term tactics, leads to the best results for clients. Nicole doesn't engage in foolishness which only serves to drive up costs and instead focuses her calm demeanor and patience to formulate a strategy designed to get her clients to the end of their litigation with favorable results.",

      "Nicole worked as a professional chef while in undergraduate school and law school, and has brought those skills home. When she is not being a lawyer, she enjoys cooking five-star meals, and being home with her three dogs, two kids, and loving spouse.",
    ],
    image: nicoleImage,
  },
  {
    id: 'diamond',
    name: 'Diamond Alexander',
    bio: [
      "Associate Attorney Diamond Alexander received her undergraduate education from The University of Mississippi in 2017 where she double-majored in Criminal Justice & History. She then took a one year sabbatical to get married, travel, move to Atlanta, and apply to law school. Following that, she attended Emory University School of Law where she was also a family law teaching assistant from 2019 to 2021. She graduated law school in 2021 and became a member of the Georgia Bar in 2022.",

      "During her educational career, Diamond received a number of recognitions and was involved in several impressive groups including:",
      "• Horatio Alger National Scholar (est. 2014 ; lifetime affiliation)",
      "• Outstanding Criminal Justice Student (2015)",
      "• Alpha Phi Sigma Criminal Justice Honor Society, Mu Rho Chapter",
      "• Kessler-Family Scholar  (Spring 2019)",
      "• Emory Black Law Student's Association President (2020-2021)",
      "• Emory Moot Court Society (2019-2021)",
      "• Southern Region of the National Black Law Student's Association - Director of Sub-Region 1 (2020-2021)",
      "• 2020 Rowland Barnes Memorial Scholar",

      "Diamond also has legal experience in probate, real estate, criminal defense, corporate litigation. Since graduating law school, Diamond has practiced family law exclusively.",

      "Outside of her legal career, the Michigan native is also a certified pet care professional and the owner of Diamond's Doggy Daycare, LLC. She enjoys traveling, art, cooking, baking, and spending time with her husband, Terrence, and their dogs, Jazz and Greer.",
    ],
    image: diamondImage,
  },
  {
    id: 'brandy',
    name: 'Brandy Blalock',
    bio: [
      "Paralegal Brandy Blalock is one of the original members of The Crites Firm. Brandy has worked primarily in family law since 2006. In addition to family law, Brandy has vast experience in criminal court, juvenile court, probate court, and estate planning matters. Brandy graduated from Coosa Valley Technical College in 2005 with a degree in Business Office Technologies/Medical Office Specialist, and she received her Paralegal Certificate from North Metro Technical College in 2007.",

      "A true native of Georgia, Brandy enjoys spending time with her family, traveling, and helping in a community outreach program in Cherokee County. This program provides meals for school children on the weekends. She lives in the greater metropolitan Rydal, Georgia area with her husband, Stephen and son, Jet. Brandy devotes her time to her son's education in being a proud homeschool Mom.",
    ],
    image: brandyImage,
  },
  {
    id: 'summer',
    name: 'Summer Stanley',
    bio: [
      "Marketing Consultant Summer Stanley earned her Bachelor's  Degree at Georgia State University, where she majored in Marketing and minored in Sociology. She recently earned her Master's degree from Georgia State University in Marketing with a certificate in Brand and Customer Management. Summer uses her marketing skills to help her at The Crites Firm, where she manages the firm's social media profiles, develops marketing strategies, and generally builds the firm's practice from the ground up.",

      "Personally, Summer enjoys fashion and is a proud cat mom.",
    ],
    image: summerImage,
  }
];
