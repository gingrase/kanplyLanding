import hero_logo from './images/automation_green.png';
import hero_image from './images/logo-kanply-long.png';

function generateLoginContent() {
    const center = document.createElement('div');
        center.classList = "center";
        const itemContainer = document.createElement('div');
            itemContainer.classList = "center_items";
            const itemLogin = document.createElement('div');
                itemLogin.classList = 'center_item';
                const itemLoginImageContainer = document.createElement('div');
                    itemLoginImageContainer.classList = 'image';
                    const iconLoginImage = new Image();
                        iconLoginImage.src = hero_logo;
                        iconLoginImage.alt = "Login Icon";
                        iconLoginImage.classList = "logo";
                    itemLoginImageContainer.appendChild(iconLoginImage);
                const itemLoginDesc = document.createElement('div');
                    itemLoginDesc.classList = 'subtext';
                    itemLoginDesc.innerHTML = "Kanply login !"; 
            itemLogin.appendChild(itemLoginImageContainer);
            itemLogin.appendChild(itemLoginDesc);
        itemContainer.appendChild(itemLogin);
        center.appendChild(itemContainer);
        return center.outerHTML;
}

export default generateLoginContent;