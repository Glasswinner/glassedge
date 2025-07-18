const PMK = {
  instructionalArea: "Marketing",

  indicatorSets: [
    // Communication & Messaging
    [
      "Explain the nature of effective verbal communications",
      "Explain the nature of effective written communications",
      "Provide legitimate responses to inquiries",
      "Employ communication styles appropriate to target audience"
    ],
    [
      "Select and utilize appropriate format for professional writing",
      "Write informational messages",
      "Explain the nature of effective verbal communications",
      "Participate in group discussions"
    ],

    // Information Management & Tech
    [
      "Discuss the nature of information management",
      "Assess information needs",
      "Obtain needed information efficiently",
      "Identify ways that technology impacts business"
    ],
    [
      "Explain the role of ethics in information management",
      "Apply information to accomplish a task",
      "Store information for future use",
      "Access information in the database system"
    ],

    // Promotion & Social Media
    [
      "Explain the nature and scope of promotion",
      "Describe the use of technology in marketing",
      "Use social media to communicate with a business’s stakeholders",
      "Use social media to solicit new ideas and solutions"
    ],
    [
      "Explain the types of promotion",
      "Describe factors used by businesses to position corporate brands",
      "Coordinate activities in the promotional mix",
      "Describe the use of business ethics in promotion"
    ],

    // Customer Relationship Management
    [
      "Explain the nature of positive customer relations",
      "Build and maintain relationships with customers",
      "Respond to customer inquiries",
      "Interpret business policies to customers/clients"
    ],
    [
      "Demonstrate a customer service mindset",
      "Handle difficult customers",
      "Handle customer/client complaints",
      "Reinforce service orientation through communication"
    ],

    // Marketing Strategy & Segmentation
    [
      "Explain marketing and its importance in a global economy",
      "Describe marketing functions and related activities",
      "Identify the target market for a product",
      "Explain factors that influence customer buying behavior"
    ],
    [
      "Explain the concept of marketing strategies",
      "Demonstrate connections between company actions and results",
      "Position products/services to create an image",
      "Explain the concept of market and market identification"
    ],

    // Emotional Intelligence in Marketing
    [
      "Explain the nature of effective communications",
      "Foster open, honest communication",
      "Solicit feedback",
      "Use social media to solicit new ideas and solutions"
    ],
    [
      "Demonstrate empathy for others",
      "Manage commitments in a timely manner",
      "Show evidence of emotional intelligence",
      "Demonstrate responsible behavior"
    ],

    // Ethics, Data & Analysis
    [
      "Describe the use of technology in marketing",
      "Explain legal issues associated with information management",
      "Evaluate quality and source of information",
      "Draw conclusions based on information analysis"
    ],
    [
      "Translate research findings into actionable business recommendations",
      "Discuss the role of ethics in promotion",
      "Discuss the importance of data ethics",
      "Interpret statistical findings"
    ]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER
Marketing

INSTRUCTIONAL AREA
Emotional Intelligence

21st CENTURY SKILLS
- Critical Thinking – Reason effectively and use systems thinking.
- Communication – Communicate clearly.
- Creativity and Innovation – Show evidence of creativity.

PERFORMANCE INDICATORS
- Explain the nature of effective communications.
- Foster open, honest communication.
- Solicit feedback.
- Use social media to solicit new ideas and solutions.

EVENT SITUATION
You are to assume the role of an employee at FUN FINDS, a chain of specialty discount stores with inexpensive, fun products targeting tweens and teens. A co-worker (judge) wants to know how the company can use social media and customer feedback to gain more knowledge about customers.  

FUN FINDS has over 1,000 stores that contain a wide variety of merchandise that is priced below $20.00. The company has a presence on most social media platforms and has a large loyalty program that allows customers to opt into text and/or email messaging.  

At the last staff meeting, the store manager said that FUN FINDS executives will soon begin soliciting feedback from customers and using social media to find out more about customers and their feelings on FUN FINDS products.

Your co-worker (judge) wants you to explain how FUN FINDS can solicit feedback from its customers and use social listening to gain knowledge on the customer base and their feelings on FUN FINDS products.

You will present the information to the co-worker (judge) in a role-play to take place at the store. The co-worker (judge) will begin the role-play by asking you about your ideas. After you have presented the information to the co-worker (judge) and have answered the co-worker’s (judge’s) questions, the co-worker (judge) will conclude the role-play by thanking you for the information.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

    return `
You are generating a realistic, high school-level DECA roleplay scenario for the Principles of Marketing (PMK) event.

❗ DO NOT COPY OR REWORD THE EXAMPLE BELOW. It is only to show tone and paragraph structure.  
❗ The topic of your generated scenario MUST clearly relate to the performance indicators provided below.  
❗ The student must take on a role typical in marketing communications, marketing management, marketing research, merchandising and professional selling.
 
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
Scenarios must reflect realistic marketing workplace setting. Acceptable contexts include: 
  -Explaining how to communicate a policy change to customers using multiple channels

  -Determining the best way to collect customer feedback at an event or location

  -Recommending how a business can use social media to better understand customer preferences

  -Writing informational messages to announce new products, services, or restrictions

  -Describing how to use customer data to develop personalized marketing strategies

  -Planning how to gather and use customer insights to improve loyalty or satisfaction

  -Outlining how to choose appropriate promotional methods for a new campaign

  -Responding to a manager’s request for better ways to engage customers at the point of sale

  -Advising a teammate on ethical and effective use of customer input from social platforms

  -Clarifying how improved communication contributes to stronger brand-customer relationships


  
 
 


SCENARIO DEPTH:
Each paragraph must be 2–4 full sentences with meaningful detail and a natural voice. Avoid vague summaries, dramatic emergencies, or high-level executive decision-making. The tone should reflect a student employee in a realistic marketing role( marketing coordinator, social media manager, marketing specialist, etc.) role.


Use the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators. Example: helping a customer, assisting a colleague, or reporting to a supervisor. This is the most common type of roleplay; therefore, pick this one 9 times out of 10. Furthermore, as a general instruction applying despite which type of roleplay you pick, do not include a scenario logic section at the bottom of the roleplay. "
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require their judgment, analysis, or communication. "
    }
    `.trim();
  }
};

export default PMK;
