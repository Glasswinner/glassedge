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
You are generating a realistic, high school-level DECA roleplay scenario for the Principles of Hospitality and Tourism (PMK) event.

❗ DO NOT COPY OR REWORD THE EXAMPLE BELOW. It is only to show tone and paragraph structure.  
❗ The topic of your generated scenario MUST clearly relate to the performance indicators provided below.  
❗ The student must take on a role typical in careers in hotels, restaurants, and tourism and travel.
❗ The judge should NOT be a new employee unless indicators explicitly relate to professional development or training.

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
Scenarios must reflect realistic hospitality and tourism workplace setting. Acceptable contexts include: 
  -Coaching a new front desk employee on how to handle declined credit cards with empathy

  -Explaining how to keep a restaurant's self-service stations safe and secure for guests

  -Outlining health and safety procedures for food-handling equipment in a buffet-style setting

  -Recommending routine safety precautions and training for hospitality employees

  -Responding to a hospitality student’s questions about career pathways in hotel management

  -Explaining networking strategies to find job opportunities in hospitality and tourism

  -Describing professional development resources for advancing in the hospitality industry

  -Advising a coworker on how to maintain guest privacy and professionalism during check-in

  -Helping a new employee understand proper communication with frustrated guests

  -Supporting a colleague in identifying alternative career paths in the hospitality sector
  Scenarios are not limited to these contexts. Always consider the performance indicators when making a scenario.
 
  
 
 


SCENARIO DEPTH:
Each paragraph must be 2–4 full sentences with meaningful detail and a natural voice. Avoid vague summaries, dramatic emergencies, or high-level executive decision-making. The tone should reflect a student employee in a realistic hospitality and tourism role( travel desk, travel agent, cruise ship employee, hotel desk employee, etc.)

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
