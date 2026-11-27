document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    const routes = {
        '/create': CreateUser,
        '/edit/:id': EditUser,
        '/forgot-password': ForgotPassword,
        '/reset-password': ResetPassword,
        '/': UserList
    };
    
    const render = () => {
        const path = window.location.pathname;
        const Component = routes[path] || NotFound;
        root.innerHTML = '';
        root.appendChild(Component());
    };
    
    window.addEventListener('popstate', render);
    render();
});

// Fetch Benutzerliste von der API und anzeigen
function fetchAndDisplayUsers() {
    const userListContainer = document.getElementById('user-list');

    // API-Aufruf zum Abrufen der Benutzerliste
    api.getUsers()
        .then(users => {
            // Benutzerliste in die HTML-Liste einfügen
            userListContainer.innerHTML = users.map(user => `
                <li class="list-group-item">${user.username}</li>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            userListContainer.innerHTML = '<li class="list-group-item">Error fetching users</li>';
        });
}

// Seite initialisieren
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayUsers();
});

