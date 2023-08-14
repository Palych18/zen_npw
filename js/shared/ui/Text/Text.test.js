import { Text } from './Text.js';

describe('Text:', () => {
  it('Unit test 1', () => {
    const htmlString = Text('', '');
    const isString = typeof htmlString === 'string';
    expect(isString).toEqual(true);
  })

  it('Unit test 2', () => {
    const expectedHtmlString = '<p class="text__copy">Test text</p>';
    const resultHtmlString = Text('Test text', 'text').trim();
    expect(resultHtmlString).toEqual(expectedHtmlString);
  }); 
});
