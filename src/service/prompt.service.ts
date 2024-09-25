import OpenAI from "openai";
import { classificationTemplate } from '../classification/office.classification.template';
import { ClassificationResponse } from '../domain-model/classification.response';
import { ExpenseDetails } from '../domain-model/expense.details';
import { BusinessDetails } from '../domain-model/business.details';

export class PromptService {
  private openai: OpenAI;
  private assistant: OpenAI.Beta.Assistants.Assistant;
  private readonly instructions: string = `
    You are a highly specialized AI assistant trained to classify business expenses based on the provided business and expense details.
    The service is operating in Israel, and the classifications must adhere to the Israeli Tax Authorities' rules.
    Use the provided classification template to map the expense to the most appropriate classification code.
    You are provided with business details (payer of the expense) and expense details.
    Your task is to analyze both business and expense details and return a strict JSON array containing relevant classification suggestions or an empty array if no valid classifications are found.

    ### Business Type Logic:
    If the business type is EXEMPT, NON_PROFIT_ORGANIZATION, or PUBLIC_BENEFIT_COMPANY, the VAT classification for expenses will always be 0.
    Here is the business type enum:
    
    - LICENSED = 1
    - LTD_COMPANY = 2
    - EXEMPT = 3
    - NON_PROFIT_ORGANIZATION = 4
    - PUBLIC_BENEFIT_COMPANY = 5
    - PARTNERSHIP = 6
    
    ### Classification Template:
    ${classificationTemplate.map(
    item => `- "${item.description}" => { "accountKey": "${item.accountKey}", "categoryCode": ${item.categoryCode} }`
  ).join('\n')}

    ### JSON Output Format:
    You must return a strict JSON array containing objects with the following properties:
    {
      "accountKey": "string",
      "categoryCode": "number",
      "type": "string"
    }
    Please return the JSON as plain text without any additional formatting.

    If no classification matches the expense, return an empty array.

    Make sure the JSON is valid and strictly follows the given format.
  `;

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey });
  }

  public async classifyExpense(businessDetails: BusinessDetails, expenseDetails: ExpenseDetails): Promise<ClassificationResponse[]> {
    const userPrompt = {
      businessDetails,
      expenseDetails
    };

    const completion = await this.openai.chat.completions.create({
      messages: [{"role": "system", "content": this.instructions},
        {"role": "user", "content": `${JSON.stringify(userPrompt)}`}],
      model: "gpt-4o-mini",
    });

    const choice = completion.choices[0];

    console.log('[Prompt Result]', choice);
    return JSON.parse(choice.message.content);
  }
}
