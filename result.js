function displayResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    const polls = JSON.parse(localStorage.getItem('polls'));
    

    if (polls && polls.length > 0) {
        const poll = polls[0]; 
         const pollNameElement = document.createElement('h1');
        pollNameElement.textContent = `Poll Name: ${poll.name}`;
        resultsContainer.appendChild(pollNameElement);

        poll.questions.forEach(q => {


            const questionResult = document.createElement('div');
            questionResult.innerHTML = `
                <h2>${q.question}</h2>
                ${q.options.map(option => `
                    <p>${option.text}: ${option.votes} votes</p>
                `).join('')}
            `;
            resultsContainer.appendChild(questionResult);
        });
    } else {
        resultsContainer.innerHTML = '<p>No poll results available.</p>';
    }
}


window.onload = displayResults;
