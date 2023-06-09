import './style.css';
import logoImage from './images/logo-kanply-square.png';
import generateHomeContent from './home.js';
import generateAProposContent from './apropos.js';
import generateLoginContent from './login.js';
import generatePasswordContent from './password.js';

function generateHeader() {
  const header = document.createElement('header');
    const logoContainer = document.createElement('div');
      const logo = new Image();
        logo.src = logoImage;
        logo.alt = "Kanply's logo";
        logo.classList = "logo";
        logoContainer.addEventListener("click", function(){ document.getElementById("content").innerHTML = generateHomeContent() });
      logoContainer.appendChild(logo);
  header.appendChild(logoContainer);
    const menuContainer = document.createElement('nav');
      const menuItemList = document.createElement('ul');
        const menuItemAPropos = document.createElement('li');
          menuItemAPropos.classList = "menuItemAPropos";
          menuItemAPropos.innerHTML = 'À propos';
        menuItemAPropos.addEventListener("click", function(){ document.getElementById("content").innerHTML = generateAProposContent() });
      menuItemList.appendChild(menuItemAPropos);
        const menuItemLogin = document.createElement('li');
          menuItemLogin.classList = "menuItemLogin";
          menuItemLogin.innerHTML = 'Connexion';
          menuItemLogin.addEventListener("click", 
            function() { 
              document.getElementById("content").innerHTML = generateLoginContent(); 
              document.getElementById("nextButton").addEventListener("click", 
                function() {
                  document.getElementById("content").innerHTML = generatePasswordContent(document.getElementById('usernameField').value); 
                } 
              ) 
            }
          );
      menuItemList.appendChild(menuItemLogin);
        const menuItemLang = document.createElement('li');
          menuItemLang.classList = "menuItemLang";
          menuItemLang.innerHTML = '<b>EN</b>';
      menuItemList.appendChild(menuItemLang);
    menuContainer.appendChild(menuItemList);
  header.appendChild(menuContainer);
  return header; 
}

function generateContent() {
  const content = document.createElement('div');
    content.id = "content";
  return content;
}

function generateFooter() {
  const footer = document.createElement('footer');
    footer.innerHTML = 'Copyright © Kanply 2023';
  return footer;
}



/* ****************************************************************** */

/* ****************************************************************** */

const page = document.createElement('div');
page.classList = 'page';
page.appendChild(generateHeader());
page.appendChild(generateContent());
page.appendChild(generateFooter());

document.body.appendChild(page);

document.getElementById("content").innerHTML = generateHomeContent();