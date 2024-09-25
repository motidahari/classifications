import OpenAI from "openai";

export class PromptService {
  private openai: OpenAI;

  constructor() {
    const openai = new OpenAI();
  }

  public async getCompletion() {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Write a haiku about recursion in programming.",
        },
      ],
    });
    return completion;
  }
}
