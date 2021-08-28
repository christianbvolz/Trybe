let { getDogPicture } = require('./dogPictures');

describe('exercicio 6', () => {
  getDogPicture = jest.fn();
  test('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".', async () => {
    expect.assertions(4);
    getDogPicture.mockResolvedValue('request sucess');
    expect(getDogPicture).toHaveBeenCalledTimes(0);
    await expect(getDogPicture()).resolves.toBe('request sucess');
    expect(getDogPicture).toHaveBeenCalledTimes(1);
    expect(getDogPicture).toHaveBeenCalledWith();
    getDogPicture.mockReset();
  });

  test('O segundo deve interpretar que a requisição falhou e ter como valor "request failed".', async () => {
    expect.assertions(4);
    getDogPicture.mockRejectedValue('request failed');
    expect(getDogPicture).toHaveBeenCalledTimes(0);
    await expect(getDogPicture()).rejects.toBe('request failed');
    expect(getDogPicture).toHaveBeenCalledTimes(1);
    expect(getDogPicture).toHaveBeenCalledWith();
  });
});