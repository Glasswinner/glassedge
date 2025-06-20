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
You are generating a high school-level DECA roleplay scenario for a Principles of Entrepreneurship (PEN) event. Follow this **EXACT 4-paragraph structure** modeled after the example below. Do not label or title the paragraphs.

${exampleRoleplays[0]}

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
- Embed the performance indicators naturally in the logic of the scenario. Do NOT tell the student to “explain the four performance indicators.”
- The response must not include rubrics, judge instructions, expected responses, or DECA branding.
- Output only the student-facing scenario in plain text. No formatting instructions or labels.
- Match the length and structure of the CITY PLOWING example. Do not shorten or reformat. At the end, display the four performance indicators. 

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
