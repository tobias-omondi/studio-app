from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break
    
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": user_input}]
    )
    print(f"AI: {response.choices[0].message.content}\n")