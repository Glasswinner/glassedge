const PFN = {
  instructionalArea: "Mixed (See individual sets)",

  indicatorSets: [
    // 1. Credit and financial institutions
    [
      "Explain the purpose and importance of credit",
      "Identify factors affecting creditworthiness",
      "Describe considerations in selecting a financial services provider",
      "Explain the responsibilities of financial institutions"
    ],
    // 2. Budgeting and taxes
    [
      "Explain the concept of budgeting",
      "Describe sources of income",
      "Explain the impact of taxes on personal financial planning",
      "Determine personal net worth"
    ],
    // 3. Financial planning and goal setting
    [
      "Describe the purpose and importance of financial planning",
      "Set financial goals",
      "Explain the need to save and invest",
      "Develop personal budget"
    ],
    // 4. Financial institutions and services
    [
      "Describe types of financial-services providers",
      "Discuss considerations in selecting a financial-services provider",
      "Demonstrate the wise use of credit",
      "Explain forms of financial exchange"
    ],
    // 5. Career development in finance
    [
      "Describe techniques for obtaining work experience",
      "Explain the need for ongoing education as a worker",
      "Explain possible career advancement patterns for jobs",
      "Identify sources of career information"
    ],
    // 6. Credit and debt management
    [
      "Calculate the cost of credit",
      "Validate credit history",
      "Control debt",
      "Demonstrate the wise use of credit"
    ],
    // 7. Insurance and risk
    [
      "Describe the concept of insurance",
      "Explain the role of risk in financial planning",
      "Protect against identity theft",
      "Explain the purpose and use of credit scores"
    ],
    // 8. Online safety and identity
    [
      "Protect against identity theft",
      "Maintain financial records",
      "Read and reconcile bank statements",
      "Explain information privacy, security, and confidentiality considerations in business"
    ],
    // 9. Personal finance and recordkeeping
    [
      "Interpret a pay stub",
      "Prepare bank account documents",
      "Maintain financial records",
      "Pay bills"
    ],
    // 10. Understanding credit reports
    [
      "Explain the nature of credit reports",
      "Explain the purpose and use of credit scores",
      "Identify factors affecting creditworthiness",
      "Validate credit history"
    ],
    // 11. Technology and finance (Info Mgmt)
    [
      "Identify ways that technology impacts business",
      "Describe the scope of the internet",
      "Assess information needs",
      "Obtain needed information efficiently"
    ],
    // 12. Workplace skills (Professional Development)
    [
      "Set personal goals",
      "Use time-management skills",
      "Demonstrate problem-solving skills",
      "Explain the need for innovation skills"
    ],
    // 13. Investments and saving
    [
      "Explain types of investments",
      "Explain the need to save and invest",
      "Describe considerations in selecting a financial services provider",
      "Discuss the nature of retirement planning"
    ],
    // 14. Business ethics in finance
    [
      "Explain the role of ethics in finance",
      "Explain legal responsibilities associated with financial exchanges",
      "Describe the need for financial information",
      "Explain the use of technology in accounting"
    ],
    // 15. Accounting fundamentals
    [
      "Describe the nature of cash flow statements",
      "Explain the nature of income statements",
      "Explain the concept of accounting",
      "Explain the role of finance in business"
    ],
    // 16. Decision-making and budgeting
    [
      "Make responsible financial decisions",
      "Explain the concept of budgeting",
      "Calculate the cost of credit",
      "Determine personal net worth"
    ],
    // 17. Financial exchanges and tools
    [
      "Explain forms of financial exchange",
      "Describe functions of money",
      "Identify types of currency",
      "Discuss the nature of debtor-creditor relationships"
    ],
    // 18. Ethics and fraud prevention
    [
      "Demonstrate ethical work habits",
      "Protect against identity theft",
      "Demonstrate honesty and integrity",
      "Explain reasons for ethical dilemmas"
    ],
    // 19. Business reporting and organization
    [
      "Describe the nature of income statements",
      "Explain the nature of balance sheets",
      "Describe the nature of business records",
      "Explain the organizational design of businesses"
    ],
    // 20. Career planning and advancement
    [
      "Identify tentative occupational interest",
      "Explain career opportunities in entrepreneurship",
      "Utilize job-search strategies",
      "Utilize career-advancement activities to enhance professional development"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER\nFinance\n\nINSTRUCTIONAL AREA\nProfessional Development\n\n21st CENTURY SKILLS\n- Critical Thinking – Reason effectively and use systems thinking.\n- Communication – Communicate clearly.\n- Creativity and Innovation – Show evidence of creativity.\n\nPERFORMANCE INDICATORS\n- Describe techniques for obtaining work experience.\n- Explain the need for ongoing education as a worker.\n- Explain possible career advancement patterns for jobs.\n- Identify sources of career information.\n\nEVENT SITUATION\nYou are to assume the role of a bank teller at LOGAN CITY BANK, a local bank in a small town. The intern (judge) has asked you about jobs and careers in finance.\n\nThe intern will begin the roleplay by asking you about future careers.\n\nDuring the roleplay, the intern will ask:\n1. Which professional organizations are important to join in finance?\n2. How can I use this internship as a tool for future employment?`,

    `CAREER CLUSTER\nFinance\n\nINSTRUCTIONAL AREA\nInformation Management\n\n21st CENTURY SKILLS\n- Critical Thinking – Reason effectively and use systems thinking.\n- Communication – Communicate clearly.\n- Creativity and Innovation – Show evidence of creativity.\n\nPERFORMANCE INDICATORS\n- Identify ways that technology impacts business.\n- Describe the scope of the internet.\n- Assess information needs.\n- Obtain needed information efficiently.\n\nEVENT SITUATION\nYou are to assume the role of an employee at TRUSTED FAMILY FINANCIAL, a local business that specializes in secure financial planning. The owner (judge) has asked you to explain why having a website would be beneficial for the business.\n\nThe owner will begin the roleplay by asking you about the value of having a website.\n\nDuring the roleplay, the owner will ask:\n1. How can we let our customers know that we have a website?\n2. How can we let the general public know that we have a website?`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => `
You are generating a business roleplay scenario designed for high school-level business competition prep.

Use this structure and format, modeled after the examples below:

${exampleRoleplays[0]}

${exampleRoleplays[1]}

Instructional Area: Based on indicator set
Career Cluster: Finance

Performance Indicators:
${indicators.map((pi, i) => `${i + 1}. ${pi}`).join('\n')}

The scenario must:
- Involve a student in a finance-related job
- Include a finance-related judge role
- Pose a realistic financial task to the student
- Include 2 realistic judge questions
- Avoid DECA branding, judge instructions, or rubrics
-Make the sure roleplay scenario itself is as long as the examples  just the student part of course
`
  Randomly choose one of the two standard roleplay styles used in business competitions:

1. **Foundational Style** – Create a scenario where the student's role naturally involves using and discussing the performance indicators through their responsibilities (e.g., advising a colleague, helping a customer, presenting a plan). Do **not** explicitly say “explain the four performance indicators.” Instead, embed the indicators into the situation's logic and the student’s task.

2. **Problem-Solution Style** – Create a scenario where the student must solve a realistic business problem. The issue should be structured in a way that naturally requires addressing the performance indicators as part of the solution, without stating them directly.
};

export default PFN;
