import { action } from '@ember/object';
import Component  from '@glimmer/component';

export default class Application extends Component {
  items = [
    {
      title: 'Characters',
      items: [
        { title: 'Ganondorf', action: this.stealTriforce },
        { title: 'Link', action: this.saveHyrule },
        { title: 'Zelda', action: this.petEpona },
        {
          title: 'Navi',
          items: [
            { title: 'Annoy the gamer', action: this.sayHeyListen },
            { title: 'Help Link out', action: this.sayHeyListen },
            { title: 'Yell for attention', action: this.sayHeyListen }
          ]
        }
      ]
    },
    {
      title: 'Equipment',
      items: [
        { title: 'Master sword' },
        { title: 'Hyrule shield' },
        { title: 'Hero of Time tunic' }
      ]
    },
    {
      title: 'Collectables',
      items: [
        { title: 'Rupees' },
        { title: 'Heart containers' },
        { title: 'Bottles' }
      ]
    }
  ];

  @action
  sayHeyListen() {
    alert('Hey! Listen!');
  }
}
