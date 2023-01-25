import { render, clearRender, click, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | right-click-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('Can hover through menus and click on an action', async function (assert) {
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
              { title: 'Yell for attention', action: this.triggerAction },
            ],
          },
        ],
      },
    ]);

    await render(hbs`
      <div id="root-element">
        <RightClickMenu @items={{this.items}} />
      </div>
    `);

    await triggerEvent('#root-element', 'contextmenu');
    let [ul] = document.querySelectorAll('ul[data-show]');
    let [listItem] = ul.querySelectorAll('.ember-right-click-menu__item');

    await triggerEvent(listItem, 'mouseover');
    ul = document.querySelectorAll('ul[data-show]')[1];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[3];

    await triggerEvent(listItem, 'mouseover');
    ul = document.querySelectorAll('ul[data-show]')[2];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[2];

    assert.strictEqual(document.querySelectorAll('ul[data-show]').length, 3);

    await click(listItem);

    assert.strictEqual(document.querySelectorAll('ul[data-show]').length, 0);

    await clearRender();
  });

  test('Clicking on a disabled item does not trigger the action', async function (assert) {
    assert.expect(1);

    this.triggerAction = () => {
      assert.notOk(true, 'Action was triggerd');
    };

    this.set('items', [
      {
        title: 'Characters',
        items: [
          { title: 'Ganondorf', action: this.triggerAction },
          { title: 'Link', action: this.triggerAction },
          { title: 'Zelda', action: this.triggerAction, disabled: true },
        ],
      },
    ]);

    await render(hbs`
      <div id="root-element">
        <RightClickMenu @items={{this.items}} />
      </div>
    `);

    await triggerEvent('#root-element', 'contextmenu');
    let [ul] = document.querySelectorAll('ul[data-show]');
    let [listItem] = ul.querySelectorAll('.ember-right-click-menu__item');

    await triggerEvent(listItem, 'mouseover');
    ul = document.querySelectorAll('ul[data-show]')[1];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[2];

    assert.strictEqual(listItem.textContent.trim(), 'Zelda');

    await click(listItem);
    await clearRender();
  });

  test('Hover over a disabled item does not open sub menu', async function (assert) {
    assert.expect(2);

    this.set('items', [
      {
        title: 'Characters',
        items: [{ title: 'Ganondorf' }, { title: 'Link' }, { title: 'Zelda' }],
        disabled: true,
      },
    ]);

    await render(hbs`
      <div id="root-element">
        <RightClickMenu @items={{this.items}} />
      </div>
    `);

    await triggerEvent('#root-element', 'contextmenu');
    let [ul] = document.querySelectorAll('ul[data-show]');
    let [listItem] = ul.querySelectorAll('.ember-right-click-menu__item');

    ul = document.querySelectorAll('ul[data-show]');
    assert.strictEqual(ul.length, 1);

    await triggerEvent(listItem, 'mouseover');
    ul = document.querySelectorAll('ul[data-show]');
    [listItem] = ul[0].querySelectorAll('.ember-right-click-menu__item');

    assert.strictEqual(ul.length, 1);

    await clearRender();
  });

  test('Closes menu after clicking outside the context menu', async function (assert) {
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
              { title: 'Yell for attention', action: this.triggerAction },
            ],
          },
        ],
      },
    ]);

    await render(hbs`
      <div id="root-element">
        <RightClickMenu @items={{this.items}} />
      </div>
    `);

    await triggerEvent('#root-element', 'contextmenu');
    let [ul] = document.querySelectorAll('ul[data-show]');
    let [listItem] = ul.querySelectorAll('.ember-right-click-menu__item');

    await triggerEvent(listItem, 'mouseover');
    ul = document.querySelectorAll('ul[data-show]')[1];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[3];

    await triggerEvent(listItem, 'mouseover');
    ul = document.querySelectorAll('ul[data-show]')[2];
    listItem = ul.querySelectorAll('.ember-right-click-menu__item')[2];

    assert.strictEqual(document.querySelectorAll('ul[data-show]').length, 3);

    await click(window);

    assert.strictEqual(document.querySelectorAll('ul[data-show]').length, 0);

    await triggerEvent('#root-element', 'contextmenu');

    assert.strictEqual(document.querySelectorAll('ul[data-show]').length, 1);

    await clearRender();
  });
});
