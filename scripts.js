document.addEventListener('DOMContentLoaded', () => {
    // Example data
    const experience = [
        { title: 'Software Developer', company: 'Hulk Developer', dates: '2020 - Present', description: 'Developed and maintained web applications.' },
        { title: 'Intern', company: 'Dev House', dates: '2019 - 2020', description: 'Assisted with frontend development tasks.' }
    ];

    const education = [
        { degree: 'B.Sc. in Computer Science', institution: 'Iqra University ', year: '2019' }
    ];

    const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];

    // Insert experience
    const experienceSection = document.getElementById('experience');
    experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.innerHTML = `
            <h3>${exp.title} at ${exp.company}</h3>
            <p>${exp.dates}</p>
            <p>${exp.description}</p>
        `;
        experienceSection.appendChild(expDiv);
    });

    // Insert education
    const educationSection = document.getElementById('education');
    education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
            <h3>${edu.degree}</h3>
            <p>${edu.institution}</p>
            <p>${edu.year}</p>
        `;
        educationSection.appendChild(eduDiv);
    });

    // Insert skills
    const skillsSection = document.getElementById('skills');
    const skillsList = document.createElement('ul');
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    skillsSection.appendChild(skillsList);

    // Download resume functionality
    document.getElementById('downloadResume').addEventListener('click', () => {
        const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.html';
        a.click();
        URL.revokeObjectURL(url);
    });
});
