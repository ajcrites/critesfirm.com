export interface PracticeAreasData {
  id: string;
  title: string;
  contents: string[];
}

export const practiceAreasData: PracticeAreasData[] = [
  {
    id: 'divorce',
    title: 'Divorce',
    contents: [
      "We represent men and women in divorce actions, either contested or uncontested. We have experience litigating complex divorces with issues such as equitable division of assets whose value is difficult to ascertain, complex trust litigation, and contentious child custody action. While it is possible to do a divorce yourself, it is always advisable to seek an attorney to, at a minimum, review your documents before you agree to anything. There are complicated laws involving what can and cannot be done in divorces, and a skilled attorney will help you navigate these things. If you have any doubts, or if you are simply seeking some guidance, schedule a consultation today."
    ],
  },
  {
    id: 'custody',
    title: 'Child Custody',
    contents: [
      "When parents don’t agree on child custody, a judge decides legal and physical custody, as well as a visitation schedule, on their behalf. Georgia courts determine child custody based on what’s in each child’s best interest. Judges consider several factors when deciding custody."
    ],
  },
  {
    id: 'support',
    title: 'Child Support',
    contents: [
      "Georgia judges determine child support based primarily on children’s reasonable needs, and the parents’ combined income. Courts use the Child Support Guidelines to come up with a Basic Child Support Obligation (“BCSO”), which is the starting point for determining a final child support amount."
    ],
  },
  {
    id: 'paternity',
    title: 'Legitimation / Paternity',
    contents: [
      "Children born in wedlock are presumed to be the legitimate child of the mother’s husband, and immediately have custodial rights as well as the obligation to financially and emotionally support the child. When children are born out of wedlock, however, the parents must establish paternity through a process called “legitimation” before the father’s rights and obligations to the child take effect."
    ],
  },
  {
    id: 'modification',
    title: 'Modification',
    contents: [
      "Post-decree modification actions can be tricky. Whether it's a change to a parenting plan, child custody, child support, or alimony, you need an experienced attorney who knows how to navigate the statutory requirements to get a judge to change what he or she has already ordered."
    ],
  },
  {
    id: 'enforcement',
    title: 'Enforcement of Court Orders',
    contents: [
      "If you've had a divorce, child custody case, or child support case, you have an agreement and/or court order requiring you to follow certain rules, like paying child support, alimony, or following a visitation schedule. Sometimes your ex-spouse or child’s parent refuses to follow the terms of your court order. In these cases, you can ask the court to hold that person in “contempt of court."
    ],
  },
  {
    id: 'appeals',
    title: 'Appeals',
    contents: [
      "The procedural nuances involved in prosecuting or defending an appeal can be a minefield for an inexperienced attorney. If you are considering appealing your court order or defending against an appeal, time is of the essence. Our attorneys are well-versed in appellate practice and procedure and use that knowledge to get results for our clients."
    ],
  },
  {
    id: 'estate',
    title: 'Estate Planning',
    contents: [
      "Whether you're recently divorced and need to discuss your estate plan, or just never drew one up, our attorneys can help with establishing a basic estate plan including healthcare directives and powers of attorney or a more complicated estate plan involving trusts."
    ],
  },
];
