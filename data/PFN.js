const PFN = {
  instructionalArea: "Mixed (See individual sets)",

  indicatorSets: [
    // Credit & Financial Institutions
    [
      "Explain the purpose and importance of credit",
      "Identify factors affecting creditworthiness",
      "Describe considerations in selecting a financial services provider",
      "Explain the responsibilities of financial institutions"
    ],
    [
      "Calculate the cost of credit",
      "Validate credit history",
      "Control debt",
      "Demonstrate the wise use of credit"
    ],

    // Budgeting & Income
    [
      "Explain the concept of budgeting",
      "Describe sources of income",
      "Explain the impact of taxes on personal financial planning",
      "Determine personal net worth"
    ],
    [
      "Make responsible financial decisions",
      "Explain the concept of budgeting",
      "Calculate the cost of credit",
      "Determine personal net worth"
    ],

    // Financial Planning
    [
      "Describe the purpose and importance of financial planning",
      "Set financial goals",
      "Explain the need to save and invest",
      "Develop personal budget"
    ],
    [
      "Explain types of investments",
      "Explain the need to save and invest",
      "Describe considerations in selecting a financial services provider",
      "Discuss the nature of retirement planning"
    ],

    // Banking & Documents
    [
      "Describe types of financial-services providers",
      "Discuss considerations in selecting a financial-services provider",
      "Demonstrate the wise use of credit",
      "Explain forms of financial exchange"
    ],
    [
      "Protect against identity theft",
      "Maintain financial records",
      "Read and reconcile bank statements",
      "Explain information privacy, security, and confidentiality considerations in business"
    ],
    [
      "Interpret a pay stub",
      "Prepare bank account documents",
      "Maintain financial records",
      "Pay bills"
    ],

    // Credit Scores & Reports
    [
      "Explain the nature of credit reports",
      "Explain the purpose and use of credit scores",
      "Identify factors affecting creditworthiness",
      "Validate credit history"
    ],

    // Professional Development
    [
      "Describe techniques for obtaining work experience",
      "Explain the need for ongoing education as a worker",
      "Explain possible career advancement patterns for jobs",
      "Identify sources of career information"
    ],
    [
      "Identify tentative occupational interest",
      "Explain career opportunities in entrepreneurship",
      "Utilize job-search strategies",
      "Utilize career-advancement activities to enhance professional development"
    ],

    // Ethics & Emotional Intelligence
    [
      "Demonstrate ethical work habits",
      "Protect against identity theft",
      "Demonstrate honesty and integrity",
      "Explain reasons for ethical dilemmas"
    ],
    [
      "Demonstrate ethical work habits",
      "Show empathy for others",
      "Demonstrate self-control",
      "Demonstrate responsible behavior"
    ],
    [
      "Explain the concept of self-esteem",
      "Demonstrate honesty and integrity",
      "Demonstrate interest and enthusiasm",
      "Use appropriate assertiveness"
    ],

    // Communication
    [
      "Explain the nature of effective verbal communications",
      "Provide legitimate responses to inquiries",
      "Demonstrate active listening skills",
      "Employ communication styles appropriate to target audience"
    ],
    [
      "Write professional emails",
      "Explain the nature of effective written communications",
      "Select and utilize appropriate formats for professional writing",
      "Participate in group discussions"
    ],

    // Customer Service
    [
      "Demonstrate a customer service mindset",
      "Reinforce service orientation through communication",
      "Respond to customer inquiries",
      "Interpret business policies to customers/clients"
    ],
    [
      "Handle customer/client complaints",
      "Build and maintain relationships with customers",
      "Explain the nature of positive customer relations",
      "Adapt communication to cultural differences"
    ],

    // Economics
    [
      "Explain the concept of competition",
      "Determine economic utilities created by business activities",
      "Explain the concept of private enterprise",
      "Identify factors affecting a business's profit"
    ],
    [
      "Explain the role of business in society",
      "Discuss the impact of globalization on business",
      "Describe types of business activities",
      "Explain the principles of supply and demand"
    ],

    // Human Resources
    [
      "Explain the role of ethics in human resources management",
      "Orient new employees",
      "Explain the nature of human resources management",
      "Describe the use of technology in human resources management"
    ],
    [
      "Describe desirable personality traits important to business",
      "Demonstrate adaptability",
      "Explain the concept of leadership",
      "Explain the nature of staff communication"
    ],

    // Safety & Operations
    [
      "Follow safety precautions",
      "Explain procedures for handling accidents",
      "Describe health and safety regulations in business",
      "Maintain a safe work environment"
    ],

    // Records & Productivity
    [
      "Describe the nature of business records",
      "Organize and prioritize work",
      "Coordinate work with that of team members",
      "Monitor and ensure completion of delegated tasks"
    ],

    // Marketing & Buying Behavior
    [
      "Explain marketing and its importance in a global economy",
      "Describe marketing functions and related activities",
      "Explain factors that influence customer buying behavior",
      "Demonstrate connections between company actions and results"
    ],
    [
      "Explain the concept of marketing",
      "Describe the use of technology in marketing",
      "Explain types of promotion",
      "Identify the target market for a product"
    ],

    // Information Management
    [
      "Identify ways that technology impacts business",
      "Evaluate quality and source of information",
      "Draw conclusions based on information analysis",
      "Explain the role of ethics in information management"
    ],
    [
      "Discuss the nature of information management",
      "Apply information to accomplish a task",
      "Store information for future use",
      "Access information in the database system"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER

Finance

INSTRUCTIONAL AREA
Professional Development

21st CENTURY SKILLS
- Critical Thinking – Reason effectively and use systems thinking.
- Communication – Communicate clearly.
- Creativity and Innovation – Show evidence of creativity.

PERFORMANCE INDICATORS
- Describe techniques for obtaining work experience.
- Explain the need for ongoing education as a worker.
- Explain possible career advancement patterns for jobs.
- Identify sources of career information.

EVENT SITUATION
You are to assume the role of a bank teller at LOGAN CITY BANK, a local bank in a small town. The intern (judge) has asked you about jobs and careers in finance.

The intern (judge) will be at the LOGAN CITY BANK location for the semester. The intern’s first role is to assist you and learn the responsibilities of a bank teller. The intern will also help others in the office, including loan officers, business account representatives, and customer service reps.

The intern has asked you how to learn more about careers and jobs in finance, what education is needed, and how one can move up. The intern also wants to know how to gain additional experience outside of this internship.

You will present this information in a role-play that takes place at the bank. The intern will begin by asking you about future careers. During the conversation, the intern will ask:
1. Which professional organizations are important to join in finance?
2. How can I use this internship as a tool for future employment?
The intern will thank you at the end of the role-play.`
],

promptTemplate: ({ indicators, exampleRoleplays }) => {
  const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

  return `
You are generating a realistic, high school-level DECA roleplay scenario for the Principles of Finance (PFN) event.

❗ DO NOT COPY OR REWORD THE EXAMPLE BELOW. It is only to show tone and paragraph structure.  
❗ The topic of your generated scenario MUST clearly relate to the performance indicators provided below.  
❗ The student must ALWAYS be an employee performing financial duties (e.g., in banking, accounting, financial planning, or investments).  
❗ The judge should NOT be an intern unless indicators explicitly relate to professional development or training.

⬇️ Use the following performance indicators as the foundation for your prompt:  
- ${indicators.join('\n- ')}

SCENARIO EXAMPLE (DO NOT COPY):  
${exampleRoleplays[0]}

Now generate a new roleplay using this format:

Performance Indicators: Place the four performance indicators, each on a new line.

Paragraph 1: Setup  
Start with: “You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic].”

Paragraph 2: Judge & Company Context  
Explain who the judge is, what they do, and how they interact with the student.  
🔑 Required phrasing: “The [judge] will be at [company] for [time]... The company specializes in...”  
Include at least 3 full sentences describing the business and the topic's relevance.

Paragraph 3: Expanded Imperative  
Restate and expand on what the student must do.  
🔑 Required phrasing: “You must [do task]... You should [support/explain] to help the [judge role] understand...”  
Write 3–4 full sentences using natural, realistic instructions. Embed the indicators tactfully without listing them.


Paragraph 4: Flow of Roleplay  
Explain where the roleplay takes place and how it unfolds, and two questions the judge has. Required phrasing:  
"You will present the information to the [judge]... The [judge] will begin the role-play by asking you about... During your conversation the [judge] will ask you two questions: ... The [judge] will thank you at the end of the meeting."

SCENARIO RANGE:
Scenarios must reflect realistic entry-level finance workplace settings. Acceptable contexts include:  
- Assisting clients with banking or investment concerns  
- Collaborating on financial documents or reporting  
- Clarifying compliance or policy details for a colleague  
- Responding to operational questions in a financial setting  
- Explaining professional development pathways for finance employees

Scenarios are not limited to these contexts. Always consider the performance indicators when making a scenario.

SCENARIO DEPTH:
Each paragraph must be 2–4 full sentences with meaningful detail and a natural voice. Avoid vague summaries, dramatic emergencies, or high-level executive decision-making. The tone should reflect a student employee in a realistic finance role.





Use the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators. Example: helping a customer, assisting a colleague, or reporting to a supervisor. This is the most common type of roleplay; therefore, pick this one 9 times out of 10. Furthermore, as a general instruction applying despite which type of roleplay you pick, do not include a scenario logic section at the bottom of the roleplay. "
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require their judgment, analysis, or communication. "
    }
    `.trim();
  }
};

export default PFN;
