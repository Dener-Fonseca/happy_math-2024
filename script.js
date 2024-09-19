function checkAnswer(questionId, correctOption) {

      const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);

      const feedbackElement = document.getElementById(`${questionId}-feedback`);

      if (selectedOption) {

        if (selectedOption.value == correctOption) {

          feedbackElement.textContent = "Parábens.Você acertou!";

          feedbackElement.style.color = "green";

        } else {

          feedbackElement.textContent = "Desculpe, mas você errou. Tente novamente.";

          feedbackElement.style.color = "red";

        }

      } else {

        feedbackElement.textContent = "Por favor, selecione uma resposta.";

      }

    }

    

    

function checkComparisonsAnswer(question, correctAnswer) {

            let radios = document.getElementsByName(question);

            let feedback = document.getElementById("feedback-" + question);

            for (let i = 0; i < radios.length; i++) {

                if (radios[i].checked) {

                    if (radios[i].value == correctAnswer) {

                        feedback.textContent = "Parabéns, você acertou!!";

                        feedback.style.color = "green";

                    } else {

                        feedback.textContent = "Desculpe, mas você errou. Tente novamente.";

                        feedback.style.color = "red";

                    }

                }

            }

        }

    

    

function checkAdditionAnswer(questionId, correctAnswer) {

            let radios = document.getElementsByName(questionId);

            let feedback = document.getElementById("feedback-" + questionId);

            for (let i = 0; i < radios.length; i++) {

                if (radios[i].checked) {

                    if (radios[i].value == correctAnswer) {

                        feedback.textContent = "Parabéns, você acertou!!";

                        feedback.style.color = "green";

                    } else {

                        feedback.textContent = "Desculpe, mas você errou. Tente novamente.";

                        feedback.style.color = "red";

                    }

                }

            }

        }

    

function checkSubtractionAnswer(questionId, correctAnswer) {

            let radios = document.getElementsByName(questionId);

            let feedback = document.getElementById("feedback-" + questionId);

            for (let i = 0; i < radios.length; i++) {

                if (radios[i].checked) {

                    if (radios[i].value == correctAnswer) {

                        feedback.textContent = "Parabéns, você acertou!!";

                        feedback.style.color = "green";

                    } else {

                        feedback.textContent = "Desculpe, mas você errou. Tente novamente.";

                        feedback.style.color = "red";

                    }

                }

            }

        }

    

    

function checkMultiplicationAnswer(questionId, correctAnswer) {

            let radios = document.getElementsByName(questionId);

            let feedback = document.getElementById("feedback-" + questionId);

            for (let i = 0; i < radios.length; i++) {

                if (radios[i].checked) {

                    if (radios[i].value == correctAnswer) {

                        feedback.textContent = "Parabéns, você acertou!!";

                        feedback.style.color = "green";

                    } else {

                        feedback.textContent = "Desculpe, mas você errou. Tente novamente.";

                        feedback.style.color = "red";

                    }

                }

            }

        }

    

    

function checkDivisionAnswer(questionId, correctAnswer) {

            let radios = document.getElementsByName(questionId);

            let feedback = document.getElementById("feedback-" + questionId);

            for (let i = 0; i < radios.length; i++) {

                if (radios[i].checked) {

                    if (radios[i].value == correctAnswer) {

                        feedback.textContent = "Parabéns, você acertou!!";

                        feedback.style.color = "green";

                    } else {

                        feedback.textContent = "Desculpe, mas você errou. Tente novamente.";

                        feedback.style.color = "red";

                    }

                }

            }

        }