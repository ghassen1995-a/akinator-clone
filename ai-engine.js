/* ============================================
   HistoriaAI - Intelligent AI Engine
   Advanced Questioning Algorithm
   ============================================ */

class AIEngine {
    constructor(database) {
        this.fullDatabase = database;
        this.currentDatabase = database;
        this.remainingFigures = database;
        this.questionNumber = 0;
        this.maxQuestions = 20;
        this.questionHistory = [];
        this.selectedCategory = '';
        this.questions = [
            { text: 'question_male_female', attribute: 'male' },
            { text: 'question_alive', attribute: 'alive' },
            { text: 'question_ancient', attribute: 'ancient' },
            { text: 'question_medieval', attribute: 'medieval' },
            { text: 'question_modern', attribute: 'modern' },
            { text: 'question_contemporary', attribute: 'contemporary' },
            { text: 'question_politician', attribute: 'politician' },
            { text: 'question_scientist', attribute: 'scientist' },
            { text: 'question_artist', attribute: 'artist' },
            { text: 'question_athlete', attribute: 'athlete' },
            { text: 'question_entertainer', attribute: 'entertainer' },
            { text: 'question_military', attribute: 'military' },
            { text: 'question_philosopher', attribute: 'philosopher' },
            { text: 'question_western', attribute: 'western' },
            { text: 'question_eastern', attribute: 'eastern' },
            { text: 'question_violent', attribute: 'violent' },
            { text: 'question_peaceful', attribute: 'peaceful' },
            { text: 'question_inventor', attribute: 'inventor' },
            { text: 'question_writer', attribute: 'writer' },
            { text: 'question_musician', attribute: 'musician' },
        ];
    }

    initializeGame(category = '') {
        this.selectedCategory = category;
        this.questionNumber = 0;
        this.questionHistory = [];
        
        // Filter by category if selected
        if (category) {
            this.currentDatabase = this.fullDatabase.filter(f => f.category === category);
        } else {
            this.currentDatabase = this.fullDatabase;
        }
        
        this.remainingFigures = [...this.currentDatabase];
        
        return this.getNextQuestion();
    }

    processAnswer(answer) {
        if (this.questionNumber === 0) {
            return this.getNextQuestion();
        }

        const lastQuestion = this.questionHistory[this.questionHistory.length - 1];
        const attribute = lastQuestion.attribute;
        
        // Filter remaining figures based on answer
        if (answer === 'yes') {
            this.remainingFigures = this.remainingFigures.filter(f => f[attribute] === true);
        } else if (answer === 'no') {
            this.remainingFigures = this.remainingFigures.filter(f => f[attribute] === false);
        } else if (answer === 'maybe' || answer === 'dk') {
            // Keep all figures if unsure
        }

        // Check if we should make a guess
        if (this.shouldMakeGuess()) {
            return this.makeGuess();
        }

        return this.getNextQuestion();
    }

    shouldMakeGuess() {
        const confidence = this.getConfidence();
        
        // Make a guess if:
        // 1. Only 1 figure remains
        // 2. Confidence > 70% with ≤5 figures
        // 3. Maximum questions reached
        
        if (this.remainingFigures.length === 1) {
            return true;
        }
        
        if (confidence > 70 && this.remainingFigures.length <= 5) {
            return true;
        }
        
        if (this.questionNumber >= this.maxQuestions) {
            return true;
        }
        
        return false;
    }

    getNextQuestion() {
        this.questionNumber++;
        
        // Select the best question to ask
        const bestQuestion = this.selectBestQuestion();
        
        this.questionHistory.push(bestQuestion);
        
        return {
            type: 'question',
            question: bestQuestion,
            questionNumber: this.questionNumber,
            remaining: this.remainingFigures.length,
            confidence: this.getConfidence()
        };
    }

    selectBestQuestion() {
        // Filter out questions already asked
        const askedAttributes = this.questionHistory.map(q => q.attribute);
        const availableQuestions = this.questions.filter(
            q => !askedAttributes.includes(q.attribute)
        );
        
        // If all questions asked, cycle back
        if (availableQuestions.length === 0) {
            return this.questions[Math.floor(Math.random() * this.questions.length)];
        }
        
        // Select question that best divides the remaining pool
        let bestQuestion = availableQuestions[0];
        let bestScore = this.calculateDivisionScore(bestQuestion.attribute);
        
        for (let question of availableQuestions) {
            const score = this.calculateDivisionScore(question.attribute);
            if (score > bestScore) {
                bestScore = score;
                bestQuestion = question;
            }
        }
        
        return bestQuestion;
    }

    calculateDivisionScore(attribute) {
        const yesCount = this.remainingFigures.filter(f => f[attribute] === true).length;
        const noCount = this.remainingFigures.filter(f => f[attribute] === false).length;
        const total = yesCount + noCount;
        
        if (total === 0) return 0;
        
        // Score based on how evenly the question divides the pool
        const ratio = Math.min(yesCount, noCount) / total;
        return ratio;
    }

    getConfidence() {
        if (this.currentDatabase.length === 0) return 0;
        
        // Confidence based on how many figures remain
        const reduction = 1 - (this.remainingFigures.length / this.currentDatabase.length);
        return Math.round(Math.min(reduction * 100, 100));
    }

    makeGuess() {
        let guess;
        let accuracy;
        
        if (this.remainingFigures.length > 0) {
            // Pick the most likely figure (first one remaining)
            guess = this.remainingFigures[0];
            accuracy = this.calculateAccuracy();
        } else {
            // If no figures match, pick a random one
            guess = this.currentDatabase[Math.floor(Math.random() * this.currentDatabase.length)];
            accuracy = 10;
        }
        
        return {
            type: 'guess',
            guess: guess,
            accuracy: accuracy,
            questionNumber: this.questionNumber
        };
    }

    calculateAccuracy() {
        const confidence = this.getConfidence();
        const questionsAsked = this.questionNumber;
        const maxQuestions = this.maxQuestions;
        
        // Base accuracy on confidence and questions asked
        const confidenceFactor = confidence / 100;
        const efficiencyFactor = 1 - (questionsAsked / maxQuestions);
        
        const accuracy = Math.round(
            (confidenceFactor * 0.7 + efficiencyFactor * 0.3) * 100
        );
        
        return Math.max(accuracy, 10);
    }
}
