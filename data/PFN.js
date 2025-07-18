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
You are generating a high school-level DECA roleplay scenario for a Principles of Finance (PFN) event. Follow the tone of the example below. Do not label or title the paragraphs.
SCENARIO RANGE:
Scenarios should reflect realistic workplace situations for high school–level employees in finance roles. These may include:
- Assisting a customer with banking or credit services
- Mentoring a new intern
- Preparing for a financial education event or workshop
- Updating documents, reports, or data for a supervisor
- Responding to an operational or customer-service concern
- Explaining financial decisions to coworkers
-And more...these are just examples to show what scenario CAN be like...you can go into scenarios different to these.
These examples are merely general guides, and you must go into greater depth than that.Avoid unrealistic executive decision-making, dramatic emergencies, or school-based settings. All scenarios must be grounded in a small-business or entry-level professional finance context.


${exampleRoleplays[0]}

DO NOT REPEAT THE GIST OF THIS SCENARIO...PREVIOUSLY MENTIONED WERE THE TYPES OF SCENARIOS YOU COULD FOLLOW...

SCENARIO DEPTH REQUIREMENT:
Each paragraph should be 2–4 full sentences and provide meaningful detail. Use realistic workplace tasks, specific examples, and natural phrasing. Avoid vague summaries. The scenario should provide enough information to support a thoughtful, high-scoring student response without feeling generic.


Now generate a new roleplay using this format:

Paragraph 1: Setup  
Begin with **"You are to assume the role of..."** and describe the student’s job at a business. Mention the judge’s role and their specific request or concern.  
🔑 Required phrasing: "You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic]."

Paragraph 2: Judge & Company Context  
Explain who the judge is, what they do, and how they interact with the student. Describe the business’s focus and how the topic relates to it.  
🔑 Required phrasing: "The [judge role] will be at [company] for [time]... The company specializes in..."

Paragraph 3: Expanded Imperative  
Rephrase and expand the student’s task. Include specific actions they must take and why the information matters.  
🔑 Required phrasing: "You must [do task]... You should [support/explain] to help the [judge role] understand..."

Paragraph 4: Flow of Roleplay  
Describe the logistics of the interaction — the setting, how the roleplay begins, that the judge will ask two questions, and how the roleplay concludes.  
🔑 Required phrasing: "You will present the information to the [judge]... The [judge] will begin the role-play by asking you about... After you have presented... the [judge] will thank you."

IMPORTANT RULES:
- Embed the performance indicators naturally in the logic of the scenario, and do not make it blatantly obvious. Have some tact here. Do NOT tell the student to “explain the four performance indicators.” Furthermore, do not use the same performance indicators as the example roleplay.
- The response must not include rubrics, judge instructions, expected responses, or DECA branding.
- Output only the student-facing scenario in plain text. No formatting instructions or labels.
- The student must be an employee performing financial duties( accountant, financial advisor, etc.) Do not shorten or reformat from the given paragraph structure. 

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
