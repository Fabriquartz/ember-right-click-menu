import { guidFor }           from '@ember/object/internals';
import { action }            from '@ember/object';
import { inject as service } from '@ember/service';
import Component             from '@glimmer/component';

export default class RightClickMenuComponent extends Component {
  @service rightClickMenu;

  popperId = guidFor(this);

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
      element.parentElement.removeEventListener('contextmenu', this.contextMenu);
    }

    super.willDestroy(...arguments);
  }

  @action
  contextMenu(e) {
    e.preventDefault();
    let popperElementId = `popper-for-${this.popperId}`;

    this.rightClickMenu.createPopper(popperElementId);
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
