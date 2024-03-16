# Rhythmo AI

### 🌟 Introduction
Rhythmo AI is a transformative cross-platform app designed to support dancers and athletes by reducing the risk of developing chronic injuries and minimizing slow, delayed recovery progress. Utilizing the power of AI, Rhythmo offers a personalized approach to injury prevention and management, ensuring users can continue their passion for sports and movement with confidence.

### 🛠 Tech Stack
- **Frontend:** React Native, Expo
- **Backend:** ExpressJS, NodeJS
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **AI & Machine Learning:** OpenAI/Anthropic, Pinecone, Python

### 📱 Platforms
- iOS
- Android

### ✨ Features
- **QnA Styled Input Output System:** Users input details about their sports injury through 17 selectively proposed questions.
- **Injury Identification:** Algorithm deduces top 3 potential sports injuries based on user inputs, providing immediate remedies and professional advice suggestions.
- **Extensive Injury Database:** AI-generated and expert-verified information on 500+ common sports injuries in dancers and athletes.
- **Verified by Medical Professionals:** Data accuracy, reliability, and efficiency cross-checked with Singapore’s representative of Orthopaedic Surgery.

### 🏗 How It Works / Architecture
- **Data Research and AI Modeling:** Initial manual research on sports injuries followed by AI to generate structured research on a wider range of injuries. All data is manually verified by medical professionals. 
- **User Interaction:** Through a user-friendly interface, users are guided to provide specific information about their injuries. Any key information that is not captured by the initial questions is prompted through follow-up questions until our model has enough information to make an accurate prediction.
- **RAG Pipeline & Large Language Models:** Utilizes a RAG pipeline to fetch relevant data from the verified datasheet based on user inputs. LLMs are employed to synthesize the information and classify the injury.
- **Healthcare Professional Network:** Rhythmo links to a network of healthcare professionals for verification, offering users a reliable source of medical advice.

### 📖 Background
In a world where sports and movement are indispensable, the risk of injuries—and consequently, chronic conditions—has significantly increased. Rhythmo AI addresses the critical gap in early identification and accurate management of sports injuries, combating the spread of medical misinformation and facilitating quicker, safer recovery processes.

### 🎯 Mission
Our mission with Rhythmo AI is clear: **Reveal** the injury accurately, **Repair** with informed, immediate actions, and **Reignite** the passion for sports without the shadow of injury fears.