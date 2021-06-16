import { A }   from '@ember/array';
import Service from '@ember/service';
import Popper  from '@popperjs/core';

export default class RightClickMenuService extends Service {
  activeLists = A();

  createPopper(popperElementId, targetElement, virtualElement, options = {}) {
    let popperElement = document.querySelector(`#${popperElementId}`);

    targetElement =
      targetElement ||
      document.querySelector(`#${popperElementId.replace('popper-for-', '')}`);

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
      let popperInstance = Popper.createPopper(
        virtualElement || targetElement,
        popperElement,
        {
          placement: virtualElement ? 'right-start' : options.placement || 'right',
          modifiers: [
            {
              name:    'offset',
              options: {
                offset: virtualElement ? [0, 10] : options.offset || [0, 0]
              }
            }
          ]
        }
      );

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
