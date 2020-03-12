import { guidFor }           from '@ember/object/internals';
import { action }            from '@ember/object';
import { inject as service } from '@ember/service';
import Component             from '@glimmer/component';

export default class RightClickMenuComponent extends Component {
  @service rightClickMenu;

  popperId = guidFor(this);

  generateGetBoundingClientRect(x = 0, y = 0) {
    return () => ({
      width:  0,
      height: 0,
      top:    y,
      right:  x,
      bottom: y,
      left:   x
    });
  }

  @action
  addContextMenuListeners() {
    window.addEventListener('click', this.closeContextMenu);
    window.addEventListener('contextmenu', this.closeContextMenu);
    document
      .querySelector(`#popper-for-${this.popperId}`)
      .parentElement.addEventListener('contextmenu', this.contextMenu);
  }

  willDestroy() {
    let element = document.querySelector(`#popper-for-${this.popperId}`);

    window.removeEventListener('click', this.closeContextMenu);
    window.removeEventListener('contextmenu', this.closeContextMenu);

    if (element) {
      element.parentElement.removeEventListener(
        'contextmenu',
        this.contextMenu
      );
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
          width:  0,
          height: 0,
          top:    y,
          right:  x + 10,
          bottom: y,
          left:   x
        };
      }
    };

    this.rightClickMenu.createPopper(popperElementId, virtualElement);
  }

  @action
  closeContextMenu(e) {
    let rootElement = document.querySelector(`#popper-for-${this.popperId}`)
      .parentElement;

    if (!e || !e.path.includes(rootElement)) {
      this.rightClickMenu.closePopper(rootElement);
    }
  }
}
