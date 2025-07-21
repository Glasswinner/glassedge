const BSM = {
  instructionalArea: "Business Services Marketing (See individual sets)",

  // 20 indicator sets, groups of 5, thematically coherent and BSM-relevant
  indicatorSets: [
    // Product/Service Management (3)
    [
      "Explain the nature and scope of the product/service management function",
      "Describe the use of technology in the product/service management function",
      "Identify product opportunities",
      "Generate product ideas",
      "Determine the impact of product standards' issues associated with global business"
    ],
    [
      "Explain warranties and guarantees",
      "Explain the nature of product/service branding",
      "Identify methods/techniques to generate a product idea",
      "Explain business ethics in product/service management",
      "Describe the uses of grades and standards in marketing"
    ],
    [
      "Explain the concept of product mix",
      "Identify the impact of product life cycles on marketing decisions",
      "Describe factors used by marketers to position products/services",
      "Identify emerging trends",
      "Evaluate vendors' goods and services"
    ],

    // Channel Management (1)
    [
      "Explain the nature and scope of channel management",
      "Describe ethical considerations in channel management",
      "Coordinate channel management with other marketing activities",
      "Explain the nature of channel-member relationships",
      "Describe the use of technology in the channel management function"
    ],

    // Marketing-Information Management (4)
    [
      "Describe the need for marketing data",
      "Explain the nature and scope of the marketing-information management function",
      "Discuss the nature of marketing research problems/issues",
      "Identify data monitored for marketing decision making",
      "Describe the use of technology in the marketing-information management function"
    ],
    [
      "Describe data-collection methods",
      "Explain the use of descriptive statistics in marketing decision making",
      "Explain characteristics of effective data-collection instruments",
      "Describe methods used to design marketing research studies",
      "Describe options businesses use to obtain marketing research data"
    ],
    [
      "Interpret statistical findings",
      "Monitor/measure customer buzz",
      "Describe current business trends",
      "Explain techniques for processing marketing data",
      "Evaluate questionnaire design"
    ],
    [
      "Display data in charts/graphs or in tables",
      "Prepare written reports for decision-making",
      "Translate research findings into actionable business recommendations",
      "Assess appropriateness of marketing research for the problem/issue",
      "Provide sales analysis reports"
    ],

    // Market Planning (1)
    [
      "Explain the concept of marketing strategies",
      "Explain the concept of market and market identification",
      "Explain the nature of marketing plans",
      "Explain the role of situation analysis in the marketing planning process",
      "Explain the nature of marketing planning"
    ],

    // Pricing (1)
    [
      "Explain the nature and scope of the pricing function",
      "Explain legal considerations for pricing",
      "Describe the role of business ethics in pricing",
      "Explain factors affecting pricing decisions",
      "Explain the use of technology in the pricing function"
    ],

    // Promotion (2)
    [
      "Explain the role of promotion as a marketing function",
      "Explain types of promotion (institutional, product)",
      "Identify the elements of the promotional mix",
      "Describe the use of business ethics in promotion",
      "Describe the use of technology in the promotion function"
    ],
    [
      "Explain types of advertising media",
      "Describe word-of-mouth channels used to communicate with targeted audiences",
      "Explain the nature of direct marketing channels",
      "Identify communications channels used in sales promotion",
      "Explain communications channels used in public-relations activities"
    ],

    // Selling (1)
    [
      "Explain the nature and scope of the selling function",
      "Explain the role of customer service as a component of selling relationships",
      "Discuss motivational theories that impact buying behavior",
      "Explain key factors in building a clientele",
      "Explain company selling policies"
    ],

    // Emotional Intelligence (2)
    [
      "Describe the nature of emotional intelligence",
      "Demonstrate ethical work habits",
      "Demonstrate responsible behavior",
      "Demonstrate interest and enthusiasm",
      "Explain the concept of self-esteem"
    ],
    [
      "Show empathy for others",
      "Foster open, honest communication",
      "Demonstrate negotiation skills",
      "Explain reasons for ethical dilemmas",
      "Demonstrate self-control"
    ],

    // Marketing (1)
    [
      "Explain marketing and its importance in a global economy",
      "Describe marketing functions and related activities",
      "Explain factors that influence customer/client/business buying behavior",
      "Discuss actions employees can take to achieve the company's desired results",
      "Describe connections between company actions and results"
    ],

    // Professional Development (1)
    [
      "Set personal goals",
      "Balance personal and professional responsibilities",
      "Demonstrate systematic behavior",
      "Adhere to company protocols and policies",
      "Make decisions"
    ],

    // Operations (1)
    [
      "Explain the nature of operations",
      "Maintain inventory of supplies",
      "Follow established security procedures/policies",
      "Comply with policies and procedures for use of property and equipment",
      "Monitor and ensure completion of delegated tasks"
    ],

    // Information Management (2)
    [
      "Assess information needs",
      "Obtain needed information efficiently",
      "Evaluate quality and source of information",
      "Apply information to accomplish a task",
      "Store information for future use"
    ],
    [
      "Identify ways that technology impacts business",
      "Describe current business trends",
      "Discuss the nature of information management",
      "Explain the role of ethics in information management",
      "Explain legal issues associated with information management"
    ]
  ],

  // Scenario range: tailored for BSM—services and business marketing
  scenarioRange: `
SCENARIO RANGE:
Scenarios must reflect realistic business services marketing workplace settings (serving other businesses or business-consumer hybrid). Acceptable contexts include:
- Proposing a new client service or business solution
- Launching a client education or training program
- Introducing a loyalty or referral program for B2B customers
- Responding to a new competitor or market disruption
- Partnering with another firm or supplier to expand service offerings
- Managing client contracts, renewals, or pricing structures
- Implementing technology upgrades for client-facing services
- Addressing client feedback or customer complaints about services
- Improving client onboarding, support, or account management processes
- Developing a marketing plan for a new business service
- Introducing eco-friendly or socially responsible practices to clients
- Enhancing company reputation after a PR incident
- Planning a business conference, seminar, or industry networking event
- Responding to supply chain disruptions or vendor issues
- Revising service delivery or support workflows for efficiency
- Handling negative online reviews or managing firm reputation
- Developing employee or team training for new service protocols
- Expanding into a new industry segment or geographic market
- Managing risk, compliance, or legal issues in client relationships
- Adjusting to regulatory changes impacting service offerings
- Evaluating or revamping customer service quality standards
- Planning for crisis response or business continuity for clients
- Rebranding the business services firm or refreshing company image
- Launching a digital marketing campaign for business services
- Introducing a premium or exclusive client tier
- Evaluating outsourcing, automation, or process improvement opportunities
`,

  // Official DECA BSM scenario examples (DO NOT copy—structure only, not content)
  exampleRoleplays: [
`EVENT SITUATION
You are to assume the role of the marketing manager for PRESTON - CLARK, a business that provides plumbing construction, repair and maintenance for residential and commercial clients. The owner of the company (judge) wants you to decide how to effectively market the company’s advantages.

PRESTON - CLARK is one of a dozen plumbing companies in the county. PRESTON – CLARK is the only family owned and operated company and has been in business the longest, for over fifty years. Year after year, PRESTON – CLARK is named the most trusted plumbing repair and maintenance company in the area. Just last year the business went through a professional screening and qualifications process with a major search engine. The search engine now 100% guarantees PRESTON- CLARK’S work.  

PRESTON – CLARK has higher prices compared to the other plumbing companies in the county. The higher prices are evident when commercial clients and residential clients request estimates, and PRESTON – CLARK’s estimates are much higher than the others.

The owner (judge) feels that if potential clients realized that PRESTON – CLARK has top level service and many years of experience, they would not be turned off by the higher prices listed in estimates. The owner (judge) has asked you to decide how to market the company’s competitive advantages to potential clients during the process of inquiry and requesting estimates.

You will present your ideas to the owner (judge) in a role-play to take place in the owner’s (judge’s) office. The owner (judge) will begin the role-play by greeting you and asking to hear your ideas. After you have presented ideas and have answered the owner’s (judge’s) questions, the owner (judge) will conclude the role-play by thanking you for your work.`,

`EVENT SITUATION
You are to assume the role of the general manager at OFFICE SAFE, a local business that sells office equipment and supplies. The owner of the company (judge) wants you to list and analyze the pros and cons of offering a new service and make a recommendation.

OFFICE SAFE is a well-known and trusted local business in a large city. The store opened in 1965 and still has many of the same business clients. OFFICE SAFE provides competitive prices, extraordinary customer service, special orders and knowledgeable staff.

Since the giant online retailer BAMAZON began offering business accounts with special one-day and two-day delivery, OFFICE SAFE has seen a decline in sales. Customers, even loyal customers, would rather have a purchase delivered than drive to the store to purchase in person.

The owner of OFFICE SAFE (judge) is considering partnering with a third-party delivery service to offer customers same day delivery. This would allow customers to have purchases made and delivered without leaving home or the office. OFFICE SAFE would be charged by the third-party delivery service for the partnership, so in turn, OFFICE SAFE would need to increase prices or attach a delivery fee for all items.

The owner (judge) wants you to list and analyze the pros and cons of partnering with the third-party delivery service and make a final recommendation.

You will present your analysis to the owner (judge) in a role-play to take place in the owner’s (judge’s) office. The owner (judge) will begin the role-play by greeting you and asking to hear your ideas. After you have presented the analysis and have answered the owner’s (judge’s) questions, the owner (judge) will conclude the role-play by thanking you for your work.`
  ],

  // Prompt template using your structure and BSM conventions
  promptTemplate: ({ indicators, exampleRoleplays, scenarioTypes, exampleScenarios }) => {
    return `
You are generating a realistic, creative DECA BSM (Business Services Marketing) roleplay scenario.

❗ DO NOT COPY OR REWORD THE EXAMPLE ROLEPLAYS BELOW. They are official event scenarios provided only to show structure, realism, and tone.
❗ You may reference the exampleScenarios only for creative inspiration and style—not for copying or direct reuse.
❗ The scenario you generate MUST be based on the performance indicators selected below.
❗ You must choose a scenario type from the list below that BEST fits these indicators, and build your scenario around it.

⬇️ Use the following performance indicators as the foundation for your prompt:  
- ${indicators.join('\n- ')}

In the Business Services Marketing Series event, participants will be challenged to perform marketing functions and tasks involved in providing services to businesses on a fee or contract basis or providing services to consumers.

${BSM.scenarioRange}

⬇️ Example official DECA BSM scenarios (do NOT copy, for format only):
${exampleRoleplays[0]}

${exampleRoleplays[1]}

Now generate a new scenario using this paragraph structure:

Performance Indicators: Place the performance indicators here, each on a new line. 

Paragraph 1: Setup  
Start with: “You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic].” Clearly state the context of the roleplay, identifying the student’s position, the company, and the main subject or challenge.

Paragraph 2: Judge & Company Context  
Explain what the business is, what they do, the type of clients they serve (businesses, consumers, or both), and any notable reputation, market segment, or unique characteristics.

Paragraph 3: Situation or Challenge  
Describe a specific company policy, program, process, new initiative, or challenge—such as competition, declining sales, market shifts, or internal business needs. Clearly explain the current situation and what triggered the need for action. If more detail is needed, split this section into two paragraphs for clarity.

Paragraph 4: Imperative for the Student  
State what the student must do: recommend a solution, analyze options, create a plan, or address a customer/business/client need. Make this direct and action-oriented (“You must…” or “Your task is to…”).

Paragraph 5: Flow of Roleplay  
Describe where the roleplay takes place and how it unfolds, including two scenario-appropriate questions the judge will ask. Required phrasing:  
"You will present the information to the [judge] in their office. The [judge] will begin the role-play by asking you about [main topic]. During your conversation, the [judge] will ask you two questions: [Question 1] and [Question 2]. The [judge] will thank you at the end of the meeting."

SCENARIO DEPTH:  
Each paragraph should have 2–4 full sentences with realistic details. The student’s role and recommendations should be practical for a mid-level manager. Avoid unrealistic emergencies or dramatic actions.
    `.trim();
  }
};

export default BSM;
