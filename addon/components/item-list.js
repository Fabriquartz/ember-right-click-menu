import Component                     from '@glimmer/component';

export default class ItemList extends Component {
 get hasAnySubItemList() {
   return this.args.items.isAny('items');
 }
}