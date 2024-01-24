import {
  addShoppingItem,
  clearShoppingCart,
  getShoppingCart,
  reduceShoppingItem,
  removeShoppingItem,
} from './shipping';

describe('ショッピングカートサービス', () => {
  beforeEach(() => {
    clearShoppingCart();
  });

  test('ショッピングカートに新しい商品を追加できる', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 1,
    };
    const expected = addShoppingItem(newItem);
    expect(expected.length).toEqual(1);
    expect(expected).toContainEqual(newItem);
  });

  test('ショッピングカートに既存の商品を追加すると、itemの数は変わらず、quantityが+1される', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 1,
    };
    const otherItem = {
      id: '2',
      name: 'テスト商品2',
      price: 2000,
      quantity: 1,
    };
    addShoppingItem(newItem);
    addShoppingItem(otherItem);
    const expected = addShoppingItem(newItem);
    expect(expected.find((item) => item.id === newItem.id)?.quantity).toEqual(
      2
    );
    expect(expected.length).toEqual(2);
  });

  test('ショッピングカートから対象のidに該当するItemがある場合、1減らす', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 2,
    };
    addShoppingItem(newItem);
    const expected = reduceShoppingItem(newItem.id);

    expect(expected.find((item) => item.id === newItem.id)?.quantity).toEqual(
      1
    );
  });

  test('ショッピングカートから対象のidに該当するItemがない場合、現状のカートを返す', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 2,
    };
    addShoppingItem(newItem);
    const expected = reduceShoppingItem('9999');

    expect(expected).toEqual([newItem]);
    expect(expected.find((item) => item.id === '1')?.quantity).toEqual(2);
  });

  test('ショッピングカートから対象のidに該当するItemを削除する', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 2,
    };
    const otherItem = {
      id: '2',
      name: 'テスト商品2',
      price: 2000,
      quantity: 3,
    };
    addShoppingItem(newItem);
    addShoppingItem(otherItem);
    const expected = removeShoppingItem('1');

    expect(expected.length).toEqual(1);
    expect(expected).not.toContainEqual(newItem);
    expect(expected).toContainEqual(otherItem);
  });

  test('ショッピングカートから対象のidに該当するItemがない場合、何もせずカートを返す', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 2,
    };
    const otherItem = {
      id: '2',
      name: 'テスト商品2',
      price: 2000,
      quantity: 3,
    };
    addShoppingItem(newItem);
    addShoppingItem(otherItem);
    const expected = removeShoppingItem('9999');

    expect(expected.length).toEqual(2);
    expect(expected).toContainEqual(newItem);
    expect(expected).toContainEqual(otherItem);
  });

  test('ショッピングカートを空にする', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 2,
    };
    const otherItem = {
      id: '2',
      name: 'テスト商品2',
      price: 2000,
      quantity: 3,
    };
    addShoppingItem(newItem);
    addShoppingItem(otherItem);
    const expected = clearShoppingCart();

    expect(expected.length).toEqual(0);
  });

  test('ショッピングカートの合計金額を計算する', () => {
    const newItem = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
      quantity: 2,
    };
    const otherItem = {
      id: '2',
      name: 'テスト商品2',
      price: 2000,
      quantity: 3,
    };
    addShoppingItem(newItem);
    addShoppingItem(otherItem);
    const { items, totalPrice } = getShoppingCart();

    expect(items.length).toEqual(2);
    expect(totalPrice).toEqual(8000); // 1000 * 2 + 2000 * 3
  });
});
