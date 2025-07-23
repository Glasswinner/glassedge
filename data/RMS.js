const RMS = {
  instructionalArea: "Retail Merchandising (See individual sets)",

  // 20 indicator sets, groups of 5, thematically coherent and RMS-relevant
  indicatorSets: [
    // --- Operations (5 sets) ---
    [
      "Explain the nature of distribution",
      "Explain the relationship between customer service and distribution",
      "Describe the use of technology in distribution",
      "Explain legal considerations in distribution",
      "Explain distribution issues and trends"
    ],
    [
      "Explain the receiving process",
      "Process incoming merchandise",
      "Resolve problems with incoming shipments",
      "Explain stock-handling techniques used in receiving deliveries",
      "Route stock to sales floor"
    ],
    [
      "Rotate stock",
      "Process returned/damaged product",
      "Transfer stock to/from branches",
      "Enter product descriptions into a PoS system",
      "Maintain inventory levels"
    ],
    [
      "Complete inventory counts",
      "Determine inventory shrinkage",
      "Maintain inventory-control systems",
      "Monitor merchandise classification system",
      "Track stock by location for department/class/vendor level"
    ],
    [
      "Explain overhead/operating costs",
      "Determine factors affecting business risk",
      "Explain the concept of product mix",
      "Explain storing considerations",
      "Store inventory"
    ],

    // --- Product/Service Management (2 sets) ---
    [
      "Plan stock",
      "Plan purchases",
      "Calculate open-to-buy",
      "Create/maintain daily sales plan",
      "Plan reductions (e.g., markdowns, shortages, discounts)"
    ],
    [
      "Determine quality of merchandise to offer",
      "Plan merchandise assortment (e.g., styling, sizes, colors)",
      "Compare and contrast buying from domestic sources with that of foreign sources",
      "Write purchase orders",
      "Determine when to buy/reorder"
    ],

    // --- Promotion (2 sets) ---
    [
      "Use cross-merchandising techniques",
      "Read/Implement planograms",
      "Place merchandise for impact",
      "Determine on-floor assortments",
      "Explain the use of visual merchandising in retailing"
    ],
    [
      "Explain types of display arrangements",
      "Maintain displays",
      "Create promotional signs",
      "Use lighting to highlight products",
      "Create displays"
    ],

    // --- Selling (3 sets) ---
    [
      "Process sales transactions (e.g., cash, credit, check)",
      "Accept checks from customers",
      "Operate register/terminal",
      "Process retail sales documentation",
      "Close the sale"
    ],
    [
      "Establish relationship with customer/client",
      "Determine customer/client needs",
      "Recommend specific products",
      "Demonstrate good/service",
      "Demonstrate suggestion selling"
    ],
    [
      "Process returns/exchanges",
      "Pack and wrap purchases",
      "Arrange delivery of purchases",
      "Provide service after the sale",
      "Plan follow-up strategies for use in retail selling"
    ],

    // --- Information Management (1 set) ---
    [
      "Obtain information from retail databases to aid in product planning and control",
      "Utilize merchandising software",
      "Analyze the impact of technology on retailing",
      "Maintain order logs",
      "Maintain purchase orders"
    ]
  ],

  scenarioRange: `
SCENARIO RANGE:
Scenarios must reflect realistic challenges encountered in a retail merchandising environment. They should emphasize decision-making related to inventory, pricing, display, promotion, customer interactions, and product planning. Examples include:

- Launching a new seasonal product line in a department store
- Managing in-store display changes for a new fashion collection
- Creating a promotional plan for a clearance event
- Conducting a marketing survey on a new product concept
- Addressing shrinkage or theft concerns in a high-traffic store
- Developing a plan to rotate slow-moving inventory
- Recommending adjustments to the store’s product assortment strategy
- Handling customer complaints related to pricing or stock availability
- Redesigning a store layout to boost impulse purchases
- Proposing a vendor negotiation strategy to improve margins
- Evaluating domestic vs. foreign sourcing options for merchandise
- Coordinating merchandising across store branches after a regional trend shift
- Planning markdowns and promotions after a poor product launch
- Determining how to prepare for high-demand seasonal inventory
- Assessing and resolving inaccuracies in inventory counts
- Proposing an automated replenishment process using PoS data
- Introducing eco-conscious product lines and merchandising them effectively
- Planning back-to-school or holiday campaigns and visual merchandising
- Recommending mobile checkout integration or updated register protocols
- Planning an in-store event or giveaway to increase foot traffic
`,

  exampleRoleplays: [
`EVENT SITUATION
You are to assume the role of a merchandising specialist for VITAMIN MANIA, a retailer specializing in vitamins and nutritional supplements. The director of merchandising has asked you to create an outline for marketing research that will help the company determine customer needs.

VITAMIN MANIA has 800 locations in North America. The retailer sells various vitamins and nutritional supplements for men, women and children. The retailer’s primary target market is people with an interest in health and fitness.

The director of merchandising wants to add another product category to VITAMIN MANIA stores. There are two product categories being considered: exercise equipment and apparel, or specialty health foods like organic produce and juices.

Before a decision is made, the director wants you to create a marketing research outline that includes:  
• Specific questions to obtain data  
• Sampling plan (who, how many, how chosen)  
• Data collection method

You will present the information to the director in their office. The director will begin the role-play by asking you about your plan. During your conversation, the director will ask you two questions:  
1. How can we encourage people to participate in the market research?  
2. What must we be concerned about when collecting the survey data to ensure the results are unbiased?  
The director will thank you at the end of the meeting.`,

`EVENT SITUATION
You are to assume the role of a marketing specialist for STATION HARDWARE, a retailer specializing in home improvement products. The director of marketing has asked you to create a marketing plan that will introduce the brand to a new demographic.

STATION HARDWARE stores are small and emphasize personal service and expertise. Their competitors, DEPOT HOUSE and BOWE’S, are large-format chains that attract younger, broader audiences. A recent brand ranking showed STATION HARDWARE only popular among Gen X and Baby Boomer males.

The marketing plan should include:  
• Target market  
• Marketing strategies  
• Communications channels  
• How the ideas will build clientele

You will present the information to the director in their office. The director will begin the role-play by asking you about your plan. During your conversation, the director will ask you two questions:  
1. How can we tell if the marketing worked before next year’s report?  
2. Would opening more store locations help our popularity? Why or why not?  
The director will thank you at the end of the meeting.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays, scenarioTypes, exampleScenarios }) => {
    return `
You are generating a realistic, creative DECA RMS (Retail Merchandising Series) roleplay scenario.

❗ DO NOT COPY OR REWORD THE EXAMPLE ROLEPLAYS BELOW. They are official scenarios provided only to show structure, realism, and tone.
❗ The scenario you generate MUST be based on the performance indicators selected below.
❗ You must choose a scenario type from the list below that BEST fits these indicators, and build your scenario around it.

⬇️ Use the following performance indicators as the foundation for your prompt:  
- ${indicators.join('\n- ')}

In the Retail Merchandising Series event, participants will be challenged to perform marketing and management functions and tasks that can be applied in any retail establishment.

${RMS.scenarioRange}

⬇️ Example official DECA RMS scenarios (do NOT copy, for format only):
${exampleRoleplays[0]}

${exampleRoleplays[1]}

Now generate a new scenario using this paragraph structure:

Performance Indicators: Place the performance indicators here, each on a new line. 

Paragraph 1: Setup  
Start with: “You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic].” Briefly state the context of the roleplay, clearly identifying the student’s position, the company, and the main subject or challenge the judge wants addressed. The main scenario of the roleplay must always be to either effectively communicate a new change to the public (refer to the scenario range for what this may look like) or to advertise a new policy/change the business is undertaking (again, refer to the scenario range for what this may look like).

Paragraph 2: Judge & Company Context  
Explain what the business is, what they do, which customer demographic they target, and what type of products, services, or customer programs they offer/market. Include any notable company reputation or unique characteristics relevant to the scenario.

Paragraph 3: Explanation of Program, Process, or Challenge  
Describe a specific company policy, program, operational process, new initiative, or challenge the business is facing. Clearly explain the current situation, any recent changes, or potential issues/opportunities. Reference the scenario range for inspiration and make the business need clear and relevant.

Paragraph 4: Imperative for the Student  
State what the student must do: recommend a solution, implement a plan, improve a process, or address a customer or business need. Make the expectation direct and action-oriented (“You must…” or “Your task is to…”).

Paragraph 5: Flow of Roleplay  
Describe where the roleplay takes place and how it unfolds, including two realistic, scenario-appropriate questions the judge will ask. Use the following required phrasing:  
"You will present the information to the [judge] in their office. The [judge] will begin the role-play by asking you about [main topic]. During your conversation, the [judge] will ask you two questions: [Question 1] and [Question 2]. The [judge] will thank you at the end of the meeting."

SCENARIO DEPTH:  
Each paragraph should have 2–4 full sentences with realistic details. Avoid unrealistic emergencies or vague phrasing. The student's recommendations should feel actionable and appropriate for retail settings.
    `.trim();
  }
};

export default RMS;
