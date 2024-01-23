// ShoppingCart.ts

type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartType = {
  items: CartItemType[];
  totalPrice: number;
};

type ShippingPriceType = {
  id: string;
  price: number;
};

export let shoppingCartItems: CartItemType[] = [];

export function addShoppingItem(newItem: CartItemType): CartItemType[] {
  const cartItem = shoppingCartItems.find((item) => item.id === newItem.id);
  !cartItem
    ? shoppingCartItems.push(newItem)
    : (cartItem.quantity += newItem.quantity);

  return shoppingCartItems;
}

export function reduceShoppingItem(id: string): CartItemType[] {
  const cartItem = shoppingCartItems.find((item) => item.id === id);
  if (!cartItem) return shoppingCartItems;
  if (cartItem.quantity === 1) removeShoppingItem(id);
  cartItem.quantity -= 1;

  return shoppingCartItems;
}

export function removeShoppingItem(id: string): CartItemType[] {
  shoppingCartItems = shoppingCartItems.filter((item) => item.id !== id);

  return shoppingCartItems;
}

export function clearShoppingCart(): CartItemType[] {
  shoppingCartItems = [];

  return shoppingCartItems;
}

export function getShoppingCart(): ShoppingCartType {
  // TODO: Userによって、配送料（固定値）のshippingPriceを変える
  const totalPrice = shoppingCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return { items: shoppingCartItems, totalPrice };
}
