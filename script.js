const mockPolls = [
    {
        name: "Favorite Programming Language",
        questions: [
            {
                question: "Which language do you prefer?",
                options: [
                    { text: "JavaScript", votes: 0 },
                    { text: "Python", votes: 0 },
                    { text: "Java", votes: 0 }
                ]
            },
            {
                question: "Which language is best for web development?",
                options: [
                    { text: "JavaScript", votes: 0 },
                    { text: "Python", votes: 0 },
                    { text: "Ruby", votes: 0 }
                ]
            }
        ]
    }
];



document.addEventListener('DOMContentLoaded', () => {

    const pollContainer = document.getElementById('pollContainer');
    const submitButton = document.getElementById('submitVote');


    if (!pollContainer) return; 

    const poll = mockPolls[0]; 

    if (!poll) {
        pollContainer.innerHTML = '<p>No polls available at the moment.</p>';
        return;
    }

    

    const displayPoll = () => {
        pollContainer.innerHTML = `<h1>Poll Name: ${poll.name}</h1>`;
        poll.questions.forEach((q, qIndex) => {
            const questionHtml = `
                <div>
                    <h2>${q.question}</h2>
                    ${q.options.map((option, index) => `
                        <input type="radio" name="pollOption${qIndex}" id="option${qIndex}_${index}" value="${index}">
                        <label for="option${qIndex}_${index}">${option.text}</label><br>
                    `).join('')}
                </div>
            `;
            pollContainer.insertAdjacentHTML('beforeend', questionHtml);
        });
    };

    displayPoll();

    if (submitButton) {
        submitButton.disabled = false;
        submitButton.onclick = () => {
            const allAnswered = poll.questions.every((q, qIndex) => {
                const selectedOption = document.querySelector(`input[name="pollOption${qIndex}"]:checked`);
                if (selectedOption) {
                    q.options[selectedOption.value].votes++;
                    return true;
                }
                return false;
            });

            
            if (!allAnswered) {
                alert('Please answer all questions before submitting.');
            } else {
                window.location.href = 'result.html';
            }
        };
    }
});
