import divorce from '../../assets/images/practice-areas/divorce.jpg';
import legitimation from '../../assets/images/practice-areas/legitimation.jpg';
import childSupport from '../../assets/images/practice-areas/child-support.jpg';
import modification from '../../assets/images/practice-areas/modification.jpg';
import estatePlanning from '../../assets/images/practice-areas/estate-planning.jpg';
import enforcement from '../../assets/images/practice-areas/enforcement.jpg';
import childCustody from '../../assets/images/practice-areas/child-custody.jpg';
import appeals from '../../assets/images/practice-areas/appeals.jpg';

interface StaticImageData {
   src: string;
   height: number;
   width: number;
   blurDataURL?: string;
}

export interface PracticeAreasData {
  id: string;
  pageTitle: string;
  contents: string[];
  image: StaticImageData;
  metaTitle: string;
  description: string;
}

export const practiceAreasData: PracticeAreasData[] = [
  {
    id: 'divorce',
    pageTitle: 'Divorce',
    metaTitle: 'The Crites Firm - Atlanta Divorce Attorneys',
    image: divorce,
    description: 'The experienced family law and divorce lawyers at The Crites Firm provide intelligent, compassionate, and aggressive representation for metro Atlanta.',
    contents: [
      'We represent men and women in divorce actions, either contested or uncontested. We have experience litigating complex divorces with issues such as equitable division of assets whose value is difficult to ascertain, complex trust litigation, and contentious child custody action. While it is possible to do a divorce yourself, it is always advisable to seek an attorney to, at a minimum, review your documents before you agree to anything. There are complicated laws involving what can and cannot be done in divorces, and a skilled attorney will help you navigate these things. If you have any doubts, or if you are simply seeking some guidance, schedule a consultation today.'
    ],
  },
  {
    id: 'custody',
    pageTitle: 'Child Custody',
    image: childCustody,
    metaTitle: "The Crites Firm - Atlanta Custody Attorneys",
    description: "Help protect your rights as a parent and protect the best interests of your kids by ensuring you're getting the very best legal representation. Call The Crites Firm for experienced family law litigators in Atlanta.",
    contents: [
      "When parents don’t agree on child custody, a judge decides legal and physical custody, as well as a visitation schedule, on their behalf. Georgia courts determine child custody based on what’s in each child’s best interest. Judges consider several factors when deciding custody."
    ],
  },
  {
    id: 'support',
    pageTitle: 'Child Support',
    image: childSupport,
    metaTitle: "The Crites Firm - Atlanta Child Support Attorneys",
    description: "In Georgia, every parent has an obligation to support their children. Call our Atlanta Child Support Lawyers today.",
    contents: [
      "Georgia judges determine child support based primarily on children’s reasonable needs, and the parents’ combined income. Courts use the Child Support Guidelines to come up with a Basic Child Support Obligation (“BCSO”), which is the starting point for determining a final child support amount."
    ],
  },
  {
    id: 'paternity',
    pageTitle: 'Legitimation / Paternity',
    image: legitimation,
    metaTitle: 'Atlanta Family Law Attorneys - Legitimation and Paternity',
    description: "The Crites Firm represents mothers & biological fathers in paternity & legitimation for child support, child custody & visitation. Call today to speak to experienced Georgia Family Law Attorneys.",
    contents: [
      "Children born in wedlock are presumed to be the legitimate child of the mother’s husband, and immediately have custodial rights as well as the obligation to financially and emotionally support the child. When children are born out of wedlock, however, the parents must establish paternity through a process called “legitimation” before the father’s rights and obligations to the child take effect."
    ],
  },
  {
    id: 'modification',
    pageTitle: 'Modification',
    image: modification,
    metaTitle: 'The Crites Firm - Modification',
    description: '',
    contents: [
      "Post-decree modification actions can be tricky. Whether it's a change to a parenting plan, child custody, child support, or alimony, you need an experienced attorney who knows how to navigate the statutory requirements to get a judge to change what he or she has already ordered."
    ],
  },
  {
    id: 'enforcement',
    pageTitle: 'Enforcement of Court Orders',
    image: enforcement,
    metaTitle: 'Atlanta Family Law Attorneys - Contempt and Enforcement',
    description: "Contempt and enforcement proceedings may be needed when a former partner does not obey the court's orders on child custody, child support, alimony, or other. Atlanta attorneys at The Crites Firm have helped many individuals with contempt proceedings and other areas of family law",
    contents: [
      "If you've had a divorce, child custody case, or child support case, you have an agreement and/or court order requiring you to follow certain rules, like paying child support, alimony, or following a visitation schedule. Sometimes your ex-spouse or child’s parent refuses to follow the terms of your court order. In these cases, you can ask the court to hold that person in “contempt of court."
    ],
  },
  {
    id: 'appeals',
    pageTitle: 'Appeals',
    image: appeals,
    metaTitle: 'Atlanta Family Law Attorneys - Appeals',
    description: "An appellate attorney specializes in handling cases on appeal, after a rendered verdict or a decision is reached at the trial court level. The Crites Firm has experienced Atlanta attorneys who are well-versed in appellate procedure. Call us today.",
    contents: [
      "The procedural nuances involved in prosecuting or defending an appeal can be a minefield for an inexperienced attorney. If you are considering appealing your court order or defending against an appeal, time is of the essence. Our attorneys are well-versed in appellate practice and procedure and use that knowledge to get results for our clients."
    ],
  },
  {
    id: 'estate',
    pageTitle: 'Estate Planning',
    image: estatePlanning,
    metaTitle: 'The Crites Firm - Atlanta Estate Planning',
    description: "The Crites Firm has experienced estate planning attorneys that can help you draft wills, trusts, healthcare directives, and other estate planning documents.",
    contents: [
      "Whether you're recently divorced and need to discuss your estate plan, or just never drew one up, our attorneys can help with establishing a basic estate plan including healthcare directives and powers of attorney or a more complicated estate plan involving trusts."
    ],
  },
];
