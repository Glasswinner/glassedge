const SEM = {
  instructionalArea: "Sports and Entertainment Marketing (See individual sets)",

  // 20 indicator sets, finalized and event-specific
  indicatorSets: [
    // Product/Service Management (2)
    [
      "Explain the nature and scope of the product/service management function",
      "Generate product ideas",
      "Describe the use of technology in the product/service management function",
      "Explain the nature of product/service branding",
      "Identify the impact of product life cycles on marketing decisions"
    ],
    [
      "Explain new product-development processes",
      "Evaluate graphic design on packages",
      "Identify product's/service's competitive advantage",
      "Assess product-packaging requirements",
      "Develop positioning concept for a new product idea"
    ],

    // Promotion (2)
    [
      "Explain the role of promotion as a marketing function",
      "Identify the elements of the promotional mix",
      "Explain types of advertising media",
      "Explain communications channels used in public-relations activities",
      "Explain the nature of a promotional plan"
    ],
    [
      "Describe the elements of design",
      "Explain the use of illustrations in advertisements",
      "Describe effective advertising layouts",
      "Discuss the nature of typography",
      "Coordinate activities in the promotional mix"
    ],

    // Marketing-Information Management (2)
    [
      "Describe the need for marketing data",
      "Monitor/measure customer buzz",
      "Translate research findings into actionable business recommendations",
      "Leverage data to recommend personalized, relevant campaigns",
      "Display data in charts/graphs or in tables"
    ],
    [
      "Use software to automate services",
      "Use analytical tracking tools",
      "Provide sales analysis reports",
      "Measure media audience",
      "Cleanse existing marketing data to maintain relevancy"
    ],

    // Market Planning (1)
    [
      "Explain the concept of market and market identification",
      "Explain the nature of marketing plans",
      "Explain the concept of marketing strategies",
      "Identify product’s/service’s competitive advantage",
      "Explain the role of situation analysis in the marketing planning process"
    ],

    // Operations (1)
    [
      "Apply marketing analytics",
      "Maintain security of marketing data",
      "Evaluate options to purchase or sell marketing data",
      "Track invoices",
      "Document marketing processes"
    ],

    // Information Management (1)
    [
      "Assess information needs",
      "Obtain needed information efficiently",
      "Evaluate quality and source of information",
      "Use analytical software",
      "Apply information to accomplish a task"
    ],

    // Marketing Core (1)
    [
      "Explain marketing and its importance in a global economy",
      "Describe marketing functions and related activities",
      "Explain factors that influence customer/client/business buying behavior",
      "Describe connections between company actions and results",
      "Discuss actions employees can take to achieve the company's desired results"
    ],

    // Emotional Intelligence (1)
    [
      "Show empathy for others",
      "Foster open, honest communication",
      "Demonstrate negotiation skills",
      "Demonstrate self-control",
      "Demonstrate ethical work habits"
    ],

    // Community & Sponsorship Engagement (1)
    [
      "Explain the importance of company involvement in community activities",
      "Propose community issues for company involvement",
      "Participate in community outreach activities",
      "Create written briefs for outside agencies/consultants",
      "Identify ways to track marketing-communications activities"
    ],

    // Professional Development (1)
    [
      "Explain the nature of marketing management",
      "Explain career opportunities in marketing management",
      "Utilize professional development opportunities in marketing",
      "Employ career-advancement strategies in marketing",
      "Assess the services of professional organizations in marketing"
    ]
  ],

  scenarioRange: `
SCENARIO RANGE:
Scenarios must reflect realistic workplace challenges faced by sports teams, entertainment venues, and marketing agencies serving clients in sports, music, film, or event promotion. Event situations should involve participants in planning or executing marketing strategies that promote engagement, increase revenue, enhance brand identity, or solve customer-facing issues.

Acceptable contexts include:
- Designing a fan engagement campaign for an upcoming sports season or concert tour  
- Creating a marketing plan to increase ticket sales for underperforming events or games  
- Developing promotional strategies for theme nights, giveaways, or mascot appearances  
- Responding to a PR crisis or negative press involving a team, artist, or performer  
- Pitching a social media content strategy to boost brand visibility and fan interaction  
- Planning off-site activations (e.g., fan fest, meet-and-greet, mobile experience van)  
- Collaborating with sponsors to launch a co-branded promotion during games or events  
- Improving communication with season ticket holders or VIP patrons  
- Launching a loyalty or rewards program to increase repeat attendance  
- Marketing a new product line (e.g., branded merchandise, concessions, digital collectibles)  
- Creating a campaign to support a rebrand, name change, or venue renovation  
- Promoting a new entertainment offering (e.g., esports event, virtual reality attraction)  
- Addressing negative reviews or feedback on the event experience  
- Developing a plan to increase community involvement or charitable partnerships  
- Responding to weather-related disruptions or last-minute schedule changes  
- Promoting health and safety policies during events (e.g., bag checks, security screenings)  
- Marketing live-streamed or pay-per-view events to remote audiences  
- Creating a campaign that highlights athlete, performer, or team stories  
- Coordinating in-game or in-event activations with marketing sponsors  
- Reducing no-shows and boosting attendance through reminders and incentives

In the Sports and Entertainment Marketing event, participants will be challenged to perform marketing and management functions and tasks related to amateur or professional sports or sporting events, entertainment or entertainment events, selling or renting of supplies and equipment (other than vehicles) used for recreational or sporting purposes, products and services related to hobbies or cultural events, or businesses primarily engaged in satisfying the desire to make productive or enjoyable use of leisure time.
`,

  exampleRoleplays: [
    `EVENT SITUATION
You are to assume the role of the recreation manager for Grant City Parks & Recreation. The director of youth sports (judge) wants you to address the ongoing issue of hostile parents at youth sporting events.

One ongoing issue across all youth sports is unruly adult spectators that scream during the games, not as encouragement, but to criticize the volunteer coaches, referees and umpires. This has resulted in a decline in adult volunteers.

You are to present a plan for addressing this issue through the youth sports guide and registration packet.`,

    `EVENT SITUATION
You are to assume the role of the promotional manager for the Hillside Huskies, a collegiate summer baseball team. The marketing director (judge) wants you to determine how to participate in Hillside Days, an annual summer event.

Unfortunately, the team will be out of town the entire weekend playing in another city. No players will be able to attend the event.

You are to propose ideas for how the Hillside Huskies can still have a strong presence and how this participation will benefit the team and community.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays, scenarioTypes, exampleScenarios }) => {
    return `
You are generating a realistic, creative DECA SEM (Sports and Entertainment Marketing) roleplay scenario.

❗ DO NOT COPY OR REWORD THE EXAMPLE ROLEPLAYS BELOW. They are official event scenarios provided only to show structure, realism, and tone.
❗ You may reference the exampleScenarios only for creative inspiration and style—not for copying or direct reuse.
❗ The scenario you generate MUST be based on the performance indicators selected below.
❗ You must choose a scenario type from the list below that BEST fits these indicators, and build your scenario around it.

⬇️ Use the following performance indicators as the foundation for your prompt:  
- ${indicators.join('\n- ')}

In the Sports and Entertainment Marketing event, participants will be challenged to perform marketing and management functions and tasks related to amateur or professional sports or sporting events, entertainment or entertainment events, selling or renting of supplies and equipment (other than vehicles) used for recreational or sporting purposes, products and services related to hobbies or cultural events, or businesses primarily engaged in satisfying the desire to make productive or enjoyable use of leisure time.

${SEM.scenarioRange}

⬇️ Example official DECA SEM scenarios (do NOT copy, for format only):
${exampleRoleplays[0]}

${exampleRoleplays[1]}

Now generate a new scenario using this paragraph structure:

Performance Indicators: Place the performance indicators here, each on a new line. 

Paragraph 1: Setup  
Start with: “You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic].” Clearly state the context of the roleplay, identifying the student’s position, the company, and the main subject or challenge.

Paragraph 2: Judge & Company Context  
Explain what the business is, what they do, the type of clients or fans they serve, and any notable reputation, demographic focus, or brand details.

Paragraph 3: Situation or Challenge  
Describe a specific business situation, policy, process, initiative, or challenge—such as negative reviews, low attendance, underperforming merchandise, or branding needs. Include realistic context and rationale.

Paragraph 4: Imperative for the Student  
State what the student must do: recommend a solution, analyze options, create a plan, or address a challenge. Make this directive and actionable.

Paragraph 5: Flow of Roleplay  
Describe where the roleplay takes place and how it unfolds, including two scenario-appropriate questions the judge will ask. Required phrasing:  
"You will present the information to the [judge] in their office. The [judge] will begin the role-play by asking you about [main topic]. During your conversation, the [judge] will ask you two questions: [Question 1] and [Question 2]. The [judge] will thank you at the end of the meeting."

SCENARIO DEPTH:  
Each paragraph should have 2–4 full sentences with realistic details. The student’s role and recommendations should be practical for a mid-level manager. Avoid unrealistic emergencies or dramatic actions.
    `.trim();
  }
};

export default SEM;
