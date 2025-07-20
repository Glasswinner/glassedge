const BFS = {
  instructionalArea: "Corporate Finance (Financial Analysis & Economics)",

  indicatorSets: [
    // Financial Statements & Analysis
    [
      "Explain the nature of balance sheets",
      "Describe the nature of income statements",
      "Describe the nature of cash flow statements",
      "Discuss the analysis of a company’s financial situation using its financial statements",
      "Explain how value is created for a company"
    ],

    // Cost Analysis & Budgeting
    [
      "Describe types of costs used in managerial accounting",
      "Explain methods used to analyze capital investments",
      "Perform budgetary cost analysis",
      "Explain the concept of budgeting",
      "Calculate capital investment return"
    ],

    // Risk & Insurance
    [
      "Describe the concept of insurance",
      "Determine insurance needs",
      "Explain the nature of risk management",
      "Identify project benefits and costs",
      "Conduct a risk assessment of an event"
    ],

    // Legal, Compliance & Governance
    [
      "Explain legal considerations for finance",
      "Comply with financial reporting and internal control laws and regulations in corporate finance",
      "Explain the importance of corporate governance in business",
      "Discuss legal considerations in the finance industry",
      "Explain legal responsibilities associated with consumer financial products and services"
    ],

    // Corporate Finance & Managerial Accounting
    [
      "Explain the role of finance in business",
      "Describe the nature of cash flows",
      "Describe marginal analysis techniques and applications",
      "Analyze the impact of accounts payable schedules on working capital",
      "Discuss the impact of employee benefits on business financials"
    ],

    // Economics & Business Value
    [
      "Describe the concepts of economics and economic activities",
      "Explain the principles of supply and demand",
      "Determine economic utilities created by business activities",
      "Explain the role of business in society",
      "Discuss external forces affecting a company’s value"
    ],

    // Investment & Capital Markets
    [
      "Explain the role of capital markets in business finance",
      "Calculate stock-related values",
      "Calculate bond-related values",
      "Explain the nature of capital investment",
      "Explain the impact of the cost of capital on capital investments"
    ],

    // Financial Needs & Planning
    [
      "Explain the need to save and invest",
      "Set financial goals",
      "Develop personal budget",
      "Make responsible financial decisions",
      "Discuss the financial planning process"
    ],

    // Working Capital & Solvency
    [
      "Prepare cash flow budgets/forecasts",
      "Analyze cash budget/forecast variances",
      "Describe components of a collection system",
      "Describe the nature of short-term financial management",
      "Explain the use of cash budgets"
    ],

    // Project Management & Profitability
    [
      "Monitor project portfolio",
      "Describe components of a payment system",
      "Use the time value of money to make business decisions",
      "Evaluate leases",
      "Describe types of financial risks"
    ],

    // Ethics & Risk Management
    [
      "Discuss the role of ethics in finance",
      "Describe the nature of risk measurement",
      "Discuss the relationship between risk management and business finance",
      "Explain the role of operations and compliance in risk management programs",
      "Discuss the nature of risk control"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER
Finance

CAREER PATHWAY
Corporate Finance

INSTRUCTIONAL AREA  
Financial Analysis

BUSINESS FINANCE SERIES EVENT

PARTICIPANT INSTRUCTIONS

• The event will be presented to you through your reading of the 21st Century Skills, Performance Indicators and Event Situation. You will have up to 10 minutes to review this information and prepare your presentation. You may make notes to use during your presentation.

• You will have up to 10 minutes to make your presentation to the judge (you may have more than one judge).

• You will be evaluated on how well you meet the performance indicators of this event.  
• Turn in all of your notes and event materials when you have completed the event.

21st CENTURY SKILLS

• Critical Thinking – Reason effectively and use systems thinking.
• Problem Solving – Make judgments and decisions, and solve problems.
• Communication – Communicate clearly.
• Creativity and Innovation – Show evidence of creativity.

PERFORMANCE INDICATORS

- Explain legal considerations for finance.
- Explain the nature of financial needs.
- Demonstrate financial analysis applications.
- Identify project benefit and costs.
- Apply information to accomplish a task.

EVENT SITUATION

You are to assume the role of a financial consultant contracted to advise and oversee the finances at TIMELESS BEARS, a small family-owned retailer that sells stuffed animals. The owner of TIMELESS BEARS (judge) has asked you for an analysis and recommendations regarding an upcoming change in new business expenses.  

TIMELESS BEARS is a family-owned business that manufactures and sells stuffed animals as well as apparel for the bears. The company began 10 years ago and prides itself on donating one bear to a child in a war-torn country with every purchase of a bear. While the location of the company is perfect for customer traffic, many surrounding businesses have endured flooding due to heavy storms and proximity to an often-flooded river. The TIMELESS BEARS company has not suffered any flooding, but the owner (judge) is worried.  

The owner of the company (judge) employs five part-time employees that are paid $8.00 per hour. Effective January 1st, a new city ordinance will require businesses to pay employees a minimum of $10.00 per hour. The owner (judge) is also considering purchasing insurance to protect the business against floods. The owner (judge) has been provided with a quote of $4,000 a year for the insurance. Below is a brief overview of the expenses/sales that the owner (judge) has provided you from last year’s income statement:  

| Item                                | Amount         |
|-------------------------------------|----------------|
| Part-time employee salaries         | $28,935.00     |
| Employer payroll taxes (8.3%)       | $2,402.00      |
| Gross sales before expenses         | $123,475.00    |
| Net sales after expenses            | $52,425.00     |

The owner (judge) has requested to visit with you to discuss the following issues:  

• Why local governments periodically increase minimum wage.  
• Explain and calculate how the increase in payroll taxes will affect next year’s profit.  
• Provide a risk analysis for the purchase of insurance.  

You will present your ideas to the owner (judge) in a role-play to take place in the owner’s (judge’s) office. The owner (judge) will begin the role-play by greeting you and asking to hear your ideas. After you have presented your sales ideas and have answered the owner’s (judge’s) questions, the owner (judge) will conclude the role-play by thanking you for your work.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const includeJudgment = Math.random() < 0.7;

    return `

You are generating a DECA roleplay scenario for the Business Finance Series (BFS) event. Follow this multi-paragraph format that mirrors actual DECA roleplays.

${exampleRoleplays[0]}

Now generate a new roleplay using this structure:

Performance Indicators: Place the five performance indicators, each on a new line.

Paragraph 1: Setup  
Describe the student’s role at a company and the judge’s request. Start with: You are to assume the role of a(n) [financial analysist, senior financial advisor, etc.] at [COMPANY NAME]. The [judge role: manager, owner, or client] has asked you to [briefly state the request or concern].


Paragraph 2: Judge & Company Context  
Describe the company’s business, the judge’s role, and why the issue is relevant to the business.

Paragraph 3: Task Breakdown  
List what the student must do: explain, analyze, or interpret specific financial or economic concepts. Be clear but not formulaic.

Paragraph 4: Financial Details (if applicable)  
Provide relevant data, costs, or business challenges that the student must reference or work through.

${includeJudgment ? `Paragraph 5: Recommendation  
Conclude with an instruction that the student should form a recommendation or judgment based on their analysis.` : ``}

Paragraph 6: Roleplay Flow  
Explain how the roleplay begins, the judge's two questions, and how it ends. Do not mention rubrics. Required phrasing: You will present the information to the [manager/owner/client] (judge) in a role-play to take place in the [company/judge’s] office. The [judge role] will begin the role-play by greeting you and asking to hear your ideas. During the meeting, the [judge role] will ask you 2 questions... After you have presented your analysis and answered the [judge role]’s questions, the [judge role] will conclude the role-play by thanking you for your work.


IMPORTANT:
- Embed the indicators naturally. Do NOT list or label them explicitly. Furthermore, do not explicity label paragraphs. 
- Do not include judge instructions, scenario logic sections, or DECA branding.
- Match tone and format to actual BFS event examples.

PERFORMANCE INDICATORS:
${indicators.map(i => `- ${i}`).join("\n")}
`.trim();
  }
};

export default BFS;
