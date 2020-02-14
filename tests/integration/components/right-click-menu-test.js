import { render, clearRender, click, triggerEvent }  from '@ember/test-helpers';
import { hbs }                                       from 'ember-cli-htmlbars';
import { setupRenderingTest }                        from 'ember-qunit';
import { module, test }                              from 'qunit';

module('Integration | Component | right-click-menu', function(hooks) {
  setupRenderingTest(hooks);

  test('Can hover through menus and click on an action', async function(assert) {
    assert.expect(3);

    this.triggerAction = () => {
      assert.ok(true, 'Action was triggerd');
    };

    this.set('items', [
      {
        title: 'Characters',
        items: [
          { title: 'Ganondorf' },
          { title: 'Link' },
          { title: 'Zelda' },
          {
            title: 'Navi',
            items: [
              { title: 'Annoy the gamer' },
              { title: 'Help Link out' },
              { title: 'Yell for attention', action: this.triggerAction }
            ]
          }
        ]
      }
    ]);

    await render(hbs`
      <div id="root-element">
        <RightClickMenu @items={{this.items}} />
      </div>
    `);

    await triggerEvent('#root-element', 'contextmenu');
    let [ul]       = document.querySelectorAll('ul[data-show]');
    let [listItem] = ul.querySelectorAll('.ember-right-click-menu__item');

    await triggerEvent(listItem, 'mouseover');
    ul       = document.querySelectorAll('ul[data-show]')[1];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[3];

    await triggerEvent(listItem, 'mouseover');
    ul       = document.querySelectorAll('ul[data-show]')[2];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[2];

    assert.equal(document.querySelectorAll('ul[data-show]').length, 3);

    await click(listItem);

    assert.equal(document.querySelectorAll('ul[data-show]').length, 0);

    await clearRender();
  });

  test('Closes menu after clicking outside the context menu', async function(assert) {
    assert.expect(3);

    this.set('items', [
      {
        title: 'Characters',
        items: [
          { title: 'Ganondorf' },
          { title: 'Link' },
          { title: 'Zelda' },
          {
            title: 'Navi',
            items: [
              { title: 'Annoy the gamer' },
              { title: 'Help Link out' },
              { title: 'Yell for attention', action: this.triggerAction }
            ]
          }
        ]
      }
    ]);

    await render(hbs`
      <div id="root-element">
        <RightClickMenu @items={{this.items}} />
      </div>
    `);

    await triggerEvent('#root-element', 'contextmenu');
    let [ul]       = document.querySelectorAll('ul[data-show]');
    let [listItem] = ul.querySelectorAll('.ember-right-click-menu__item');

    await triggerEvent(listItem, 'mouseover');
    ul       = document.querySelectorAll('ul[data-show]')[1];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[3];

    await triggerEvent(listItem, 'mouseover');
    ul       = document.querySelectorAll('ul[data-show]')[2];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[2];

    assert.equal(document.querySelectorAll('ul[data-show]').length, 3);

    await click(window);

    assert.equal(document.querySelectorAll('ul[data-show]').length, 0);

    await triggerEvent('#root-element', 'contextmenu');

    assert.equal(document.querySelectorAll('ul[data-show]').length, 1);

    await clearRender();
  });
});
