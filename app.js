// app.js - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentTab = 'home';
    const appContainer = document.getElementById('main-content');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Routing Logic
    function renderTab(tabName) {
        currentTab = tabName;

        // Update Nav UI
        navButtons.forEach(btn => {
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Content Injection
        appContainer.innerHTML = '';
        appContainer.classList.remove('fade-in');
        void appContainer.offsetWidth; // Trigger reflow
        appContainer.classList.add('fade-in');

        switch (tabName) {
            case 'home':
                appContainer.innerHTML = Components.Home();
                break;
            case 'skill-match':
                appContainer.innerHTML = Components.SkillMatch();
                Components.attachSkillMatchEvents();
                break;
            case 'resume-check':
                appContainer.innerHTML = Components.ResumeCheck();
                Components.attachResumeCheckEvents();
                break;
            case 'job-board':
                appContainer.innerHTML = Components.JobBoard();
                break;
            default:
                appContainer.innerHTML = Components.Home();
        }
    }

    // Event Listeners
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            renderTab(tab);
        });
    });

    // Initial Render
    renderTab('home');
});
