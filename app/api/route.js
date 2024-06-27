import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;


export async function POST(req){

    const{messages} = await req.json();

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    messages.unshift({
        role: 'system',
        content: ` You are PortfolioGPT, answering only questions based on the resume provided.
        Resume:
        ${DATA_RESUME}
        Help users learn more about Shourya from his resume.    
        `
    })


    const response = await client.getChatCompletions(model, messages, {
        maxTokens: 200,
    })

    return NextResponse.json({
        message: response.choices[0].message.content
    })
}

const DATA_RESUME = `SHOURYA SARKAR
Applied Electronics and Instrumentation Engineering
Final Year Undergraduate
Phone: +91 8017522639
shouryasarkar2003@gmail.com
Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on additional responsibilities to achieve team goals.
EDUCATION
HERITAGE INSTITUTE OF TECHNOLOGY 2021-2025
NATIONAL HIGH SCHOOL CBSE CLASS 12(PCMC) 2019-2021
SOUTH POINT HIGH SCHOOL CBSE CLASS 10 2006-2019
EXPERIENCE
 CodSafe – Python Developer Intern (1 month)
 CipherByte Technologies – Web Developer Intern (1 month)
 OasisInfoByte – Python Developer (1 month)
COMPUTER SKILLS
Programming: C - Intermediate, Python - Intermediate, HTML - Intermediate, CSS - Intermediate, JavaScript - Basic, Arduino – Intermediate, Kotlin – Basic, GNU Octave – Basic, MySQL – Intermediate, C++ - Basic, Oracle SQL Database – Intermediate, IOT-Basic,
MicroPython – Basic, Embedded System – Basic of the Embedded Operating Systems
Platforms: VsCode, PyCharm, Arduino IDE, Sublime Text, Postman API, Android Studio, IntelliJ IDE, Dev-C++, Atom, Thonny.
PROJECTS
 Alexa: It is a program which is exactly going to almost work like the original Alexa however it is not AI generated. The commands are manually given inside of the text.
 My-Personal-Website: It is a website completely about me and if anyone wants to get in touch with me can email me from there and can also see my social media profiles.
 Cash4Bottles: It is an Arduino based project. To incentivize and promote plastic bottle recycling through the installation of vending machines that reward users with cash for depositing their plastic bottles.
 Emotion Analyzer: It is a simple emotion analyzer which with the help of nltk and Text Blob libraries to train the model.
 IOT Bases Smart Agriculture Monitoring System
 Weathervue – It is website which is going to tell us the current weather and climate of a region.
INTERESTS
Artificial Intelligence, Machine Learning and Natural Language Processing based on Arduino projects.
LANGUAGES
English
Bengali
Hindi`