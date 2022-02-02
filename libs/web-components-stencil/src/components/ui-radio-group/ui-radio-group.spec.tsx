import { newSpecPage } from '@stencil/core/testing';
import { UiRadioGroup } from './ui-radio-group';

describe('ui-radio-group', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UiRadioGroup],
      html: '<ui-radio-group></ui-radio-group>',
    });
    expect(root).toEqualHtml(`
      <ui-radio-group>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-radio-group>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [UiRadioGroup],
      html: `<ui-radio-group first="Stencil" last="'Don't call me a framework' JS"></ui-radio-group>`,
    });
    expect(root).toEqualHtml(`
      <ui-radio-group first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-radio-group>
    `);
  });
});
