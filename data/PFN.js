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
    ["Identify tentative occupational interest", "Explain career opportunities in entrepreneurship", "Utilize job-search strategies", "Utilize career-advancement activities to enhance professional development"]
  ],

  exampleRoleplays: [
    `CAREER CLUSTER\nFinance\n\nINSTRUCTIONAL AREA\nProfessional Development\n\n21st CENTURY SKILLS\n- Critical Thinking – Reason effectively and use systems thinking.\n- Communication – Communicate clearly.\n- Creativity and Innovation – Show evidence of creativity.\n\nPERFORMANCE INDICATORS\n- Describe techniques for obtaining work experience.\n- Explain the need for ongoing education as a worker.\n- Explain possible career advancement patterns for jobs.\n- Identify sources of career information.\n\nEVENT SITUATION\nYou are to assume the role of a bank teller at LOGAN CITY BANK, a local bank in a small town. The intern (judge) has asked you about jobs and careers in finance.\n\nThe intern (judge) will be at the LOGAN CITY BANK location for the semester. The intern’s (judge’s) first role is to assist you and to learn the role and responsibilities of a bank teller. The intern (judge) will also assist others in the office including loan officers, business account representatives and customer service representatives.\n\nThe intern (judge) has asked you how to find out more about different careers and jobs in finance, education that is needed and advancement patterns. Aside from the internship, the intern (judge) wants to know how else to obtain experience.\n\nYou will present the information to the intern (judge) in a role-play to take place at the bank. The intern (judge) will begin the role-play by asking you about careers. After you have presented the information to the intern (judge) and have answered the intern’s (judge’s) questions, the intern (judge) will conclude the role-play by thanking you.`,

    `CAREER CLUSTER\nFinance\n\nINSTRUCTIONAL AREA\nInformation Management\n\n21st CENTURY SKILLS\n- Critical Thinking – Reason effectively and use systems thinking.\n- Communication – Communicate clearly.\n- Creativity and Innovation – Show evidence of creativity.\n\nPERFORMANCE INDICATORS\n- Identify ways that technology impacts business.\n- Describe the scope of the internet.\n- Assess information needs.\n- Obtain needed information efficiently.\n\nEVENT SITUATION\nYou are to assume the role of an employee at TRUSTED FAMILY FINANCIAL, a local business that specializes in secure financial planning. The owner (judge) has asked you to explain why having a website would be beneficial for the business.\n\nTRUSTED FAMILY FINANCIAL does not have a website. The owner (judge) thinks a website is unnecessary because the business does not allow customers to make online transactions or changes. Promoted as the most trusted and secure financial planning company, the owner (judge) feels online transactions add unnecessary risk. The owner (judge) feels that hosting a website without the ability to make online transactions would be a waste of money and not benefit the company.\n\nYou will explain to the owner (judge) the benefits of a TRUSTED FAMILY FINANCIAL website. You must list the information that would be included on the website and how the included information would benefit both the business and customers.\n\nYou will present the information to the owner (judge) in a role-play to take place at the office. The owner (judge) will begin the role-play by asking you about websites. After you have presented the information and answered the owner’s (judge’s) questions, the owner (judge) will conclude the role-play by thanking you.`
  ],

  promptTemplate: ({ indicators, exampleRoleplays }) => {
    const style = Math.random() < 0.9 ? "Foundational Style" : "Problem-Solution Style";

    return `
You are generating a high school-level DECA roleplay scenario for a finance-based business competition. Follow this **EXACT 4-paragraph structure** modeled after the examples below. Do not label or title the paragraphs.

${exampleRoleplays[0]}

${exampleRoleplays[1]}

Now generate a new roleplay using this format:

Paragraph 1: Setup  
Begin with **"You are to assume the role of..."** and describe the student’s job at a business. Mention the judge’s role and their specific request or concern.  
🔑 Required phrasing: "You are to assume the role of a [role] at [business]. The [judge] has asked you about [topic]."

Paragraph 2: Judge & Company Context  
Explain who the judge is, what they do, and how they interact with the student. Describe the business’s focus and how the topic relates to it.  
🔑 Required phrasing: "The [judge role] has worked at [company] for [time]... The company specializes in..."

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
- Match the length and structure of the two example roleplays. Do not shorten.

Use the following style: **${style}**
${
      style === "Foundational Style"
        ? "Create a scenario where the student’s responsibilities naturally involve applying the indicators. Example: helping a customer, assisting a colleague, or reporting to a supervisor. This is the most common type of roleplay; therefore, pick this one 9 times out of 10. Furthermore, as a general instruction applying despite which type of roleplay you pick, do not include a scenario logic section at the bottom of the roleplay."
        : "Create a realistic business problem that the student must solve using the indicators. The scenario should require their judgment, analysis, or communication."
    }
    `.trim();
  }
};

export default PFN;
