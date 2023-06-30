const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById('output-box');

searchButton.addEventListener("click", async () => {
  const input = searchInput.value;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Replace YOUR_API_KEY with your actual OpenAI API key
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'I am Gregory. Your AI chatbot' },

        //{ role: 'system', content: 'You are Gregory.An AI chatbot' }, // Set the system message to introduce Gregory
        { role: 'user', content: input }
      ]
    })
  });

  const data = await response.json();
  const result = data.choices[0].message.content;
  searchResults.textContent = result;
});
