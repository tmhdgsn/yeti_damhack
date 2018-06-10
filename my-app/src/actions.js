export const SELECT_SHOP_1 = 'SELECT_SHOP_1'
export const SELECT_SHOP_2 = 'SELECT_SHOP_2'
export const SELECT_SHOP_3 = 'SELECT_SHOP_3'
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

export function selectShop1(adidasSelected) {
  return { type: SELECT_SHOP_1, adidasSelected }
}

export function selectShop2(asosSelected) {
  return { type: SELECT_SHOP_2, asosSelected }
}

export function selectShop3(zaraSelected) {
  return { type: SELECT_SHOP_3, zaraSelected }
}

export function uploadPhoto(photo) {
  return { type: UPLOAD_PHOTO, photo }
}
