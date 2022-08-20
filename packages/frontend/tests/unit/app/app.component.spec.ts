import {AppComponent} from '../../../src/app/app.component';


test('adds 1 + 2 to equal 3', () => {
  const sum = new AppComponent();

  expect(sum.sum(1, 2)).toBe(3);
});
