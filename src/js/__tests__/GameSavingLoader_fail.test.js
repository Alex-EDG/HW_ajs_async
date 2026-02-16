import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader.js');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Проверка работы GameSavingLoader - fail', async() => {
  try {
    read.mockReturnValue('');
    await GameSavingLoader.load();
  } catch {
    expect(await GameSavingLoader.load()).toThrow();
  };
});
