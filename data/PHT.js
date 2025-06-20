const PHT = {
  instructionalArea: "Mixed (See individual sets)",

  indicatorSets: [
    // Professional Development
    [
      "Identify sources of career information",
      "Use networking techniques to identify employment opportunities",
      "Identify skills needed to enhance career progression",
      "Utilize resources that can contribute to professional development"
    ],

    // Emotional Intelligence
    [
      "Coach others",
      "Respect the privacy of others",
      "Show empathy for others",
      "Explain the nature of effective communications"
    ],

    // Operations
    [
      "Explain the nature of operations",
      "Describe health and safety regulations in business",
      "Maintain a safe work environment",
      "Explain routine security precautions"
    ],

    // Customer Relations
    [
      "Interpret business policies to customers/clients",
      "Demonstrate a customer service mindset",
      "Handle customer/client complaints",
      "Reinforce service orientation through communication"
    ],

    // Communication
    [
      "Explain the nature of effective verbal communications",
      "Demonstrate active listening skills",
      "Provide legitimate responses to inquiries",
      "Employ communication styles appropriate to target audience"
    ],

    // Marketing in Hospitality
    [
      "Explain marketing and its importance in a global economy",
      "Describe marketing functions and related activities",
      "Explain the concept of market and market identification",
      "Explain promotional methods used by businesses"
    ],

    // Technology & Guest Services
    [
      "Describe the use of technology in hospitality and tourism",
      "Explain the nature of guest service in the hospitality industry",
      "Use software to manage customer relationships",
      "Explain the role of customer service as a component of selling relationships"
    ],

    // Financial Literacy & Budgeting
    [
      "Describe the nature of budgets",
      "Explain the importance of financial planning",
      "Interpret financial statements",
      "Maintain financial records"
    ],

    // Human Resources & Ethics
    [
      "Orient new employees",
      "Explain the nature of staff communication",
      "Demonstrate ethical work habits",
      "Follow rules of conduct"
    ],

    // Tourism Industry & Economic Impact
    [
      "Explain the economic impact of hospitality and tourism",
      "Describe trends in the hospitality and tourism industry",
      "Identify career opportunities in hospitality and tourism",
      "Describe the importance of cultural sensitivity when serving customers"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER
Hospitality and Tourism

INSTRUCTIONAL AREA
Professional Development

21st CENTURY SKILLS
- Critical Thinking – Reason effectively and use systems thinking.
- Communication – Communicate clearly.
- Creativity and Innovation – Show evidence of creativity.

PERFORMANCE INDICATORS
- Identify sources of career information.
- Use networking techniques to identify employment opportunities.
- Identify skills needed to enhance career progression.
- Utilize resources that can contribute to professional development.

EVENT SITUATION
You are to assume the role of the general manager at CITY HOTEL & CONVENTION CENTER, a full-service hotel with an attached convention center. A college student (judge) will be graduating from a hospitality management program soon and has asked you about various employment opportunities and job progression.

A student (judge) will be graduating from a hospitality management program soon and is not sure how to find a job after graduation. The student (judge) wants your help in identifying:
- Employment opportunities at full-service hotels with convention centers
- Skills employers are looking for in new hires
- Networking techniques to identify employment opportunities
- Resources that will enhance professional development

You will present the information to the student (judge) in a role-play to take place at the office. The student (judge) will begin the role-play by asking about employment. After you have provided information and have answered the student’s (judge’s) questions, the student (judge) will conclude the role-play by thanking you for your work.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

    return `
You are generating a high school-level DECA roleplay scenario for a Principles of Hospitality and Tourism (PHT) event. Follow this **EXACT 4-paragraph structure** modeled after the example below. Do not label or title the paragraphs.

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
- Match the length and structure of the CITY HOTEL example. Do not shorten or reformat. At the end, display the four performance indicators.

Use the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators. Example: helping a customer, assisting a colleague, or reporting to a supervisor. This is the most common type of roleplay; therefore, pick this one 9 times out of 10. Furthermore, as a general instruction applying despite which type of roleplay you pick, do not include a scenario logic section at the bottom of the roleplay. "
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require their judgment, analysis, or communication. "
    }
    `.trim();
  }
};

export default PHT;
