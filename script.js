```javascript
/* =========================================
   PORTFOLIO DATA
========================================= */

let skills = [];
let projects = [];
let certificates = [];


/* =========================================
   UPDATE PORTFOLIO
========================================= */

function updatePortfolio() {

    const name =
        document.getElementById("name").value;

    const role =
        document.getElementById("role").value;

    const about =
        document.getElementById("about").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const location =
        document.getElementById("location").value;

    const degree =
        document.getElementById("degree").value;

    const college =
        document.getElementById("college").value;

    const year =
        document.getElementById("year").value;


    /* Personal */

    document.getElementById("displayName").textContent =
        name || "Your Name";

    document.getElementById("displayRole").textContent =
        role || "Your Professional Role";

    document.getElementById("displayAbout").textContent =
        about || "Write something about yourself.";

    document.getElementById("aboutDisplay").textContent =
        about || "Your professional introduction appears here.";


    /* Contact */

    document.getElementById("displayEmail").textContent =
        email || "email@example.com";

    document.getElementById("displayPhone").textContent =
        phone || "+91 XXXXX XXXXX";

    document.getElementById("displayLocation").textContent =
        location || "Your Location";


    /* Education */

    document.getElementById("displayDegree").textContent =
        degree || "Your Degree";

    document.getElementById("displayCollege").textContent =
        college || "Your College";

    document.getElementById("displayYear").textContent =
        year || "Year";


    /* Social */

    setLink(
        "githubLink",
        document.getElementById("github").value
    );

    setLink(
        "linkedinLink",
        document.getElementById("linkedin").value
    );

    setLink(
        "instagramLink",
        document.getElementById("instagram").value
    );
}


/* =========================================
   SOCIAL LINK
========================================= */

function setLink(id, url) {

    const element =
        document.getElementById(id);

    if (url.trim() !== "") {

        element.href = url;

    } else {

        element.href = "#";

    }
}


/* =========================================
   PROFILE IMAGE
========================================= */

function uploadImage(event) {

    const file =
        event.target.files[0];

    if (!file) return;

    const reader =
        new FileReader();

    reader.onload = function(e) {

        document.getElementById(
            "displayImage"
        ).src = e.target.result;

    };

    reader.readAsDataURL(file);
}


/* =========================================
   ADD SKILL
========================================= */

function addSkill() {

    const input =
        document.getElementById("skillInput");

    const level =
        document.getElementById("skillLevel").value;

    const name =
        input.value.trim();

    if (name === "") {

        alert("Please enter a skill");

        return;
    }

    skills.push({
        name: name,
        level: level
    });

    input.value = "";

    renderSkills();
}


/* =========================================
   RENDER SKILLS
========================================= */

function renderSkills() {

    const container =
        document.getElementById("displaySkills");

    container.innerHTML = "";


    if (skills.length === 0) {

        container.innerHTML =
            '<p class="empty">Add your skills</p>';

        return;
    }


    skills.forEach(skill => {

        const card =
            document.createElement("div");

        card.className = "skill-card";

        card.innerHTML = `

            <div class="skill-header">

                <strong>
                    ${escapeHTML(skill.name)}
                </strong>

                <span>
                    ${skill.level}%
                </span>

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${skill.level}%"
                ></div>

            </div>

        `;

        container.appendChild(card);

    });
}


/* =========================================
   ADD PROJECT
========================================= */

function addProject() {

    const title =
        document.getElementById("projectTitle").value.trim();

    const description =
        document.getElementById("projectDescription").value.trim();

    const link =
        document.getElementById("projectLink").value.trim();


    if (title === "") {

        alert("Enter project name");

        return;
    }


    projects.push({
        title,
        description,
        link
    });


    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDescription").value = "";
    document.getElementById("projectLink").value = "";


    renderProjects();
}


/* =========================================
   RENDER PROJECTS
========================================= */

function renderProjects() {

    const container =
        document.getElementById("displayProjects");

    container.innerHTML = "";


    projects.forEach(project => {

        const card =
            document.createElement("div");

        card.className = "project-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(project.title)}
            </h3>

            <p>
                ${escapeHTML(project.description)}
            </p>

            ${
                project.link
                ?
                `<a href="${escapeAttribute(project.link)}"
                    target="_blank">
                    View Project →
                </a>`
                :
                ""
            }

        `;


        container.appendChild(card);

    });


    if (projects.length === 0) {

        container.innerHTML =
            '<p class="empty">Add projects</p>';

    }
}


