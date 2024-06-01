import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title1 = 'Prompt';
  title2 = 'patterns';

  intro_text = `Prompt engineering is an increasingly important skill set needed to converse effectively with large language models (LLMs), such as ChatGPT. 
  Prompts are also a form of programming that can customize the outputs and interactions with an LLM.`;

  prompt = `  Prompts are instructions given to an LLM to enforce rules, automate processes, and ensure specific qualities (and quantities) of generated output. 
  Prompts are not just mere questions but calls to action, reminders, and cues that can influence immediate responses or have a temporal impact on future interactions (eg. from now on).	
  Prompts can solicit information from users, elicit improved versions of questions, and even serve as memory cues for the language model.`;

  prompt_patterns = `Prompt patterns leverage the trained behavior of large language models to achieve desired outcomes.
  A prompt pattern is a structured way of formulating statements to address specific problems with the model.
  Prompt patterns aim to ensure certain words, behaviors, or formats in the model's output.
  Various problems can be addressed with prompt patterns, such as obtaining specific responses (e.g., yes or no), generating summaries, or ensuring consistent output formatting.
  `;

  persona_pattern = `By specifying a persona (for eg. Nutritionist),the model generates output consistent with that persona's knowledge and behavior.
  It enables generating diverse perspectives, such as skeptics, computer scientists, or characters from stories.Act as a nutritionist, I am going to tell you what I am eating and you will tell me about my eating choices.
  "Act as a gourmet chef, I am going to tell you what I am eating and you will tell me rsona pattern tailors responses by instructing the model to adopt specific personas or entities."
  `;

  question_refinement = `The pattern involves instructing the LLM to suggest a improved phrasing whenever a question is asked, and prompting whether to use the refined version instead.
  The idea is that LLMs have extensive training data, so they can infer useful related context, patterns, and wording to make the question more specific and effective.
  This helps provide better context and uncover missing information needed to properly answer the query."Whenever I ask a question about dieting, suggest a better version of the question that;
   emphasizes healthy eating habits and sound nutrition. Ask me for the first question to refine."`;

  cognitive_verifier = `Large language models (LLMs) can often reason better by breaking down a complex problem into smaller sub-problems or questions.
  The "cognitive unifier pattern" instructs the LLM to generate additional questions that could help answer the original query more accurately.
  It then combines the answers to those sub-questions to produce a final response to the original query. "When you are asked a question, follow these rules. 
  Generate a number of additional questions that would help you more accurately answer the question. Combine the answers to the individual questions to produce the final answer to the overall question."`;

  audience_persona = `The "audience persona pattern" involves instructing the language model to tailor its explanation or output for a specific audience persona. It complements the "persona pattern" where the LLM acts as a certain persona,
   by instead specifying who the recipient persona is. This allows the LLM to adjust its language, examples, and framing appropriately for that audience's background and traits. 
   "Explain how the supply chains for US grocery stores work to me. Assume that I am Ghengis Khan."
  `

}



