// Instantiate GtitHub
const github = new GitHub;

// Instantiate GtitHub
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser')

// Search input event listener
searchUser.addEventListener('keyup', e => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP Request
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert

                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // Clear Profile
    }
})
