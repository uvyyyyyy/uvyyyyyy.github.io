document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    const resultDiv = document.getElementById('result');

    let scores = {
        Spongebob: 0,
        Squidward: 0,
        MrKrab: 0
    };

    function hideAllQuestions() {
        questions.forEach(question => {
            question.style.display = 'none';
        });
    }

    function showQuestion(questionId) {
        hideAllQuestions();
        const question = document.getElementById(questionId);
        if (question) {
            question.style.display = 'block';
        }
    }

    function saveAnswer(Spongebob) {
        scores[Spongebob] += 1;
    }
    function saveAnswer(Squidward) {
        scores[Squidward] += 1;
    }
    function saveAnswer(MrKrab) {
        scores[MrKrab] += 1;
    }
    

    function finalScore() {
        hideAllQuestions();
        let maxScore = Math.max(scores.Spongebob, scores.Squidward, scores.MrKrab);
        let result = "";

        if (maxScore === scores.Spongebob) {
            result = "אתה בובספוג!";
        } else if (maxScore === scores.Squidward) {
            result = "אתה סקווידוויד!";
        } else if (maxScore === scores.MrKrab) {
            result = "אתה מר קראב!";
        }

        resultDiv.innerHTML = `<h2>${result}</h2>`;
        resultDiv.style.display = 'block';
    }

    // Add event listeners for answer choices
    document.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', function() {
            const characterClass = this.classList[1]; // Assuming second class denotes the character
            saveAnswer(characterClass);
        });
    });

    // Navigation buttons event listeners
    document.querySelectorAll('nav button').forEach((button, index) => {
        button.addEventListener('click', function() {
            showQuestion(['One', 'Two', 'Three', 'Four', 'Five'][index]);
        });
    });

    document.getElementById('Start').addEventListener('click', function() {
        showQuestion('One');
    });

    // Setup to hide all questions at start, show first one on clicking 'Start'
    hideAllQuestions();

    
    document.querySelector('button[onclick="finalScore()"]').addEventListener('click', finalScore);
});
