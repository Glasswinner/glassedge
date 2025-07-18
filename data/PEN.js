const PEN = {
  instructionalArea: "Mixed (See individual sets)",

  indicatorSets: [
    // Economics
    [
      "Explain the principles of supply and demand",
      "Explain the concept of competition",
      "Describe the functions of prices in markets",
      "Identify factors affecting a business’s profit"
    ],
    [
      "Determine the relationship between government and business",
      "Describe factors that affect the business environment",
      "Explain the concept of economic resources",
      "Describe the role of business in society"
    ],

    // Operations
    [
      "Explain the nature of operations",
      "Explain the nature and scope of purchasing",
      "Explain the concept of production",
      "Maintain inventory of supplies"
    ],
    [
      "Identify resources needed for business operations",
      "Explain the importance of time management",
      "Explain procedures for handling accidents",
      "Follow safety precautions"
    ],

    // Information Management
    [
      "Discuss the nature of information management",
      "Assess information needs",
      "Obtain needed information efficiently",
      "Evaluate quality and source of information"
    ],
    [
      "Use analytical methods to identify business problems",
      "Explain legal issues associated with information management",
      "Explain the role of ethics in information management",
      "Translate research findings into actionable business recommendations"
    ],

    // Financial Analysis
    [
      "Describe types of financial statements",
      "Explain the nature of budgets",
      "Explain the concept of accounting",
      "Maintain financial records for a business"
    ],
    [
      "Explain the role of finance in business",
      "Explain cash control procedures",
      "Interpret cash flow statements",
      "Forecast sales"
    ],

    // Marketing and Promotion
    [
      "Explain the role of promotion as a marketing function",
      "Describe the use of technology in marketing",
      "Explain the types of promotion",
      "Coordinate activities in the promotional mix"
    ],
    [
      "Explain the concept of marketing strategies",
      "Describe marketing functions and related activities",
      "Explain factors that influence customer buying behavior",
      "Explain the concept of market and market identification"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER
Entrepreneurship

INSTRUCTIONAL AREA
Economics

21st CENTURY SKILLS
- Critical Thinking – Reason effectively and use systems thinking.
- Communication – Communicate clearly.
- Creativity and Innovation – Show evidence of creativity.

PERFORMANCE INDICATORS
- Explain the principles of supply and demand.
- Explain the concept of competition.
- Describe the functions of prices in markets.
- Identify factors affecting a business’s profit.

EVENT SITUATION
You are to assume the role of the owner of CITY PLOWING, a small business that provides snow removal services. A new employee (judge) wants you to explain why non-contract pricing increases after a blizzard or ice storm.

CITY PLOWING provides residents and businesses in the community with snow removal services. You have three large trucks equipped with snowplows that can move large loads of snow and mechanisms to drop salt and sand on icy roads and slick driveways to prevent buildup.

The new employee (judge) has asked why CITY PLOWING’S rates increase to almost double during and immediately following a blizzard or ice storm for customers not on contract.

You will present the information to the new employee (judge) in a role-play to take place in your office. The new employee (judge) will begin the role-play by asking you about prices. After you have presented the information to the new employee (judge) and have answered the new employee’s (judge’s) questions, the new employee (judge) will conclude the role-play by thanking you for the information.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

    return `
You are generating a realistic, high school-level DECA roleplay scenario for the Principles of Entrepreneurship (PFN) event.

❗ DO NOT COPY OR REWORD THE EXAMPLE BELOW. It is only to show tone and paragraph structure.  
❗ The topic of your generated scenario MUST clearly relate to the performance indicators provided below.  
❗ The student must take on a role typical in a small business or startup (e.g., owner, team leader, employee, or partner).
 
❗ The judge should NOT be a new employee unless indicators explicitly relate to professional development or training.

⬇️ Use the following performance indicators as the foundation for your prompt:  
- ${indicators.join('\n- ')}

SCENARIO EXAMPLE (DO NOT COPY):  
${exampleRoleplays[0]}

Now generate a new roleplay using this format:

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
Scenarios must reflect realistic entrepreneurship workplace setting. Acceptable contexts include:  
  
  -Training a new employee on pricing strategies and customer billing practices

  -Explaining how supply chain choices affect product quality and profit margins

  -Clarifying inventory procedures and reordering processes for a new hire
  
  -Justifying price changes based on seasonal demand or economic conditions

  -Responding to employee questions about vendor selection and consistency

  -Discussing how production issues impact customer satisfaction and timelines

  -Assisting an investor with understanding local market needs and demand trends

  -Describing how to collect customer feedback to guide business decisions

  -Outlining the importance of maintaining consistent inventory for smooth operations

  -Explaining how economic trends influence small business strategy and revenue
 


SCENARIO DEPTH:
Each paragraph must be 2–4 full sentences with meaningful detail and a natural voice. Avoid vague summaries, dramatic emergencies, or high-level executive decision-making. The tone should reflect a student employee in a realistic entrepreneurship(ie. a business owner, aspiring entrepreneur, etc.) role.

Use the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators. Example: helping a customer, assisting a colleague, or reporting to a supervisor. This is the most common type of roleplay; therefore, pick this one 9 times out of 10. Furthermore, as a general instruction applying despite which type of roleplay you pick, do not include a scenario logic section at the bottom of the roleplay. "
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require their judgment, analysis, or communication. "
    }
    `.trim();
  }
};

export default PEN;
