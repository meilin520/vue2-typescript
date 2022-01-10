import { Goods } from '../interface/goods';

export const deepCopy = (p: any, c: any = {}): any => {
  for (const i in p) {
    if (p.hasOwnProperty(i)) {
      if (typeof p[i] === 'object') {
        c[i] = Array.isArray(p[i]) ? [] : {};
        deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
  }
  return c;
};

export const multipleDeleteByKey = <T extends Goods>(source: T[], keys: Array<number | string>, key: string): T[] => {
  const result = deepCopy(source, []);
  keys.forEach((item) => {
    const index = result.findIndex((obj: any) => obj[key] === item);
    result.splice(index, 1);
  });
  return result;
};
