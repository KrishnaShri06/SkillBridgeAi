// mockService.js - Simulates Backend & AI API

const MockService = {
    // Feature 1: Skill Gap & Roadmap (Enhanced for Guided Discovery)
    generateRoadmap: (profileData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const isBeginner = profileData.journey === 'exploring';
                // Honest Review Logic
                let review = "";
                let score = 50;

                if (isBeginner) {
                    review = `As a ${profileData.year} student just starting out, you have a blank canvas. The market currently favors <strong>Full Stack MERN</strong> developers. We have curated a roadmap to get you from Zero to Deployment.`;
                    score = 45;
                } else {
                    const cp = profileData.cpRating;
                    const projects = parseInt(profileData.projectCount || 0);
                    const complexity = profileData.complexity;

                    if (cp === 'Unrated' && projects < 2) {
                        review = `<strong>Warning:</strong> You are targeting ${profileData.role}, but your profile lacks both DSA foundation and significant projects. You are currently at high risk of being filtered out by ATS.`;
                        score = 30;
                    } else if (cp !== 'Unrated' && projects < 1) {
                        review = `<strong>Great Problem Solving Skills:</strong> Your ${cp} rating is impressive, but you lack development experience. Recruiters need to see you can build, not just code.`;
                        score = 65;
                    } else {
                        review = `<strong>Solid Profile:</strong> You have a good balance of DSA and Development. The focus now should be on System Design and Optimization.`;
                        score = 82;
                    }
                }

                resolve({
                    readinessScore: score,
                    role: isBeginner ? "Full Stack Trend" : profileData.role,
                    gapAnalysis: review,
                    weeks: [
                        {
                            title: "Phase 1: Foundation & Data Structures",
                            topics: "Arrays, Strings, Hashing, Two Pointers (The Striver Sheet)",
                            resources: [
                                { type: "youtube", title: "Striver's A2Z DSA Sheet / Playlist", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" },
                                { type: "blog", title: "GeeksforGeeks - Data Structures", link: "https://www.geeksforgeeks.org/data-structures/" }
                            ]
                        },
                        {
                            title: "Phase 2: Core Development Stack",
                            topics: isBeginner ? "HTML5, CSS3, Modern JS (ES6+), React Basics" : "Advanced React Patterns, Node.js Internals, Microservices",
                            resources: [
                                { type: "youtube", title: "CodeWithHarry - Web Development Playlist", link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w" },
                                { type: "blog", title: "MDN Web Docs - JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
                            ]
                        },
                        {
                            title: "Phase 3: Building & Deploying",
                            topics: "Docker, CI/CD, Cloud Deployment (AWS/Vercel)",
                            resources: [
                                { type: "youtube", title: "Hitesh Choudhary - Docker & Kubernetes", link: "https://www.youtube.com/results?search_query=hitesh+choudhary+docker" },
                                { type: "blog", title: "FreeCodeCamp - DevOps Handbook", link: "https://www.freecodecamp.org/news/tag/devops/" }
                            ]
                        },
                        {
                            title: "Phase 4: Capstone Project",
                            topics: "Build a real-world application with Authentication, Database, and Payment integration.",
                            resources: [
                                { type: "youtube", title: "JavaScript Mastery - Full Stack Builds", link: "https://www.youtube.com/@javascriptmastery" },
                                { type: "blog", title: "System Design Primer", link: "https://github.com/donnemartin/system-design-primer" }
                            ]
                        }
                    ]
                });
            }, 1000); // 1.5s simulated delay
        });
    },

    // Feature 2: Resume Scrutiny
    analyzeResume: (resumeText, jdText) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simple keyword matching simulation
                const score = Math.floor(Math.random() * (85 - 60) + 60); // Random score between 60-85

                resolve({
                    score: score,
                    missingKeywords: ["Docker", "Kubernetes", "CI/CD", "TypeScript"],
                    formatting: [
                        "Use standard bullet points (•) instead of arrows (>)",
                        "Limit resume length to 1 page (currently detected ~1.5 pages)",
                        "Quantify your achievements (add metrics like 'Improved X by Y%')"
                    ]
                });
            }, 2000);
        });
    }
};
