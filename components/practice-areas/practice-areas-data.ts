import divorce from '../../assets/images/practice-areas/divorce.webp';
import legitimation from '../../assets/images/practice-areas/legitimation.webp';
import childSupport from '../../assets/images/practice-areas/child-support.webp';
import modification from '../../assets/images/practice-areas/modification.webp';
import estatePlanning from '../../assets/images/practice-areas/estate-planning.webp';
import enforcement from '../../assets/images/practice-areas/enforcement.webp';
import childCustody from '../../assets/images/practice-areas/child-custody.webp';
import guardianAdLitem from '../../assets/images/practice-areas/guardian-ad-litem.webp';
import appeals from '../../assets/images/practice-areas/appeals.webp';

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
  image?: StaticImageData;
  metaTitle: string;
  description: string;
}

export const practiceAreasData: PracticeAreasData[] = [
  {
    id: 'divorce',
    pageTitle: 'Divorce',
    metaTitle: 'The Crites Firm - Atlanta Divorce Attorneys',
    image: divorce,
    description: 'The experienced family law and divorce lawyers at The Crites Firm provide intelligent, compassionate, and aggressive representation for metro Atlanta. We handle narcissistic divorce',
    contents: [
      'When selecting a divorce attorney, the best divorce attorney for you is one that isn’t afraid of the courtroom, the opposing party, or YOU. Indeed, we have seen a lot of money wasted on fees because the litigant’s attorney was too scared to manage client expectations and give clients a view on the likely results. We have also experienced great success by simply being unafraid to litigate a case in court.',

      'We represent men and women in divorce actions from various walks of life, in actions that are either contested or uncontested. We have experience in different kinds of divorces, servicing our LGBTQ community, military community, members of the entertainment industry, and all others. Our team is highly experienced litigating complex divorces with issues such as equitable division of assets whose value is difficult to ascertain, complex trust litigation, and contentious child custody actions. The key to successfully litigating your divorce is having an attorney who understands how to value your marital estate, work with Guardians ad litem and child custody evaluators, and advise their client appropriately.',

      'While it is possible to do a divorce yourself, it is always advisable to seek an attorney to, at a minimum, review your documents before you agree to anything. Even if you are filing an uncontested divorce in Georgia, an attorney can still help you to ensure your pleadings meet certain statutory requirements because filing for divorce in Georgia requires that certain information be pled in order for the Court to consider your petition. Additionally, there are complicated laws involving what can and cannot be done in divorces, and a skilled attorney will help you navigate these issues. If you have any doubts, or if you are simply seeking some guidance, <a rel="noreferrer" target="_blank" href="https://critesfirm.cliogrow.com/book/47b4d8dfb1601a4e7665eacd954995c8">schedule a consultation today.</a>',
    ],
  },
  {
    id: 'custody',
    pageTitle: 'Child Custody',
    image: childCustody,
    metaTitle: "The Crites Firm - Atlanta Custody Attorneys",
    description: "Help protect your rights as a parent and protect the best interests of your kids by ensuring you're getting the very best legal representation. Call The Crites Firm for experienced family law litigators in Atlanta.",
    contents: [
      'Parents want what is best for their children, but when the parents cannot agree on what "best" is, a Court has to decide for you. Custody is a term of art which incorporates many different dimensions. There is physical custody  and legal custody. Physical custody refers to with which parent the children spend time with and what the schedule will look like. Legalcustody refers to decision making authority, so in the event you and your co-parent cannot agree on a particular issue related to healthcare, education, religion, or extracurricular activities, the tie breaker is designated.',

      'When parents don’t agree on child custody, a judge decides legal and physical custody, as well as a visitation schedule, on their behalf. Georgia courts determine child custody based on what’s in each child’s best interest. Judges consider several factors when deciding custody, including but not limited to: the parents’ jobs and availability to devote sufficient time to parenting, the quality of the home environments, a child’s need to stay in the same home or with their siblings for stability, the strength of the child’s emotional bonds with each parent, each parents’ familiarity with the child’s needs, and the parents’ parenting history of involvement with the child’s life.',

      'For more information on the differences between legal and physical custody or for what other factors a judge may consider and how they weigh against one another, <a rel="noreferrer" target="_blank" href="https://critesfirm.cliogrow.com/book/47b4d8dfb1601a4e7665eacd954995c8">schedule a consultation.</a>'
    ],
  },
  {
    id: 'support',
    pageTitle: 'Child Support',
    image: childSupport,
    metaTitle: "The Crites Firm - Atlanta Child Support Attorneys",
    description: "In Georgia, every parent has an obligation to support their children. Call our Atlanta Child Support Lawyers today.",
    contents: [
      "Georgia judges determine child support based primarily on children’s reasonable needs, and the parents’ combined income. Courts use the Child Support Guidelines to come up with a Basic Child Support Obligation (“BCSO”), which is the starting point for determining a final child support amount. However, there is a surprising amount of nuance in this calculation. For example, accurately reporting each parents' income may be a hurdle if one parent has a single member LLC or another parent works as a contractor. Not everyone is a standard w-2 employee and when income varies from month to month, it is important to have an attorney who has experience litigating in this area.",

      'Moreover, the BCSO is just a starting point. The Court has the power to deviate for extraordinary educational or medical expenses, parenting time, high income earners, or any other plethora of factors. At the end of the day, Courts are concerned with the quality of life your children have and have quite a bit of wiggle room to ensure that your children are well taken care of in both parents\' homes.'
    ],
  },
  {
    id: 'paternity',
    pageTitle: 'Legitimation / Paternity',
    image: legitimation,
    metaTitle: 'Atlanta Family Law Attorneys - Legitimation and Paternity',
    description: "The Crites Firm represents mothers & biological fathers in paternity & legitimation for child support, child custody & visitation. Call today to speak to experienced Georgia Family Law Attorneys.",
    contents: [
      'Children born in wedlock are presumed to be the legitimate child of the mother’s husband, and immediately have custodial rights as well as the obligation to financially and emotionally support the child. When children are born out of wedlock, however, the parents must establish paternity through a process called “legitimation” before the father’s rights and obligations to the child take effect. Sadly, this comes as a surprise to many men who care for their children since birth, but when the parties break up, suddenly dad finds out he has no rights to his child. Most men think that by virtue of signing a birth certificate, they automatically have custodial rights. However antiquated the term "legitimation" may seem, this is very important for establishing yourself as the child\'s legal father. Most importantly, <b>you can legitimate your child while you and their mother are still together</b>, so there is no reason to wait until the relationship goes south to find out that you have no legal rights to your child.',

      'If you have a child born out of wedlock and have not married your child\'s mother, <a rel="noreferrer" target="_blank" href="https://critesfirm.cliogrow.com/book/47b4d8dfb1601a4e7665eacd954995c8">schedule a consultation today</a> to discuss how to secure your rights as your child\'s father.'
    ],
  },
  {
    id: 'modification',
    pageTitle: 'Modification',
    image: modification,
    metaTitle: 'The Crites Firm - Modification',
    description: '',
    contents: [
      'Post-decree modification actions can be tricky. Whether it\'s a change to a parenting plan, child custody, child support, or alimony, you need an experienced attorney who knows how to navigate the statutory requirements to get a judge to change what he or she has already ordered. You cannot simply ask a court to change what has already been ordered. You must show that something has changed since the last time the Court visited your case and you must also show that the change is materially affecting either the parties or their children. For example, in a child custody situation, there may be a change in the child\'s needs or the parents\' lives which warrant changing custody. With regards to child support, if either parent becomes involuntarily unemployed or laid off, that may warrant a modification. There are many factors Courts can consider, but the reason has to be substantial enough to warrant revisiting a decision they have already made. If you think your case warrants a change to your previous orders, please call to <a rel="noreferrer" target="_blank" href="https://critesfirm.cliogrow.com/book/47b4d8dfb1601a4e7665eacd954995c8">schedule a consultation today</a>, so that we may weigh the factors with you.'
    ],
  },
  {
    id: 'enforcement',
    pageTitle: 'Enforcement of Court Orders',
    image: enforcement,
    metaTitle: 'Atlanta Family Law Attorneys - Contempt and Enforcement',
    description: "Contempt and enforcement proceedings may be needed when a former partner does not obey the court's orders on child custody, child support, alimony, or other. Atlanta attorneys at The Crites Firm have helped many individuals with contempt proceedings and other areas of family law",
    contents: [
      'If you\'ve had a divorce, child custody case, or child support case, you have an agreement and/or court order requiring you to follow certain rules, like paying child support, alimony, or following a visitation schedule. Sometimes your ex-spouse or co-parent refuses to follow the terms of your court order. In these cases, you can ask the court to hold that person in “contempt" of court and enforce the agreement between you two. There are threshold requirements that must be met before you can ask a Court to exercise their contempt powers. For example, you cannot be in contempt of the same order as well. Additionally, you have to show that the opposing party has the ability to comply with the Court\'s orders. This may be tricky if the opposing party has a valid reason for not being able to follow the Court\'s orders. Contempt actions require a stringent cost/benefit analysis before beginning to make sure you have the highest chance of prevailing. If you think your ex-spouse or co-parent is in contempt of a court order, do not hesitate. <a rel="noreferrer" target="_blank" href="https://critesfirm.cliogrow.com/book/47b4d8dfb1601a4e7665eacd954995c8">Schedule a consultation today!</a>'
    ],
  },
  {
    id: 'guardian-ad-litem',
    pageTitle: 'Guardian Ad Litem',
    image: guardianAdLitem,
    metaTitle: 'The Crites Firm - Atlanta Guardian ad Litem',
    description: 'The experienced family law and divorce lawyers at The Crites Firm provide Guardian ad Litem services',
    contents: [
      'In difficult child custody matters, the Court may appoint a Guardian Ad Litem to look out for the interests of the children and be their voice in court. Guardians receive training in child developmental psychology as well as appropriate interviewing techniques to use when speaking to children, depending on their age. When a Guardian is appointed to investigate, they stay in the case until a final resolution on custody can be reached. This means a Guardian is often called to testify about the relationship between two parents and the effect that has on children, as well as advocating for children\'s needs.',

      'Sometimes a child wants to live with a particular parent because that parent allows them to stay up late playing video games, but sometimes, the reason is more important than that, such as having a parent who is more emotionally receptive to their needs or a parent who understands their treatment plans when children need medical or psychological support. Whatever the reason, it is the Guardian\'s job to sift through the nonsense and assist the Court with making a custody determination that is the best it could possibly be for the children involved. Managing Partner Nicole Crites has over a decade of experience being the voice of children in courtrooms, having started many moons ago representing the interest of children who have been abused or neglected. Nowadays, she spends her time advocating for children in divorce and child custody matters, but has never forgotten the lessons her early experiences taught her about how critical the role parents have in their children\'s lives.'
    ]
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
      "As uncomfortable as it makes us, we all have to deal with life’s two certainties: death and taxes. Just because these aren’t problems we like to thinking about, that doesn’t mean we should put it off. Luckily, estate planning is an area of law that can help you plan for both. Georgia, and most other states, has laws that dispose of your property when you pass away without an estate plan based on a statutory scheme. These are called intestacy laws. For some people, those laws work just fine for them. All that is left to do is for someone to administer your estate through the probate court. But for the vast majority of us, we have special circumstances that Georgia’s intestacy laws do not account for. This is where estate planning  comes in.",

      "Estate planning is often talked about in terms of wills and trusts. A will is a written document that is submitted to the probate court in the county in which you reside when you pass away. In the will, you can appoint an Executor and guardian of your minor children if you have them as well as leave your property to whomever you choose. You can also do some creative estate planning in wills such as leave money to an individual for the care of a pet, leave money for your grandchildren to be spent on their education, or leave conditions attached to the property you leave.",

      "A trust is a wholly different concept. A trust is a contract between you, the Grantor, and the person who holds the property for your benefit, your Trustee. You can be your own trustee until you pass away, and then have someone else assume the role. A trust is a bit more complicated than a will, but that is because it is more versatile. If you have a trust and you have put all of your property into the trust, then your estate will likely not need to be probated since there is no property to pass through the probate process, which can be expensive. In other words, all of your property is held in the trust so there is nothing left for the State of Georgia to concern itself with. Another advantage to avoiding probate, in addition to the cost saving, is that the proceedings are private, meaning that only the beneficiaries of the trust and the trustee know how your property is distributed. Additionally, if you choose to have someone else as your trustee, then you may be eligible for government benefits to assist with end of life care once a certain amount of time has passed.",
      'The last advantage to creative estate planning is that it may help you lessen the tax burden your descendants may have to pay. Very few people actually have to pay estate taxes, and this is an area of law that is constantly changing, so if you think you may leave a taxable estate, you should consult with an attorney as soon as possible.',

      'There are other tools an estate planning attorney can assist you with, such as preparing an Advanced Health Care Directive of General Powers of Attorney. These tools can also be useful in the event that you suffer a form of incapacity since you can designate someone to be your guardian and conservator while you have capacity.'
    ],
  },
];
