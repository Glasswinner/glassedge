const PFN = {
  instructionalArea: "Mixed (See individual sets)",

  indicatorSets: [
    ["Explain the purpose and importance of credit", "Identify factors affecting creditworthiness", "Describe considerations in selecting a financial services provider", "Explain the responsibilities of financial institutions"],
    ["Explain the concept of budgeting", "Describe sources of income", "Explain the impact of taxes on personal financial planning", "Determine personal net worth"],
    ["Describe the purpose and importance of financial planning", "Set financial goals", "Explain the need to save and invest", "Develop personal budget"],
    ["Describe types of financial-services providers", "Discuss considerations in selecting a financial-services provider", "Demonstrate the wise use of credit", "Explain forms of financial exchange"],
    ["Describe techniques for obtaining work experience", "Explain the need for ongoing education as a worker", "Explain possible career advancement patterns for jobs", "Identify sources of career information"],
    ["Calculate the cost of credit", "Validate credit history", "Control debt", "Demonstrate the wise use of credit"],
    ["Describe the concept of insurance", "Explain the role of risk in financial planning", "Protect against identity theft", "Explain the purpose and use of credit scores"],
    ["Protect against identity theft", "Maintain financial records", "Read and reconcile bank statements", "Explain information privacy, security, and confidentiality considerations in business"],
    ["Interpret a pay stub", "Prepare bank account documents", "Maintain financial records", "Pay bills"],
    ["Explain the nature of credit reports", "Explain the purpose and use of credit scores", "Identify factors affecting creditworthiness", "Validate credit history"],
    ["Identify ways that technology impacts business", "Describe the scope of the internet", "Assess information needs", "Obtain needed information efficiently"],
    ["Set personal goals", "Use time-management skills", "Demonstrate problem-solving skills", "Explain the need for innovation skills"],
    ["Explain types of investments", "Explain the need to save and invest", "Describe considerations in selecting a financial services provider", "Discuss the nature of retirement planning"],
    ["Explain the role of ethics in finance", "Explain legal responsibilities associated with financial exchanges", "Describe the need for financial information", "Explain the use of technology in accounting"],
    ["Describe the nature of cash flow statements", "Explain the nature of income statements", "Explain the concept of accounting", "Explain the role of finance in business"],
    ["Make responsible financial decisions", "Explain the concept of budgeting", "Calculate the cost of credit", "Determine personal net worth"],
    ["Explain forms of financial exchange", "Describe functions of money", "Identify types of currency", "Discuss the nature of debtor-creditor relationships"],
    ["Demonstrate ethical work habits", "Protect against identity theft", "Demonstrate honesty and integrity", "Explain reasons for ethical dilemmas"],
    ["Describe the nature of income statements", "Explain the nature of balance sheets", "Describe the nature of business records", "Explain the organizational design of businesses"],
    ["Identify tentative occupational interest", "Explain career opportunities in entrepreneurship", "Utilize job-search strategies", "Utilize career-advancement activities to enhance professional development"],
    ["Demonstrate ethical work habits", "Show empathy for others", "Demonstrate self-control", "Demonstrate responsible behavior"],
    ["Explain the concept of self-esteem", "Demonstrate honesty and integrity", "Demonstrate interest and enthusiasm", "Use appropriate assertiveness"],
    ["Demonstrate a customer service mindset", "Reinforce service orientation through communication", "Respond to customer inquiries", "Interpret business policies to customers/clients"],
    ["Handle customer/client complaints", "Build and maintain relationships with customers", "Explain the nature of positive customer relations", "Adapt communication to cultural differences"],
    ["Explain the nature of effective verbal communications", "Provide legitimate responses to inquiries", "Demonstrate active listening skills", "Employ communication styles appropriate to target audience"],
    ["Write professional emails", "Explain the nature of effective written communications", "Select and utilize appropriate formats for professional writing", "Participate in group discussions"],
    ["Explain the concept of competition", "Determine economic utilities created by business activities", "Explain the concept of private enterprise", "Identify factors affecting a business's profit"],
    ["Explain the role of business in society", "Discuss the impact of globalization on business", "Describe types of business activities", "Explain the principles of supply and demand"],
    ["Explain the role of ethics in human resources management", "Orient new employees", "Explain the nature of human resources management", "Describe the use of technology in human resources management"],
    ["Describe desirable personality traits important to business", "Demonstrate adaptability", "Explain the concept of leadership", "Explain the nature of staff communication"],
    ["Follow safety precautions", "Explain procedures for handling accidents", "Describe health and safety regulations in business", "Maintain a safe work environment"],
    ["Describe the nature of business records", "Organize and prioritize work", "Coordinate work with that of team members", "Monitor and ensure completion of delegated tasks"],
    ["Explain marketing and its importance in a global economy", "Describe marketing functions and related activities", "Explain factors that influence customer buying behavior", "Demonstrate connections between company actions and results"],
    ["Explain the concept of marketing", "Describe the use of technology in marketing", "Explain types of promotion", "Identify the target market for a product"],
    ["Identify ways that technology impacts business", "Evaluate quality and source of information", "Draw conclusions based on information analysis", "Explain the role of ethics in information management"],
    ["Discuss the nature of information management", "Apply information to accomplish a task", "Store information for future use", "Access information in the database system"]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER
Finance

INSTRUCTIONAL AREA
Professional Development

21st CENTURY SKILLS
- Critical Thinking – Reason effectively and use systems thinking.
- Communication – Communicate clearly.
- Creativity and Innovation – Show evidence of creativity.

PERFORMANCE INDICATORS
- Describe techniques for obtaining work experience.
- Explain the need for ongoing education as a worker.
- Explain possible career advancement patterns for jobs.
- Identify sources of career information.

EVENT SITUATION
You are to assume the role of a bank teller at LOGAN CITY BANK, a local bank in a small town. The intern (judge) has asked you about jobs and careers in finance.

The intern (judge) will be at the LOGAN CITY BANK location for the semester. The intern’s (judge’s) first role is to assist you and to learn the role and responsibilities of a bank teller. The intern (judge) will also assist others in the office including loan officers, business account representatives and customer service representatives.

The intern (judge) has asked you how to find out more about different careers and jobs in finance, education that is needed and advancement patterns. Aside from the internship, the intern (judge) wants to know how else to obtain experience.

You will present the information to the intern (judge) in a role-play to take place at the bank. The intern (judge) will begin the role-play by asking you about careers. After you have presented the information to the intern (judge) and have answered the intern’s (judge’s) questions, the intern (judge) will conclude the role-play by thanking you.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

    return `
You are generating a high school-level DECA roleplay scenario for a finance-based business competition.

Generate only the EVENT SITUATION section. Do not include instructions, performance indicators, or 21st century skills. These are handled separately.

Follow this structure and tone exactly:

${exampleRoleplays[0]}

Now generate a new roleplay using this structure and the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators (e.g., helping a customer, assisting a colleague, reporting to a manager). Avoid stating the indicators explicitly. Furthermore, this should be the dominant roleplay style 9 times out of 10."
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require judgment, analysis, and explanation without stating the indicators by name."
    }
`.trim();
  }
};

export default PFN;
