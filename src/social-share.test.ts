import {SocialShareModule} from './modules/social-share.module';

const links = SocialShareModule.generateSocialLinks(['twitter', 'facebook', 'linkedin', 'pinterest', 'google-plus'], 'https://test.com');

const printTarget = <HTMLElement>document.querySelector('.debug__output');

function generateLinks() {
  let c = document.createDocumentFragment();

  Object.keys(links).forEach((link) => {
    const a = document.createElement('a');
    a.innerHTML = link;
    a.href = links[link];
    a.addEventListener('click', function (e) {
      openPopup(e);
    });
    c.appendChild(a);
    c.appendChild(document.createElement('br'));
  });

  return c;
}

printTarget.appendChild(generateLinks());

function openPopup(e: MouseEvent) {
  SocialShareModule.openPopup(e, {width: 600, height: 600});
}
