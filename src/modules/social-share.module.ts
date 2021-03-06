export type SupportedSocialService = 'twitter' | 'facebook' | 'linkedin' | 'pinterest' | 'google-plus' | 'instagram';
export type SupportedSocialServices = SupportedSocialService[];

export interface Link {
  [key: string]: string;
}

export class SocialShare {
  constructor() {}

  generateSocialLinks(services: SupportedSocialServices, url: string, text: string): Link {
    const links: Link = {};

    services.forEach(service => {
      links[service] = this.createSocial(service, url, text);
    });

    return links;
  }

  openPopup(e: MouseEvent, dimensions: { width: number; height: number }) {
    const target = <HTMLAnchorElement>e.target;
    const width = dimensions.width || 500;
    const height = dimensions.height || 500;

    const left = Math.floor(((screen.availWidth || 1024) - width) / 2);
    const top = Math.floor(((screen.availHeight || 700) - height) / 2);

    const popup = window.open(
      target.href,
      'social',
      'width=' +
        width +
        ',height=' +
        height +
        ',left=' +
        left +
        ',top=' +
        top +
        ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1',
    );

    if (popup) {
      popup.focus();
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.returnValue = false;
    }

    return !!popup;
  }

  private createSocial(service: SupportedSocialService, url: string, text = 'I’m hosting a webinar!') {
    let link: string = '';

    switch (service) {
      case 'twitter':
        link = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        link = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        link = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'pinterest':
        link = `https://pinterest.com/pin/create/button/?url=${url}`;
        break;
      case 'google-plus':
        link = `https://plus.google.com/share?url=${url}`;
        break;
      case 'instagram':
        link = `https://www.instagram.com/direct/new/`;
        break;
      default:
        link = "isn't supported";
        break;
    }

    return link;
  }
}

export const SocialShareModule = new SocialShare();
