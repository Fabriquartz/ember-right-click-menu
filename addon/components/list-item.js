import { guidFor }                   from '@ember/object/internals';
import { get, action }               from '@ember/object';
import { inject as service }         from '@ember/service';
import Component                     from '@glimmer/component';

export default class ListItem extends Component {
  @service rightClickMenu

  popperId = guidFor(this);

  @action
  mouseEnter(e) {
    e.stopPropagation();

    if (this.args.item.disabled) {
      return;
    }

    this.rightClickMenu.createPopper(`popper-for-${get(this, 'popperId')}`);
  }

  @action
  triggerAction() {
    if (this.args.item.disabled) {
      return;
    }

    if (this.args.item.action) {
      this.args.item.action();
    }

    if (!this.args.item.items) {
      this.args.closeContextMenu();
    }
  }
}