(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.SocialShare = global.SocialShare || {})));
}(this, (function (exports) { 'use strict';

var SocialShare = (function () {
    function SocialShare() {
    }
    SocialShare.prototype.generateSocialLinks = function (services, url, text) {
        var _this = this;
        var links = {};
        services.forEach(function (service) {
            links[service] = _this.createSocial(service, url, text);
        });
        return links;
    };
    SocialShare.prototype.openPopup = function (e, dimensions) {
        var target = e.target;
        var width = dimensions.width || 500;
        var height = dimensions.height || 500;
        var left = Math.floor(((screen.availWidth || 1024) - width) / 2);
        var top = Math.floor(((screen.availHeight || 700) - height) / 2);
        var popup = window.open(target.href, 'social', 'width=' +
            width +
            ',height=' +
            height +
            ',left=' +
            left +
            ',top=' +
            top +
            ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');
        if (popup) {
            popup.focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }
        return !!popup;
    };
    SocialShare.prototype.createSocial = function (service, url, text) {
        if (text === void 0) { text = 'I’m hosting a webinar!'; }
        var link = '';
        switch (service) {
            case 'twitter':
                link = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text;
                break;
            case 'facebook':
                link = "https://www.facebook.com/sharer/sharer.php?u=" + url;
                break;
            case 'linkedin':
                link = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;
                break;
            case 'pinterest':
                link = "https://pinterest.com/pin/create/button/?url=" + url;
                break;
            case 'google-plus':
                link = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
                break;
            default:
                link = "isn't supported";
                break;
        }
        return link;
    };
    return SocialShare;
}());
var SocialShareModule = new SocialShare();

exports.SocialShareModule = SocialShareModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
