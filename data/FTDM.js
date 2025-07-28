const FTDM = {
  instructionalArea: "Financial Services (Team Decision Making)",

  indicatorSets: [
    // Business Law Set 1
    [
      "Comply with the spirit and intent of laws and regulations",
      "Describe legal issues affecting businesses",
      "Describe the nature of legally binding contracts",
      "Discuss the nature of debtor-creditor relationships",
      "Discuss legal considerations in the finance industry",
      "Discuss the effect of tax laws and regulations on financial transactions",
      "Explain types of business ownership"
    ],

    // Business Law Set 2
    [
      "Discuss the nature and scope of compliance in the finance industry",
      "Describe the use of technology in compliance",
      "Explain the nature of agency relationships",
      "Describe methods used to protect intellectual property",
      "Explain the nature of import/export law",
      "Describe the nature of customs regulations",
      "Discuss the role of administrative law"
    ],

    // Communication Skills
    [
      "Explain the nature of effective verbal communications",
      "Employ communication styles appropriate to target audience",
      "Facilitate group discussions",
      "Make oral presentations",
      "Select and utilize appropriate formats for professional writing",
      "Write informational messages",
      "Organize information"
    ],

    // Customer Relations
    [
      "Explain the nature of positive customer relations",
      "Demonstrate a customer service mindset",
      "Interpret business policies to customers/clients",
      "Build and maintain relationships with customers",
      "Explain the responsibilities of finance professionals in providing client services",
      "Discuss the nature of customer relationship management",
      "Describe the use of technology in customer relationship management"
    ],

    // Economics Set 1
    [
      "Describe the concepts of economics and economic activities",
      "Explain the principles of supply and demand",
      "Describe factors that affect the business environment",
      "Explain the concept of competition",
      "Determine factors affecting business risk",
      "Describe the economic impact of inflation on business",
      "Explain the economic impact of interest-rate fluctuations"
    ],

    // Economics Set 2
    [
      "Explain the nature of global trade",
      "Discuss the impact of globalization on business",
      "Describe the determinants of exchange rates and their effects on the domestic economy",
      "Explain cultural considerations that impact global business relations",
      "Discuss the impact of cultural and social environments on global trade",
      "Describe the impact of electronic communication tools on global business activities",
      "Describe the impact of the political environment on world trade"
    ],

    // Emotional Intelligence
    [
      "Describe the nature of emotional intelligence",
      "Recognize and overcome personal biases and stereotypes",
      "Build trust in relationships",
      "Foster open, honest communication",
      "Use consensus-building skills",
      "Demonstrate negotiation skills",
      "Exhibit cultural sensitivity"
    ],

    // Financial Analysis Set 1
    [
      "Explain the nature of balance sheets",
      "Describe the nature of income statements",
      "Describe the nature of cash flow statements",
      "Describe techniques used to analyze customer financial information",
      "Explain the need to save and invest",
      "Explain the purposes and importance of credit",
      "Make responsible financial decisions"
    ],

    // Financial Analysis Set 2
    [
      "Explain the time value of money",
      "Calculate the time value of money",
      "Describe sources of securities information",
      "Explain types of investments",
      "Discuss the role of ethics in finance",
      "Describe the role of financial institutions",
      "Explain types of financial markets"
    ],

    // Financial Analysis Set 3
    [
      "Describe the need for financial information",
      "Explain the role of finance in business",
      "Explain legal considerations for finance",
      "Explain legal responsibilities associated with consumer financial products and services",
      "Describe the nature of budgets",
      "Determine insurance needs",
      "Discuss the analysis of a company’s financial situation using its financial statements"
    ],

    // Financial Analysis Set 4
    [
      "Describe types of costs used in managerial accounting",
      "Describe marginal analysis techniques and applications",
      "Explain the nature of managerial accounting",
      "Discuss the use of variance analysis in managerial accounting",
      "Discuss the nature of cost accounting budgets",
      "Discuss the nature of cost allocation",
      "Describe the nature of cash flows"
    ],

    // Financial Analysis Set 5
    [
      "Describe the concept of insurance",
      "Explain the nature of risk management",
      "Discuss the nature of enterprise risk management",
      "Conduct a risk assessment of an event",
      "Discuss legal considerations affecting risk management",
      "Explain the role of ethics in risk management",
      "Describe the use of technology in risk management"
    ],

    // Financial Analysis Set 6
    [
      "Describe types of financial-services providers",
      "Discuss considerations in selecting a financial-services provider",
      "Describe the relationship between economic conditions and financial markets",
      "Explain the nature and scope of financial globalization",
      "Explain the nature of statements of changes in equity",
      "Describe the nature of overhead/operating costs",
      "Discuss the nature of risk control"
    ],

    // Financial Analysis Set 7
    [
      "Explain forms of financial exchange",
      "Identify types of currency",
      "Describe functions of money",
      "Describe sources of income and compensation",
      "Validate credit history",
      "Demonstrate the wise use of credit",
      "Protect against identity theft"
    ],

    // Financial Analysis Set 8
    [
      "Develop personal budget",
      "Set financial goals",
      "Determine personal net worth",
      "Apply for a consumer loan",
      "Control debt",
      "Discuss the nature of retirement planning",
      "Explain the nature of estate planning"
    ],

    // Information Management
    [
      "Assess information needs",
      "Obtain needed information efficiently",
      "Evaluate quality and source of information",
      "Apply information to accomplish a task",
      "Explain the role of ethics in information management",
      "Explain legal issues associated with information management",
      "Interpret statistical findings"
    ],

    // Operations Set 1
    [
      "Explain the nature of operations",
      "Describe the use of technology in operations",
      "Explain the nature of project management",
      "Develop project plan",
      "Apply project-management tools to monitor and communicate project progress",
      "Evaluate project success",
      "Identify resources needed for project"
    ],

    // Operations Set 2
    [
      "Explain the nature of overhead/operating costs",
      "Explain employee's role in expense control",
      "Organize and prioritize work",
      "Coordinate work with that of team members",
      "Monitor and ensure completion of delegated tasks",
      "Streamline work processes",
      "Explain the benefits of supply chain collaboration"
    ],

    // Operations Set 3
    [
      "Explain routine security precautions",
      "Follow established security procedures/policies",
      "Protect company information and intangibles",
      "Explain information privacy, security, and confidentiality considerations in business",
      "Maintain data security",
      "Identify quality-control measures",
      "Describe crucial elements of a quality culture"
    ],

    // Professional Development
    [
      "Discuss employment opportunities in the finance industry",
      "Discuss opportunities for building professional relationships in finance",
      "Discuss the importance of corporate governance in business",
      "Ascertain employee's role in achieving governance objectives",
      "Describe the components of a well-governed company",
      "Describe the impact of governance processes on decision-making and management functions",
      "Use networking techniques to identify employment opportunities"
    ]
  ],

  scenarioRange: `SCENARIO RANGE:
Scenarios must reflect realistic financial services workplace settings. Acceptable contexts include:
- Launching a new savings or investment product at a regional bank
- Designing a customer education campaign about certificates of deposit and money markets
- Implementing a compliance program to meet Sarbanes-Oxley and GAAP standards
- Building a fraud detection framework for online and mobile banking
- Responding to interest rate changes and assessing their impact on loan portfolios
- Creating a liquidity contingency plan for an economic downturn
- Developing an ESG reporting system for investment portfolios
- Evaluating credit risk models for a consumer lending program
- Integrating fintech solutions into traditional banking operations
- Designing a customer acquisition and retention campaign for wealth management services
- Expanding financial services into international markets under shifting exchange rates
- Managing operational overhead costs in an investment firm
- Creating an internal audit framework to ensure accurate financial reporting
- Designing an insurance package to mitigate operational and market risk
- Planning a merger or acquisition between two financial institutions
- Creating a balanced scorecard to track performance across financial departments
- Managing the ethical implications of high-interest lending products
- Developing a financial literacy initiative for underserved communities
- Responding to a cybersecurity breach in a financial institution
- Adjusting portfolio strategies based on economic forecasts
- Implementing automated compliance monitoring technology
- Building trust with different age demographics in financial advising
- Planning a succession and governance strategy for a growing bank
- Addressing customer concerns after a major policy or fee change
- Creating a crisis response plan following a data leak involving customer accounts`,

  exampleRoleplays: [
    `CAREER CLUSTER
Finance

INSTRUCTIONAL AREA
Financial Analysis

FINANCIAL SERVICES TEAM DECISION MAKING EVENT

PARTICIPANT INSTRUCTIONS

• You will have up to 30 minutes to review the situation and prepare your presentation. You may make notes to use during your presentation.
• You will have up to 15 minutes to present your analysis to the judge. All members of the team must participate in the presentation, as well as answer any questions.
• You will be evaluated on how well you meet the performance indicators of this event.
• Turn in all of your notes and event materials when you have completed the event.

PERFORMANCE INDICATORS

- Explain the need to save and invest
- Explain types of financial markets
- Describe the role of financial institutions
- Explain the time value of money
- Interpret business policies to customers/clients
- Write informational messages
- Select and utilize appropriate formats for professional writing

CASE STUDY SITUATION

You are to assume the roles of the marketing manager and the customer service manager at LOCAL BANK, a bank located in a city of 40,000 people. The bank president (judge) wants you to create an informational flyer about money markets and the bank’s current promotion.

Most customers of LOCAL BANK keep their funds in either a savings account or a checking account or both. Less than 15% of customers have funds in a money market account. The bank president believes this is due to a lack of understanding of money markets and certificates of deposit.

LOCAL BANK is now offering customers with over $10,000 in savings the opportunity to put funds into a certificate of deposit and earn 5% interest annually with no fees. The minimum amount a customer needs to invest is $1,000, and the money must remain in the CD for at least one year.

The bank president wants customers to better understand CDs and not feel reluctant to take money out of savings to put into a CD. Your team must create an informational flyer to be mailed to all customers, placed at each bank teller station, and featured on LOCAL BANK’s social media platforms.

You will present the information to the bank president (judge) in a role-play to take place in the president’s office. The president will begin the role-play by greeting you and asking to hear your ideas. During the meeting, the president will ask you two questions. After you have presented your analysis and answered the president’s questions, the president will conclude the role-play by thanking you for your work.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    return `
You are generating a roleplay scenario for the Financial Services Team Decision Making (FTDM) event. Follow this multi-paragraph format that mirrors actual FTDM roleplays.

${exampleRoleplays[0]}

Now generate a new roleplay using this structure:

At the top of your output, place the seven performance indicators, each on a new line.

Paragraph 1: Setup  
You are to assume the roles of [position 1] and [position 2] at [COMPANY NAME]. The [judge role: manager, owner, or client] has asked your team to [briefly state the request or concern].

Paragraph 2: Judge & Company Context  
Describe the company’s business, the judge’s role, and why the issue is critical to the company.

Paragraph 3: Detailed Context & Data  
Provide relevant operational, financial, or market details that frame the situation.

Paragraph 4: Imperative  
Your team must [list the core tasks] in response to the situation. Integrate your recommendations to help the [judge role] understand [reasoning, importance, or impact]. The seven performance indicators should be woven into the narrative naturally.

Paragraph 5: Roleplay Flow  
You will present the information to the [manager/owner/client] (judge) in a role-play to take place in the [company/judge’s] office. The [judge role] will begin the role-play by greeting you and asking to hear your ideas. During the meeting, the [judge role] will ask you 2 questions... After you have presented your analysis and answered the [judge role]’s questions, the [judge role] will conclude the role-play by thanking you for your work.

IMPORTANT:
- Embed the indicators naturally. Do NOT list or label them explicitly beyond the top.
- Do not include judge instructions or trademarked content.
- Use the scenario range below for inspiration; you do not need to match it 1:1.

${FTDM.scenarioRange}

PERFORMANCE INDICATORS:
${indicators.map(i => `- ${i}`).join("\n")}
`.trim();
  }
};

export default FTDM;
