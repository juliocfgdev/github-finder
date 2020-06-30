class UI {
    constructor() {
        this.profile = document.getElementById('profile');

    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card body mb3">
               
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                            <a href="${user.html_url}" class="btn btn-primary  b mb-4">View Profile</a>
                        </div>
                        <div class="col-sm-9">
                                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                                <span class="badge badge-success">Followers ${user.followers}</span>
                                <span class="badge badge-info">Following: ${user.following}</span>
                                <br><br>
                                <ul class="list-group mb-3">
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                                </ul>
                        </div>
                    </div>
                
            </div>
            <h3 class="page-heading m-3">Latest Repos</h3>
            <div id="repos"></div>`
    }
}