const PBM = {
  instructionalArea: "Mixed (See individual sets)",

  indicatorSets: [
    // Communications
    [
      "Explain the nature of effective written communications",
      "Choose and use appropriate channel for workplace communication",
      "Explain the nature of staff communication",
      "Explain the nature of effective verbal communications"
    ],
    [
      "Participate in a staff meeting",
      "Write professional emails",
      "Employ communication styles appropriate to target audience",
      "Edit and revise written work consistent with professional standards"
    ],

    // Customer Relations
    [
      "Demonstrate a customer service mindset",
      "Respond to customer inquiries",
      "Build and maintain relationships with customers",
      "Explain the nature of positive customer relations"
    ],
    [
      "Handle customer/client complaints",
      "Reinforce service orientation through communication",
      "Adapt communication to cultural differences",
      "Interpret business policies to customers/clients"
    ],

    // Economics
    [
      "Distinguish between economic goods and services",
      "Describe factors that affect the business environment",
      "Explain the principles of supply and demand",
      "Explain the concept of competition"
    ],
    [
      "Explain the role of business in society",
      "Identify factors affecting a business's profit",
      "Determine economic utilities created by business activities",
      "Explain the concept of private enterprise"
    ],

    // Emotional Intelligence
    [
      "Demonstrate self-control",
      "Show empathy for others",
      "Demonstrate ethical work habits",
      "Demonstrate responsible behavior"
    ],
    [
      "Explain reasons for ethical dilemmas",
      "Foster open, honest communication",
      "Use appropriate assertiveness",
      "Demonstrate honesty and integrity"
    ],

    // Financial Analysis
    [
      "Maintain financial records",
      "Pay bills",
      "Interpret a pay stub",
      "Read and reconcile bank statements"
    ],
    [
      "Calculate the cost of credit",
      "Demonstrate the wise use of credit",
      "Validate credit history",
      "Make responsible financial decisions"
    ],

    // Human Resources
    [
      "Explain the role of ethics in human resources management",
      "Explain the nature of human resources management",
      "Describe desirable personality traits important to business",
      "Explain the concept of leadership"
    ],

    // Information Management
    [
      "Access information in the database system",
      "Store information for future use",
      "Draw conclusions based on information analysis",
      "Assess information needs"
    ],
    [
      "Apply information to accomplish a task",
      "Organize and prioritize work",
      "Evaluate quality and source of information",
      "Discuss the nature of information management"
    ],

    // Marketing
    [
      "Explain the concept of marketing",
      "Explain types of promotion",
      "Identify the target market for a product",
      "Explain factors that influence customer buying behavior"
    ],

    // Operations
    [
      "Organize and prioritize work",
      "Coordinate work with that of team members",
      "Monitor and ensure completion of delegated tasks",
      "Follow safety precautions"
    ],
    [
      "Explain procedures for handling accidents",
      "Describe health and safety regulations in business",
      "Maintain a safe work environment",
      "Describe the nature of business records"
    ],

    // Professional Development
    [
      "Set personal goals",
      "Demonstrate problem-solving skills",
      "Use time-management skills",
      "Explain the need for innovation skills"
    ],
    [
      "Demonstrate adaptability",
      "Describe desirable personality traits important to business",
      "Utilize career-advancement activities to enhance professional development",
      "Demonstrate interest and enthusiasm"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER\nBusiness Management & Administration\n\nINSTRUCTIONAL AREA\nCommunication Skills\n\n21st CENTURY SKILLS\n- Critical Thinking – Reason effectively and use systems thinking.\n- Communication – Communicate clearly.\n- Creativity and Innovation – Show evidence of creativity.\n\nPERFORMANCE INDICATORS\n- Explain the nature of staff communication\n- Choose and use appropriate channel for workplace communication\n- Explain the nature of effective written communications\n- Explain the nature of effective verbal communications\n\nEVENT SITUATION\nYou are to assume the role of a front desk employee at GRAND GROCERY DISTRIBUTION CENTER, a large distribution center for a regional grocery store. The manager (judge) asked you to communicate a change in policy to all staff.\n\nThe manager (judge) has worked at the company for several years and helps coordinate communications and safety policies among departments. GRAND GROCERY DISTRIBUTION CENTER includes four areas: front office, executive offices, employee locker room, and product fill area. A new policy now restricts access to these spaces using keycards.\n\nYou must develop a clear internal communication plan, address potential concerns staff may raise, and propose how to ensure compliance. Your approach should reflect professionalism and clarity.\n\nThe role-play will take place in the front office. The manager (judge) will begin by asking how you would communicate the new security policy. After your presentation and answers to follow-up questions, the judge will thank you.`,

    `CAREER CLUSTER\nBusiness Management & Administration\n\nINSTRUCTIONAL AREA\nEconomics\n\n21st CENTURY SKILLS\n- Critical Thinking – Reason effectively and use systems thinking.\n- Communication – Communicate clearly.\n- Creativity and Innovation – Show evidence of creativity.\n\nPERFORMANCE INDICATORS\n- Distinguish between economic goods and services\n- Explain the principles of supply and demand\n- Describe factors that affect the business environment\n- Explain the concept of competition\n\nEVENT SITUATION\nYou are to assume the role of a purchasing assistant at GREAT CITY CONSTRUCTION, a construction company in a growing town. A new employee (judge) has asked for clarification on recent increases in raw material prices.\n\nThe judge recently joined the team as a junior buyer and is learning how market conditions affect purchasing strategies. GREAT CITY CONSTRUCTION depends on materials like copper and steel, and supply chain disruptions have caused noticeable cost fluctuations.\n\nYou must explain how basic economic principles apply to raw materials pricing. Include supply/demand dynamics, competitive sourcing, and external environmental factors.\n\nThe role-play will occur in the shared office. The judge will begin by asking you why prices fluctuate. After your explanation and answers to two questions, the judge will thank you.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

    return `
You are generating a high school-level DECA roleplay scenario for a Principles of Business Management & Administration event. Follow this **EXACT 4-paragraph structure** modeled after the examples below. Do not label or title the paragraphs.

${exampleRoleplays[0]}

${exampleRoleplays[1]}

Now generate a new roleplay using this format:

Paragraph 1: Setup  
Begin with **"You are to assume the role of..."** and describe the student’s job at a business. Mention the judge’s role and their specific request or concern.  
🔑 Required phrasing: "You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic]."

Paragraph 2: Judge & Company Context  
Explain who the judge is, what they do, and how they interact with the student. Describe the business’s focus and how the topic relates to it.  
\uD83D\uDD11 Required phrasing: "The [judge role] has worked at [company] for [time]... The company specializes in..."

Paragraph 3: Expanded Imperative  
Rephrase and expand the student’s task. Include specific actions they must take and why the information matters.  
🔑 Required phrasing: "You must [do task]... You should [support/explain] to help the [judge role] understand..."

Paragraph 4: Flow of Roleplay  
Describe the logistics of the interaction — the setting, how the roleplay begins, that the judge will ask two questions, and how the roleplay concludes.  
🔑 Required phrasing: "You will present the information to the [judge]... The [judge] will begin the role-play by asking you about... After you have presented... the [judge] will thank you. At the end, put the four performance indicators."

IMPORTANT RULES:
- Embed the performance indicators naturally in the logic of the scenario. Do NOT tell the student to “explain the four performance indicators.”
- The response must not include rubrics, judge instructions, expected responses, or DECA branding.
- Output only the student-facing scenario in plain text. No formatting instructions or labels.
- Match the length and structure of the two example roleplays. Do not shorten. The user must be in a career related to: careers in administrative services, business information management, general management, human resources management, and operations management.

Use the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators. Example: helping a customer, assisting a colleague, or reporting to a supervisor. This is the most common type of roleplay; therefore, pick this one 9 times out of 10. Furthermore, as a general instruction applying despite which type of roleplay you pick, do not include a scenario logic section at the bottom of the roleplay."
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require their judgment, analysis, or communication."
    }
    `.trim();
  }
};

export default PBM;
