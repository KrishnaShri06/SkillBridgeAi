// components.js - UI Component Definitions

const Components = {
    Home: () => `
        <div class="hero-section fade-in">
            <div class="glass-card" style="max-width: 800px; margin: 0 auto;">
                <h1 class="hero-title">Bridge Your <br/> <span class="highlight">Competency Gap</span></h1>
                <p class="hero-subtitle">
                    SkillBridge AI transforms your academic profile into market-ready skills with intelligent roadmapping and real-time resume validation.
                </p>
                <div style="display: flex; gap: 20px; justify-content: center;">
                    <button onclick="document.getElementById('nav-skill-match').click()" class="cta-btn">Start Skill Analysis</button>
                    <button onclick="document.getElementById('nav-resume-check').click()" class="cta-btn" style="background: transparent; border: 1px solid var(--accent-cyan);">Upload Resume</button>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 60px;">
                <div class="glass-card" style="padding: 30px;">
                    <i class="fa-solid fa-route" style="font-size: 2rem; color: var(--accent-purple); margin-bottom: 20px;"></i>
                    <h3>Personalized Roadmap</h3>
                    <p style="color: var(--text-secondary); margin-top: 10px;">Get a 4-week tailored plan based on your current gaps.</p>
                </div>
                <div class="glass-card" style="padding: 30px;">
                    <i class="fa-solid fa-file-shield" style="font-size: 2rem; color: var(--accent-cyan); margin-bottom: 20px;"></i>
                    <h3>Resume Scrutiny</h3>
                    <p style="color: var(--text-secondary); margin-top: 10px;">Pass the ATS check before you even apply.</p>
                </div>
                <div class="glass-card" style="padding: 30px;">
                    <i class="fa-solid fa-briefcase" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 20px;"></i>
                    <h3>Direct Hiring</h3>
                    <p style="color: var(--text-secondary); margin-top: 10px;">Connect with recruiters looking for pre-vetted talent.</p>
                </div>
            </div>
        </div>
    `,

    SkillMatch: () => `
        <div class="glass-card" id="skill-match-container" style="max-width: 800px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-family: var(--font-heading); font-size: 2.5rem; margin-bottom: 15px;">Discovery <span class="highlight">Assessment</span></h2>
                <p style="color: var(--text-secondary);">Tell us where you are, and we'll tell you how to get there.</p>
            </div>
            
            <form id="discovery-form" style="display: flex; flex-direction: column; gap: 40px;">
                <!-- Question 1: Year -->
                <div class="form-section">
                    <h3 style="margin-bottom: 20px; color: var(--accent-cyan);">1. What is your current year of study?</h3>
                    <select id="user-year" class="nice-select" style="font-size: 1.1rem; padding: 20px;">
                        <option value="" disabled selected>Select your Year</option>
                        <option value="1st Year">1st Year (Freshman)</option>
                        <option value="2nd Year">2nd Year (Sophomore)</option>
                        <option value="3rd Year">3rd Year (Junior)</option>
                        <option value="4th Year">4th Year (Senior)</option>
                        <option value="Graduate">Graduate / Post-Grad</option>
                    </select>
                </div>

                <!-- Question 2: Market Awareness -->
                <div class="form-section">
                    <h3 style="margin-bottom: 20px; color: var(--accent-purple);">2. Where are you in your journey?</h3>
                    <div class="radio-card-group">
                        <label class="radio-card-label">
                            <input type="radio" name="journey" value="exploring" class="radio-card-input" checked>
                            <div class="radio-card-content">
                                <h4 style="color: var(--accent-cyan); margin-bottom: 5px;">Option A: Complete Beginner</h4>
                                <p style="font-size: 0.9rem; color: var(--text-secondary);">I want to understand market trends and identify potential roles.</p>
                            </div>
                        </label>
                        <label class="radio-card-label">
                            <input type="radio" name="journey" value="focused" class="radio-card-input">
                            <div class="radio-card-content">
                                <h4 style="color: var(--accent-purple); margin-bottom: 5px;">Option B: Goal-Oriented</h4>
                                <p style="font-size: 0.9rem; color: var(--text-secondary);">I already have a target role in mind (e.g. SDE, Data Scientist).</p>
                            </div>
                        </label>
                    </div>
                    
                    <!-- Conditional Input -->
                    <div id="target-role-container" style="margin-top: 20px; display: none;" class="fade-in">
                        <label class="input-label" style="color: var(--text-primary);">Which role are you targeting?</label>
                        <select id="target-role-select" class="nice-select">
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Full Stack Developer</option>
                            <option>DevOps Engineer</option>
                            <option>Data Scientist</option>
                        </select>
                    </div>
                </div>

                <!-- Question 3: Technical Depth -->
                <div class="form-section">
                    <h3 style="margin-bottom: 20px; color: var(--accent-blue);">3. Technical Depth</h3>
                    
                    <div class="input-group" style="margin-bottom: 25px;">
                        <label class="input-label">Competitive Programming Rating</label>
                        <select id="cp-rating" class="nice-select">
                            <option value="Unrated">Unrated / Newbie</option>
                            <option value="Pupil">Pupil / Knight (1200+)</option>
                            <option value="Specialist">Specialist / Guardian (1400+)</option>
                            <option value="Expert">Expert / Guardian (1600+)</option>
                            <option value="Candidate Master">Candidate Master / 2000+</option>
                        </select>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="input-group">
                            <label class="input-label">Projects Built</label>
                            <input type="number" id="project-count" class="nice-input" placeholder="e.g. 2" min="0">
                        </div>
                        
                        <div class="input-group">
                            <label class="input-label">Max Complexity</label>
                            <select id="project-complexity" class="nice-select">
                                <option value="Low">Low (Basic HTML/CSS/JS)</option>
                                <option value="Medium">Medium (MERN/CRUD/API)</option>
                                <option value="High">High (Microservices/AI/Real-time)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button type="submit" class="cta-btn" style="width: 100%; padding: 20px; font-size: 1.2rem; margin-top: 10px;">
                    Generate Personalized Roadmap <i class="fa-solid fa-wand-magic-sparkles" style="margin-left: 10px;"></i>
                </button>
            </form>
            
            <div id="skill-results" style="display: none; margin-top: 40px; padding-top: 40px; border-top: 1px solid var(--glass-border);">
                <!-- Dynamic Results -->
            </div>
        </div>
    `,

    ResumeCheck: () => `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <div class="glass-card">
                <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 20px;">Upload Materials</h2>
                <form id="resume-form">
                    <div class="input-group">
                        <label class="input-label">Job Description (Paste Text)</label>
                        <textarea id="jd-text" class="nice-textarea" rows="8" placeholder="Paste the job description here..."></textarea>
                    </div>
                    <div class="input-group">
                        <label class="input-label">Resume (PDF)</label>
                        <div class="file-upload-wrapper" style="position: relative; overflow: hidden; display: inline-block; width: 100%;">
                            <input type="file" id="resume-upload" accept="application/pdf" class="nice-input" style="padding-top: 10px;">
                        </div>
                    </div>
                    <button type="submit" class="cta-btn" style="width: 100%; margin-top: 20px;">Run Scrutiny Check</button>
                </form>
            </div>

            <div class="glass-card" id="resume-results" style="display: flex; align-items: center; justify-content: center; text-align: center; color: var(--text-secondary);">
                <div>
                    <i class="fa-solid fa-magnifying-glass-chart" style="font-size: 4rem; opacity: 0.5; margin-bottom: 20px;"></i>
                    <p>Results will appear here after analysis</p>
                </div>
            </div>
        </div>
    `,

    JobBoard: () => `
        <div class="glass-card">
            <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 30px;">Student <span class="highlight">Job Board</span></h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px;">
                <!-- Job Card 1 -->
                <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 16px; padding: 25px; transition: transform 0.3s ease; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--accent-cyan);"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                        <div>
                            <h3 style="font-size: 1.25rem; font-family: var(--font-heading);">TechCorp</h3>
                            <p style="color: var(--text-secondary); font-size: 0.9rem;">Recruiter: Krishna Shrivastav</p>
                        </div>
                        <div style="width: 40px; height: 40px; background: rgba(6, 182, 212, 0.1); border-radius: 8px; display: flex; justify-content: center; align-items: center; color: var(--accent-cyan);">
                            <i class="fa-solid fa-building"></i>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 5px;">Roles:</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.8rem;">Frontend</span>
                            <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.8rem;">Backend</span>
                            <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.8rem;">Fullstack</span>
                        </div>
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScwKobMQzvufpVOSrJBIuzWBp8suW592pd4DD_GbT8Af-mx8g/viewform?usp=publish-editor" target="_blank" class="cta-btn" style="width: 100%; display: block; text-align: center; text-decoration: none;">
                        Apply Now <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8rem; margin-left: 5px;"></i>
                    </a>
                </div>
            </div>
        </div>
    `,

    // --- Event Attachments ---

    attachSkillMatchEvents: () => {
        const form = document.getElementById('discovery-form');
        const resultsDiv = document.getElementById('skill-results');

        // Conditional Logic for Role Selection
        const journeyRadios = document.querySelectorAll('input[name="journey"]');
        const roleContainer = document.getElementById('target-role-container');

        if (journeyRadios && roleContainer) {
            journeyRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    roleContainer.style.display = (e.target.value === 'focused') ? 'block' : 'none';
                });
            });
        }

        if (form) {
            // Remove any existing listeners by cloning (optional but safe)
            const newForm = form.cloneNode(true);
            form.parentNode.replaceChild(newForm, form);

            newForm.addEventListener('submit', async (e) => {
                e.preventDefault(); // STOP PAGE RELOAD

                // UI Loading State
                newForm.style.display = 'none';
                if (resultsDiv) {
                    resultsDiv.style.display = 'block';
                    resultsDiv.innerHTML = '<div style="text-align: center;"><i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2rem; color: var(--accent-cyan);"></i><p style="margin-top: 15px;">AI is analyzing your profile...</p></div>';
                }

                try {
                    // Collect Data
                    const getVal = (id) => document.getElementById(id)?.value || '';
                    const getRadio = (name) => document.querySelector(`input[name="${name}"]:checked`)?.value || 'exploring';

                    const data = {
                        year: getVal('user-year'),
                        journey: getRadio('journey'),
                        role: getVal('target-role-select'),
                        cpRating: getVal('cp-rating'),
                        projectCount: getVal('project-count'),
                        complexity: getVal('project-complexity')
                    };

                    const result = await MockService.generateRoadmap(data);

                    if (resultsDiv) {
                        resultsDiv.innerHTML = `
                            <div style="text-align: center; margin-bottom: 40px;" class="fade-in">
                                <h2 style="color: var(--text-primary); margin-bottom: 10px;">Your Discovery Analysis</h2>
                                <div style="display: inline-block; padding: 20px 40px; background: rgba(16, 185, 129, 0.1); border: 2px solid var(--success); border-radius: 16px;">
                                    <span style="display: block; font-size: 0.9rem; color: var(--success); text-transform: uppercase; letter-spacing: 1px;">Readiness Score</span>
                                    <span style="font-size: 3rem; font-weight: bold; color: var(--text-primary);">${result.readinessScore}/100</span>
                                </div>
                                <p style="margin-top: 20px; max-width: 600px; margin-left: auto; margin-right: auto; color: var(--text-secondary);">${result.gapAnalysis}</p>
                            </div>

                            <h3 style="margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">${result.role} Roadmap</h3>
                            <div class="roadmap-timeline">
                                ${result.weeks.map((week, index) => `
                                    <div style="display: flex; gap: 20px; margin-bottom: 25px;" class="fade-in" style="animation-delay: ${index * 0.2}s">
                                        <div style="display: flex; flex-direction: column; align-items: center;">
                                            <div style="width: 40px; height: 40px; background: var(--glass-bg); border: 2px solid var(--accent-cyan); border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold;">${index + 1}</div>
                                            <div style="width: 2px; height: 100%; background: var(--glass-border); margin-top: 10px; display: ${index === 2 ? 'none' : 'block'}"></div>
                                        </div>
                                        <div style="flex: 1; background: rgba(255,255,255,0.03); padding: 25px; border-radius: 16px; border: 1px solid var(--glass-border);">
                                            <h4 style="color: var(--accent-blue); font-size: 1.1rem; margin-bottom: 5px;">${week.title}</h4>
                                            <p style="font-size: 0.95rem; margin-bottom: 15px; color: var(--text-secondary);">${week.topics}</p>
                                            
                                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                                ${week.resources.map(res => `
                                                    <a href="${res.link}" target="_blank" class="resource-tag" style="text-decoration: none; font-size: 0.85rem; padding: 6px 12px; border-radius: 20px; background: rgba(255,255,255,0.05); color: var(--text-primary); display: flex; align-items: center; gap: 6px; transition: background 0.2s;">
                                                        <i class="${res.type === 'youtube' ? 'fa-brands fa-youtube' : 'fa-regular fa-file-lines'}"></i>
                                                        ${res.title}
                                                    </a>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <button onclick="document.getElementById('nav-skill-match').click()" class="secondary-btn" style="margin-top: 20px;">Retake Assessment</button>
                        `;
                    }
                } catch (err) {
                    console.error(err);
                    if (resultsDiv) resultsDiv.innerHTML = `<p style="color: var(--danger);">An error occurred: ${err.message}</p>`;
                }
            });
        }
    },

    attachResumeCheckEvents: () => {
        const form = document.getElementById('resume-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const resultsDiv = document.getElementById('resume-results');
            const fileInput = document.getElementById('resume-upload');
            const jd = document.getElementById('jd-text').value;

            if (!fileInput.files || fileInput.files.length === 0) {
                alert("Please upload a PDF resume.");
                return;
            }

            const file = fileInput.files[0];
            if (file.type !== 'application/pdf') {
                alert("Only PDF files are allowed.");
                return;
            }

            resultsDiv.innerHTML = '<div style="text-align: center;"><i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2rem; color: var(--accent-cyan);"></i><p style="margin-top: 15px;">Parsing PDF & Analyzing matches...</p></div>';

            try {
                // PDF Parsing Logic using PDF.js
                // Step 1: Read the file as an ArrayBuffer
                const arrayBuffer = await file.arrayBuffer();

                // Step 2: Load the PDF
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

                // Step 3: Extract Text from All Pages
                let fullText = "";
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map(item => item.str).join(" ");
                    fullText += pageText + "\\n";
                }

                console.log("Extracted Parsed Text:", fullText); // Debugging

                // Step 4: Send to AI Mock Service
                const result = await MockService.analyzeResume(fullText, jd);

                // Step 5: Render Results
                resultsDiv.style.display = 'block';
                resultsDiv.innerHTML = `
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 8px solid ${result.score > 70 ? 'var(--success)' : 'var(--warning)'}; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; font-weight: bold; margin: 0 auto 20px;">
                            ${result.score}%
                        </div>
                        <h3>Match Score</h3>
                    </div>

                    <div style="text-align: left; margin-bottom: 20px;">
                        <h4 style="color: var(--danger); margin-bottom: 10px;"><i class="fa-solid fa-triangle-exclamation"></i> Missing Keywords</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                            ${result.missingKeywords.map(k => `<span style="background: rgba(239, 68, 68, 0.2); color: var(--danger); padding: 5px 10px; border-radius: 5px; font-size: 0.9rem;">${k}</span>`).join('')}
                        </div>
                    </div>

                    <div style="text-align: left;">
                        <h4 style="color: var(--accent-blue); margin-bottom: 10px;"><i class="fa-solid fa-file-pdf"></i> PDF Insights</h4>
                         <ul style="list-style-position: inside; color: var(--text-secondary); line-height: 1.6;">
                            <li>File Parsed: <strong>${file.name}</strong></li>
                            <li>Pages Sanned: <strong>${pdf.numPages}</strong></li>
                            <li>Character Count: <strong>${fullText.length}</strong> characters</li>
                        </ul>
                    </div>
                `;

            } catch (err) {
                console.error(err);
                resultsDiv.innerHTML = `<p style="color: var(--danger);">Error parsing PDF: ${err.message}. Please try a simpler PDF or check console.</p>`;
            }
        });
    },


};
