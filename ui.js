class UI {
    constructor() {
        this.profile = document.getElementById('profile');

    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card body mb3">
               
                    <div class="row">
                        <div class="col-sm-3 ">
                            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                            <a href="${user.html_url}" class="btn btn-primary btn-block">View Profile</a>
                        </div>
                        <div class="col-sm-9">
                                 <div class="m-2">
                                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                                <span class="badge badge-success">Followers ${user.followers}</span>
                                <span class="badge badge-info">Following: ${user.following}</span>
                                </div>
                                <br><br>
                                <ul class="list-group m-2 mb-3">
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                                </ul>
                        </div>
                    </div>
                
            </div>
            <h3 class="page-heading m-3">Latest Repos</h3>
            <div id="repos"></div>`;
    }
    // Show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}"  target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks ${repo.forks_count}</span>
                    </div>                
                </div>
            </div>`
            // Output repos
            document.getElementById('repos').innerHTML = output;
        })
    }

    // Show Alert Message
    showAlert(message, className) {
        // Clear alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add Class to div
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message))
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search Box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);

        // Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }
    //  Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile on blank input
    clearProfile() {
        this.profile.innerHTML = '';

    }
}