async function fetchGitHubRepo() {
    try {
        const response = await fetch('https://api.github.com/repos/falcon-solution/iROCKER');
        if (!response.ok) throw new Error('Repository not found');
        const data = await response.json();

        document.getElementById('github-card').innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description || 'No description available.'}</p>
            <div class="github-stats">
                ⭐ ${data.stargazers_count} | 🍴 ${data.forks_count}
            </div>
            <a href="${data.html_url}" target="_blank">View on GitHub</a>
        `;
    } catch (error) {
        document.getElementById('github-card').innerHTML = `<p>Error loading repository details.</p>`;
    }
}

fetchGitHubRepo();
