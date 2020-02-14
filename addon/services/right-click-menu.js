import { A }   from '@ember/array';
import Service from '@ember/service';
import Popper  from '@popperjs/core';

export default class RightClickMenuService extends Service {
  activeLists = A();

  createPopper(popperElementId) {
    let popperElement = document.querySelector(`#${popperElementId}`);
    let targetElement = popperElement
      ? popperElement.parentElement
      : document.querySelector(
          `#${popperElementId.replace('popper-for-', '')}`
      );

    for (let siblingElement of targetElement.parentElement.children) {
      this.closePopper(siblingElement);
    }

    if (
      targetElement &&
      popperElement &&
      !this.activeLists.find((menu) => {
        return (
          menu.targetElement === targetElement &&
          menu.popperElement === popperElement
        );
      })
    ) {
      let popperInstance = Popper.createPopper(targetElement, popperElement, {
        placement: 'right'
      });

      popperElement.setAttribute('data-show', '');

      this.activeLists.pushObject({
        targetElement,
        popperElement,
        popperInstance
      });
    }
  }

  closePopper(targetElement) {
    let menu = this.activeLists.findBy('targetElement', targetElement);

    if (menu) {
      let childTargetElements = menu.popperElement.querySelectorAll(
        'li.ember-right-click-menu__item'
      );
      for (let childTargetElement of childTargetElements) {
        this.closePopper(childTargetElement);
      }

      menu.popperInstance.destroy();
      menu.popperElement.removeAttribute('data-show');

      this.activeLists.removeObject(menu);
    }
  }
}
