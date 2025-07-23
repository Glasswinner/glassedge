const FMS = {
  instructionalArea: "Food Marketing Series (See individual sets)",

  indicatorSets: [
    // Information Management (1)
    [
      "Analyze the impact of technology on retailing",
      "Utilize merchandising software",
      "Obtain information from retail databases to aid in product planning and control",
      "Maintain purchase orders",
      "Maintain order logs"
    ],

    // Operations (6)
    [
      "Explain policies and procedures for handling shoplifters",
      "Devise merchandise security measures to minimize inventory shrinkage",
      "Maintain inventory levels",
      "Report out-of-stocks",
      "Complete inventory counts"
    ],
    [
      "Explain the receiving process",
      "Explain stock-handling techniques used in receiving deliveries",
      "Process incoming merchandise",
      "Resolve problems with incoming shipments",
      "Attach source and anti-theft tags"
    ],
    [
      "Price mark merchandise",
      "Make and record price changes",
      "Identify hang-tag needs",
      "Assign codes to each product item",
      "Enter product descriptions into a PoS system"
    ],
    [
      "Explain storing considerations",
      "Explain the nature of warehousing",
      "Store inventory",
      "Rotate stock",
      "Transfer stock to or from branches"
    ],
    [
      "Explain shipping processes",
      "Identify factors considered when selecting best shipping method",
      "Use an information system for order fulfillment",
      "Fulfill orders",
      "Route stock to sales floor"
    ],
    [
      "Prepare cash drawers or banks",
      "Open or close register or terminal",
      "Follow up orders",
      "Monitor merchandise classification system",
      "Allocate merchandise to stores or regions"
    ],

    // Product/Service Management (5)
    [
      "Plan merchandise assortment such as flavors, package sizes, case quantities",
      "Obtain samples",
      "Determine quality of merchandise to offer",
      "Determine the impact of product standards' issues associated with global business",
      "Explain the nature of merchandise plans and budgets"
    ],
    [
      "Calculate open-to-buy",
      "Create and maintain daily sales plan",
      "Plan stock",
      "Plan reductions such as markdowns, discounts, shortages",
      "Plan purchases"
    ],
    [
      "Compare and contrast buying from domestic sources with that of foreign sources",
      "Determine final cost of purchases from domestic and international sources",
      "Write purchase orders",
      "Analyze the use of central buying",
      "Determine stock turnover"
    ],
    [
      "Determine what to buy or reorder",
      "Determine quantities to buy or reorder",
      "Determine when to buy or reorder",
      "Establish reorder points",
      "Evaluate vendors' goods and services"
    ],
    [
      "Choose vendors",
      "Negotiate terms with suppliers",
      "Identify components of a retail image",
      "Identify emerging trends",
      "Scan marketplace to identify factors that could influence merchandising decisions"
    ],

    // Promotion (4)
    [
      "Explain the use of visual merchandising in food marketing",
      "Distinguish between visual merchandising and display",
      "Place merchandise for impact",
      "Use cross-merchandising techniques",
      "Read and implement planograms"
    ],
    [
      "Explain types of display arrangements",
      "Maintain displays",
      "Dismantle and store displays or display fixtures or forms",
      "Create promotional signs",
      "Select and use display fixtures and forms"
    ],
    [
      "Use lighting to highlight products",
      "Set up point-of-sale displays and handouts",
      "Create displays",
      "Plan special events",
      "Prepare store or department for special event"
    ],
    [
      "Develop promotional calendar",
      "Plan and schedule displays and themes with management",
      "Proof ads",
      "Plan special events to increase sales",
      "Implement special event promotions"
    ],

    // Selling (4)
    [
      "Explain the use of brand names in selling",
      "Establish relationship with customer or client",
      "Determine customer or client needs",
      "Recommend specific products",
      "Demonstrate product or service"
    ],
    [
      "Convert customer or client objections into selling points",
      "Close the sale",
      "Demonstrate suggestion selling",
      "Plan follow-up strategies for use in food sales",
      "Arrange delivery of purchases"
    ],
    [
      "Pack and wrap purchases",
      "Process special orders for retail sales",
      "Sell gift certificates",
      "Process retail telephone orders",
      "Process returns and exchanges"
    ],
    [
      "Process retail sales documentation",
      "Calculate miscellaneous charges for retail sales",
      "Process sales transactions such as cash, credit, check",
      "Accept checks from customers",
      "Operate register or terminal"
    ]
  ],

  exampleRoleplays: [
`EVENT SITUATION
You are to assume the role of the branding specialist for GO FOODS, a food and drink corporation. The director of brand management (judge) wants you to create new packaging for a food product. The packaging must stand out on grocery shelves, appeal to parents, and communicate the nutritional value of the product to children and adults.

GO FOODS recently introduced a new condensed soup flavor with kid-friendly ingredients, and while the product has received strong in-store sampling feedback, its sales have lagged behind expectations. Executives believe the plain, white label and minimal branding may be the reason.

The director of brand management (judge) wants your recommendation for how the packaging can be improved to attract attention and reflect GO FOODS’ brand promise.

You will present your ideas to the director of brand management (judge) in a role-play to take place in the director’s (judge’s) office. The director (judge) will begin the role-play by greeting you and asking to hear your ideas.`,

`EVENT SITUATION
You are to assume the role of the marketing analyst for FRESH & LOCAL, a regional grocery chain. The marketing manager (judge) wants you to evaluate the potential of smart shopping carts equipped with location tracking and digital displays that show personalized ads.

FRESH & LOCAL has a brand identity focused on local produce and community connection. The new smart carts could streamline shopping, improve in-store data collection, and allow for real-time promotions. However, some customers have voiced privacy concerns.

The marketing manager (judge) wants you to explain the benefits and challenges of implementing smart carts in select stores. You must recommend whether to proceed and, if so, how to introduce the technology in a way that reinforces the FRESH & LOCAL brand.

You will present your ideas to the marketing manager (judge) in a role-play to take place in the manager’s (judge’s) office. The manager (judge) will begin the role-play by greeting you and asking to hear your ideas.`
  ],

  scenarioRange: `
SCENARIO RANGE:
Scenarios must reflect realistic food and beverage marketing workplace settings. They should involve branded products, packaging, promotions, and operational strategies relevant to grocery, CPG (consumer packaged goods), and food service industries. Acceptable contexts include:
- Design a new label or wrapper for a canned soup line featuring “quick dinner” recipe use
- Create a cross-platform campaign to promote “better-for-you” chip alternatives
- Promote a nostalgic cereal brand with Gen Z appeal
- Plan a visual merchandising layout for new granola bars
- Recommend a strategy for clearing excess pumpkin spice inventory post-fall
- Collaborate with a meal kit service to promote a pasta sauce
- Respond to social media backlash over a frozen meal ingredient
- Promote flavored milk to teens during back-to-school season
- Introduce compostable packaging for an organic snack brand
- Redesign an in-store endcap for sparkling teas
- Plan a point-of-sale campaign for holiday baking products
- Develop an influencer campaign around flavored hummus
- Manage supply chain interruptions for a salsa brand
- Create a tasting event for new protein bars
- Reposition a dairy brand to appeal to a younger audience
- Launch a co-branded snack tied to a movie release
- Test QR code recipes printed on packaging sleeves
`,

  promptTemplate: ({ indicators, exampleRoleplays, scenarioTypes, exampleScenarios }) => {
    return `
You are generating a realistic, creative DECA FMS (Food Marketing Series) roleplay scenario.

❗ DO NOT COPY OR REWORD THE EXAMPLE ROLEPLAYS BELOW. They are official event scenarios provided only to show structure, realism, and tone.
❗ You may reference the exampleScenarios only for creative inspiration and style—not for copying or direct reuse.
❗ The scenario you generate MUST be based on the performance indicators selected below.
❗ You must choose a scenario type from the list below that BEST fits these indicators, and build your scenario around it.

⬇️ Use the following performance indicators as the foundation for your prompt:
- ${indicators.join('\n- ')}

And use this scenario inspiration:
${FMS.scenarioRange}

In the Food Marketing Series event, participants will be challenged to perform marketing and management functions and tasks in retail establishments, wholesale establishments and manufacturing firms resulting in the sale of food. IT'S ALWAYS ABOUT FOOD!

⬇️ Example official DECA FMS scenarios (do NOT copy, for format only):
${exampleRoleplays[0]}

${exampleRoleplays[1]}

Now generate a new scenario using this paragraph structure:

Performance Indicators: Place the performance indicators here, each on a new line. 

Paragraph 1: Setup  
Start with: “You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic].”

Paragraph 2: Business & Brand Background  
Describe the company’s purpose, its primary food/beverage products, the type of customers it serves, and any other relevant identity or industry context.

Paragraph 3: Situation Catalyst or Challenge  
Introduce the current event, challenge, or emerging opportunity the business is facing. This could be a trend, internal development, or market shift.

Paragraph 4: Implications or Strategic Need  
Explain what’s at stake or what the business is hoping to accomplish. Avoid policy-specific language—use terms like "approach," "idea," "strategy," or "initiative."

Paragraph 5: What the Student Must Do  
Clearly state the student's task: what they need to recommend, create, evaluate, or decide. This is the call to action.

Paragraph 6: Roleplay Flow  
Explain where the roleplay takes place and how it unfolds, and two scenario-appropriate questions the judge will ask. Required phrasing: 
"You will present the information to the [judge] in a role-play to take place in the [judge]’s office. The [judge] will begin the role-play by asking you about [topic]. During your conversation, the [judge] will ask you two questions about your recommendations. The [judge] will thank you at the end of the meeting."

SCENARIO DEPTH:  
Each paragraph should have 2–4 full sentences, with meaningful, realistic details. Avoid dramatic emergencies or unrealistic executive actions. Student’s role and recommendations should be practical for a real-world mid-level manager.
    `.trim();
  }
};

export default FMS;
