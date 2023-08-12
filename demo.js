import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

dotenv.config();

const template = "Apa nama perusahaan yang bagus untuk sebuah usaha yang membuat {product} ? "
const promptTemplate = new PromptTemplate({ 
    template: template,
    inputVariables: ["product"],
});


const model = new OpenAI({
    temperature : 0.9
});

const chain = new LLMChain({
    llm : model,
    prompt: promptTemplate,
});

const res = await chain.call({
    product : "Baju anak2 dengan tema bunga yang ceria",
});

console.log(res);