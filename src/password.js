import login_logo from './images/logo-kanply_v3_white.png';
import login_image from './images/logo-kanply-long.png';

function generatePasswordContent(username) {
    const login = document.createElement('div');
    login.classList = "login";

        const loginFormContainer = document.createElement('div');
            loginFormContainer.classList = "loginFormContainer";

            const loginBox = document.createElement('div');
                loginBox.classList = 'loginBox';

                const loginImageContainer = document.createElement('div');
                    loginImageContainer.classList = 'loginBoxHeader';                    
                    
                    const iconLoginImage = new Image();
                        iconLoginImage.src = login_logo;
                        iconLoginImage.alt = "Kanply's logo";
                        iconLoginImage.id = "loginLogo";
                loginImageContainer.appendChild(iconLoginImage);
                    
                    const logoLoginImage = new Image();
                        logoLoginImage.src = login_image;
                        logoLoginImage.alt = "Kanply";
                        logoLoginImage.id = "loginImage";
                loginImageContainer.appendChild(logoLoginImage);

            loginBox.appendChild(loginImageContainer);

                const loginDesc = document.createElement('div');
                    loginDesc.classList = 'loginTitle';
                    loginDesc.innerHTML = 'Bienvenue'; 

            loginBox.appendChild(loginDesc);

                const loginDescUsername = document.createElement('p');
                    loginDescUsername.classList = 'usernamePlaceholder';
                    loginDescUsername.innerHTML = username + "</br>"; 

            loginBox.appendChild(loginDescUsername);

                const loginForm = document.createElement('form');
                    loginForm.setAttribute("action", "");
                    loginForm.setAttribute("method", "get");
                    loginForm.classList = 'loginForm';
                    const loginFieldset = document.createElement('div');
                        loginFieldset.classList = 'loginFieldset';
                        const passwordInput = document.createElement('div');
                            passwordInput.classList = 'usernameInput';
                            const passwordLabel = document.createElement('label');
                                passwordLabel.setAttribute("for", "password");
                                passwordLabel.innerHTML = "Mot de passe";
                        passwordInput.appendChild(passwordLabel);
                            const passwordField = document.createElement('input');
                                passwordField.setAttribute("type", "password");
                                passwordField.setAttribute("name", "password");
                        passwordInput.appendChild(passwordField);
                            const passwordError = document.createElement('div');
                                passwordError.classList = 'errorMessage';
                                passwordError.innerHTML = "Entrez une adresse courriel valide";
                        passwordInput.appendChild(passwordError);
                    loginFieldset.appendChild(passwordInput);
                loginForm.appendChild(loginFieldset);    
                    const loginButton = document.createElement('div');
                        loginButton.classList = 'loginButton';
                        const submitButton = document.createElement('button');
                            submitButton.id = "nextButton";
                            submitButton.innerHTML = "Suivant";
                    loginButton.appendChild(submitButton);
                loginForm.appendChild(loginButton);

            loginBox.appendChild(loginForm);

                const forgotUsername = document.createElement('div');
                    forgotUsername.classList = 'loginText';
                    forgotUsername.innerHTML = "Mot de passe oublié ?"; 

            loginBox.appendChild(forgotUsername);

        loginFormContainer.appendChild(loginBox);

    login.appendChild(loginFormContainer);

        const loginFooter = document.createElement('nav');
            loginFooter.classList = 'loginFooter';
            const loginFooterItemList = document.createElement('ul');
                const loginFooterItemHelp = document.createElement('li');
                    loginFooterItemHelp.innerHTML = 'Aide';
                loginFooterItemList.appendChild(loginFooterItemHelp);

                const loginFooterItemPolicy = document.createElement('li');
                    loginFooterItemPolicy.innerHTML = 'Politique de confidentialité';
                loginFooterItemList.appendChild(loginFooterItemPolicy);

                const loginFooterItemAgreement = document.createElement('li');
                    loginFooterItemAgreement.innerHTML = "Conditions d'utilisation";
                loginFooterItemList.appendChild(loginFooterItemAgreement);
        loginFooter.appendChild(loginFooterItemList);
      
    login.appendChild(loginFooter);

    return login.outerHTML;
}

export default generatePasswordContent;