/* =========================================
   ADD CERTIFICATE
========================================= */

function addCertificate() {

    const name =
        document.getElementById("certificate")
        .value.trim();

    const issuer =
        document.getElementById("certificateIssuer")
        .value.trim();


    if (name === "") {

        alert("Enter certificate name");

        return;
    }


    certificates.push({
        name,
        issuer
    });


    document.getElementById("certificate").value = "";
    document.getElementById("certificateIssuer").value = "";


    renderCertificates();
}


/* =========================================
   RENDER CERTIFICATES
========================================= */

function renderCertificates() {

    const container =
        document.getElementById(
            "displayCertificates"
        );

    container.innerHTML = "";


    certificates.forEach(certificate => {

        const card =
            document.createElement("div");

        card.className =
            "certificate-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(certificate.name)}
            </h3>

            <p>
                ${escapeHTML(certificate.issuer)}
            </p>

        `;


        container.appendChild(card);

    });


    if (certificates.length === 0) {

        container.innerHTML =
            '<p class="empty">Add certifications</p>';

    }
}


/* =========================================
   THEME
========================================= */

function changeTheme() {

    const theme =
        document.getElementById("theme").value;


    const root =
        document.documentElement;


    if (theme === "blue") {

        root.style.setProperty(
            "--primary",
            "#2563eb"
        );

    }

    else if (theme === "purple") {

        root.style.setProperty(
            "--primary",
            "#7c3aed"
        );

    }

    else if (theme === "green") {

        root.style.setProperty(
            "--primary",
            "#059669"
        );

    }

    else if (theme === "dark") {

        root.style.setProperty(
            "--primary",
            "#0f172a"
        );

    }
}


/* =========================================
   DARK MODE
========================================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "darkMode",
        isDark
    );
}


/* =========================================
   SAVE PORTFOLIO
========================================= */

function savePortfolio() {

    const data = {

        name: getValue("name"),
        role: getValue("role"),
        about: getValue("about"),

        email: getValue("email"),
        phone: getValue("phone"),
        location: getValue("location"),

        degree: getValue("degree"),
        college: getValue("college"),
        year: getValue("year"),

        github: getValue("github"),
        linkedin: getValue("linkedin"),
        instagram: getValue("instagram"),

        skills,
        projects,
        certificates

    };


    localStorage.setItem(
        "portfolioData",
        JSON.stringify(data)
    );


    alert("Portfolio saved successfully!");
}


/* =========================================
   LOAD PORTFOLIO
========================================= */

function loadPortfolio() {

    const saved =
        localStorage.getItem("portfolioData");

    if (!saved) return;


    const data =
        JSON.parse(saved);


    Object.keys(data).forEach(key => {

        const element =
            document.getElementById(key);

        if (element && typeof data[key] === "string") {

            element.value = data[key];

        }

    });


    skills =
        data.skills || [];

    projects =
        data.projects || [];

    certificates =
        data.certificates || [];


    renderSkills();
    renderProjects();
    renderCertificates();

    updatePortfolio();
}


/* =========================================
   EXPORT HTML
========================================= */

function downloadHTML() {

    const portfolio =
        document.getElementById(
            "portfolioPreview"
        ).outerHTML;


    const css =
        document.querySelector(
            "link[rel='stylesheet']"
        ).href;


    const html = `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>My Portfolio</title>

<link rel="stylesheet"
href="${css}">

</head>

<body>

${portfolio}

</body>

</html>

`;


    const blob =
        new Blob(
            [html],
            { type: "text/html" }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "my-portfolio.html";


    link.click();


    URL.revokeObjectURL(url);
}


/* =========================================
   FULLSCREEN
========================================= */

function fullscreenPreview() {

    const element =
        document.getElementById(
            "portfolioPreview"
        );


    if (element.requestFullscreen) {

        element.requestFullscreen();

    }
}


/* =========================================
   SECURITY HELPERS
========================================= */

function escapeHTML(value) {

    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function escapeAttribute(value) {

    return value
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}


/* =========================================
   GET VALUE
========================================= */

function getValue(id) {

    return document
        .getElementById(id)
        .value;
}


/* =========================================
   LOAD WHEN PAGE OPENS
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        loadPortfolio();

        if (
            localStorage.getItem(
                "darkMode"
            ) === "true"
        ) {

            document.body.classList.add(
                "dark"
            );

        }

        updatePortfolio();

    }
);
```
