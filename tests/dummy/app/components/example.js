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
        { title: 'Hero of Time tunic', disabled: true }
      ]
    },
    {
      title: 'Collectables',
      items: [
        {
          title: 'Rupees',
          items: [
            { title: 'green', disabled: true },
            { title: 'blue', disabled: true },
            { title: 'red', disabled: true }
          ]
        },
        { title: 'Heart containers' },
        {
          title:    'Bottles',
          disabled: true,
          items:    [
            { title: 'Fairy' },
            { title: 'Red potion' },
            { title: 'Green potion' }
          ]
        }
      ]
    }
  ];

  @action
  sayHeyListen() {
    alert('Hey! Listen!');
  }
}
