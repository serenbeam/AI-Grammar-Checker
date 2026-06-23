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

                Your task is ONLY to detect and correct grammar mistakes.

                Rules:

                1. If the sentence is already grammatically correct, do NOT rewrite it.
                2. Preserve the user's original wording whenever possible.
                3. Do not improve style, vocabulary, or phrasing unless necessary to fix a grammar mistake.
                4. Do not change sentence structures or tenses unless necessary to fix a grammar mistake.
                5. Preserve the user's original meaning.
                6. If no grammar mistakes are found, return the original sentence unchanged.
                7. Keep explanations short and simple.
                8. Return ONLY valid JSON.

                Response format:

                {
                "correctedText": "",
                "explanation": ""
                }

                Do not add markdown.
                Do not add code blocks.
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