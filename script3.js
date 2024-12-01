let students = [];
let subjects = [];

function addStudent() {
    const name = document.getElementById('studentName').value;
    const roll = document.getElementById('studentRoll').value;
    students.push({ name, roll });
    localStorage.setItem('students', JSON.stringify(students)); 
    alert(`Student ${name} added successfully!`);
    document.getElementById('studentName').value = '';
    document.getElementById('studentRoll').value = '';
    displayStudents();
}

function addSubject() {
    const subject = document.getElementById('subjectName').value;
    subjects.push(subject);
    localStorage.setItem('subjects', JSON.stringify(subjects)); 
    alert(`Subject ${subject} added successfully!`);
    document.getElementById('subjectName').value = '';
    displaySubjects();
}

function showStudentsList() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${student.name} (Roll No: ${student.roll})`;
        studentsList.appendChild(listItem);
    });
}

function submitAttendance() {
    alert('Attendance submitted successfully!');
}

function loadStudents() {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
        students = storedStudents;
        displayStudents();
    }
}

function loadSubjects() {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
        subjects = storedSubjects;
        displaySubjects();
    }
}

function displayStudents() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${student.name} (Roll No: ${student.roll})`;
        studentsList.appendChild(listItem);
    });
}

function displaySubjects() {
    const subjectsList = document.getElementById('subjectsList');
    subjectsList.innerHTML = '';
    subjects.forEach(subject => {
        const listItem = document.createElement('li');
        listItem.innerHTML = subject;
        subjectsList.appendChild(listItem);
    });
}

window.onload = function() {
    loadStudents();
    loadSubjects();
}