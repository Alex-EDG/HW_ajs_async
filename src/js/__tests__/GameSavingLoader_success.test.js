import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

const obj = new GameSaving(9, 1546300800, { id: 1, name: 'Hitman', level: 10, points: 2000 });
test('Проверка работы GameSavingLoader - success', async() => {

  expect(await GameSavingLoader.load()).toEqual(obj);
});
