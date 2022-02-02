import { newSpecPage } from '@stencil/core/testing';
import { UiRadioButton } from './ui-radio-button';

describe('ui-radio-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UiRadioButton],
      html: '<ui-radio-button></ui-radio-button>',
    });
    expect(root).toEqualHtml(`
      <ui-radio-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-radio-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [UiRadioButton],
      html: `<ui-radio-button first="Stencil" last="'Don't call me a framework' JS"></ui-radio-button>`,
    });
    expect(root).toEqualHtml(`
      <ui-radio-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-radio-button>
    `);
  });
});
