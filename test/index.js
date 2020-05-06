import { assert } from 'chai';
import { JSDOM } from 'jsdom';
import { describe } from 'mocha';
import MinijQuery from '../src/index';

describe('test toggle class.', () => {
  it('should test toggle function', () => {
    const { document } = new JSDOM().window;
    const i = document.querySelector('body');
    const j = new MinijQuery(i);
    j.toggleClass('test');
    const expectedVal = 'test';
    assert(i.className === expectedVal, 'Default not awesome :(');
  });
});
