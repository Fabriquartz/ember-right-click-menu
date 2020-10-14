import { guidFor } from "@ember/object/internals";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@glimmer/component";

export default class RightClickMenuComponent extends Component {
  @service rightClickMenu;

  popperId = guidFor(this);

  generateGetBoundingClientRect(x = 0, y = 0) {
    return () => ({
      width: 0,
      height: 0,
      top: y,
      right: x,
      bottom: y,
      left: x,
    });
  }

  getTargetElement(popperId) {
    let tetherElement = document.querySelector(`#tether-for-${popperId}`);
    let targetElement = tetherElement && tetherElement.parentElement;

    if (targetElement) {
      tetherElement.remove();
      this.targetElement = targetElement;
      return targetElement;
    }
  }

  @action
  addContextMenuListeners() {
    window.addEventListener("click", this.closeContextMenu);
    window.addEventListener("contextmenu", this.closeContextMenu);
    this.getTargetElement(this.popperId).addEventListener(
      "contextmenu",
      this.contextMenu
    );
  }

  willDestroy() {
    window.removeEventListener("click", this.closeContextMenu);
    window.removeEventListener("contextmenu", this.closeContextMenu);

    if (this.targetElement) {
      this.targetElement.removeEventListener("contextmenu", this.contextMenu);
    }

    super.willDestroy(...arguments);
  }

  @action
  contextMenu(e) {
    e.preventDefault();
    let popperElementId = `popper-for-${this.popperId}`;

    let { clientX: x, clientY: y } = e;

    let virtualElement = {
      getBoundingClientRect: () => {
        return {
          width: 0,
          height: 0,
          top: y,
          right: x + 10,
          bottom: y,
          left: x,
        };
      },
    };

    this.rightClickMenu.createPopper(
      popperElementId,
      this.targetElement,
      virtualElement
    );
  }

  @action
  closeContextMenu(e) {
    if (
      e &&
      !e.path.every((element) => {
        return (
          !element.className ||
          !element.className.includes('ember-right-click-menu__item')
        );
      })
    ) {
      return;
    }

    if (!e || e.type === "click" || !e.path.includes(this.targetElement)) {
      this.rightClickMenu.closePopper(this.targetElement);
    }
  }
}
