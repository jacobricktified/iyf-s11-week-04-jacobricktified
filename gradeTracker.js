// Grade Tracker Object
// This object manages students and their grades, providing methods to add students, calculate averages, and generate report cards.
const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({
            name: name,
            grades: grades
        });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const grades = Object.values(student.grades);

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return (total / grades.length).toFixed(2);
    },

    // Get class average for one subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        });

        if (count === 0) {
            return "Subject not found";
        }

        return (total / count).toFixed(2);
    },

    // Get the top-performing student
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        let topStudent = this.students[0];
        let highestAverage = parseFloat(this.getStudentAverage(topStudent.name));

        this.students.forEach(student => {
            const average = parseFloat(this.getStudentAverage(student.name));

            if (average > highestAverage) {
                highestAverage = average;
                topStudent = student;
            }
        });

        return topStudent.name;
    },

    // Students with average below 70
    getStrugglingStudents() {
        return this.students.filter(student => {
            return parseFloat(this.getStudentAverage(student.name)) < 70;
        });
    },

    // Convert score to letter grade
    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    },

    // Generate a report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        let report = `\n===== REPORT CARD =====\n`;
        report += `Student: ${student.name}\n`;
        report += `------------------------\n`;

        for (const subject in student.grades) {
            const score = student.grades[subject];
            const letter = this.getLetterGrade(score);

            report += `${subject}: ${score} (${letter})\n`;
        }

        const average = this.getStudentAverage(name);
        report += `------------------------\n`;
        report += `Average: ${average}\n`;
        report += `Overall Grade: ${this.getLetterGrade(average)}\n`;

        return report;
    }
};

// --------------------
// Test Data
// --------------------

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

// --------------------
// Tests
// --------------------

console.log("Alice Average:", gradeTracker.getStudentAverage("Alice"));

console.log("Math Average:", gradeTracker.getSubjectAverage("math"));

console.log("Top Student:", gradeTracker.getTopStudent());

console.log("Students Needing Help:");
console.log(gradeTracker.getStrugglingStudents());

console.log(gradeTracker.generateReportCard("Alice"));