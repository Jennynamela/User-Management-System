const CreateUser = () => {
  const createUserForm = `
      <div>
          <h2>Create User</h2>
          <!-- Formular zur Benutzererstellung -->
      </div>
  `;
  return createElementFromHTML(createUserForm);
};

const createElementFromHTML = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};
