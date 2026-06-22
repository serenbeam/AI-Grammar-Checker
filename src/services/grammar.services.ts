import { GrammarCheckParams, GrammarCheckReslut, OpenRequestResponse } from "@/types";
import { apiService } from "./api.services";
import { API_CONSTANTS } from "@/constants";

class GrammarService {

  async checkGrammar(
    params: GrammarCheckParams,
  ): Promise<GrammarCheckReslut> {

    const { text, tone = 'formal' } = params;

    apiService.abortCurrentRequest();
    apiService.createAbortController();

    const response =
      await apiService.post<OpenRequestResponse>(
        API_CONSTANTS.ENDPOINTS.CHAT_COMPLETIONS,
        {
          model: API_CONSTANTS.MODEL,
          messages: [
            {
              role: 'system',
              content: `
                You are an English grammar checker.

                Correct the user's sentence according to this tone:

                ${tone}

                Return ONLY valid JSON.

                {
                  "correctedText": "",
                  "explanation": ""
                }

                Do not add markdown.
                Do not add code block.
                Do not add extra text.
                `,
            },
            {
              role: 'user',
              content: text
            },
          ],
        },
      );

    const content =
      response.choices[0]?.message.content?.trim() ?? '{}';

    try {
      const cleanContent = content
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      const parsed = JSON.parse(cleanContent);

      return {
        originalText: text,
        correctedText: parsed.correctedText,
        explanation: parsed.explanation
      }
    } catch {
      
      return {
        originalText: text,
        correctedText: content,
      };
    }
  }
}

export const grammarService = new GrammarService();