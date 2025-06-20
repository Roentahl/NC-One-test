import { createGlobalState } from "react-hooks-global-state";

interface IProduct {
  id: number;
  name: string;
  price: number;
  src: string;
  isFavorite: boolean;
}

interface IGlobalState {
  productList: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState<IGlobalState>({
  productList: [],
  isLoading: false,
  error: null,
});

export const actions = {
  getProducts: async () => {
    setGlobalState('isLoading', true);
    setGlobalState('error', null);

    try {
      const response = await fetch('https://testbackend.nc-one.com/image');
      const data = await response.json();

      const products = data.map((product: Omit<IProduct, 'isFavorite'>) => ({
        ...product,
        isFavorite: false,
      }));

      setGlobalState('productList', products);
    } catch (error) {
      setGlobalState('error', error instanceof Error ? error.message : 'Не удалось загрузить список товаров');
    } finally {
      setGlobalState('isLoading', false);
    }
  },

  getProductById: async (id: number) => {
    setGlobalState('isLoading', true);
    setGlobalState('error', null);

    try {
      const response = await fetch(`https://testbackend.nc-one.com/image?id=${id}`);
      const data = await response.json();

      const product = {
        ...data,
        isFavorite: false
      }

      setGlobalState('productList', [product]);
    } catch (error) {
      setGlobalState('error', error instanceof Error ? error.message : 'Не удалось загрузить товар');
    } finally {
      setGlobalState('isLoading', false);
    }
  },

  toggleFavorite: (id: number) => {
    const products = getGlobalState('productList');
    setGlobalState('productList', products.map((product: IProduct) => product.id === id ? { ...product, isFavorite: !product.isFavorite } : product));
  }

};

export const useProducts = () => useGlobalState('productList')[0];
export const useFavoriteProducts = () => useGlobalState('productList')[0].filter(p => p.isFavorite);
export const useProduct = (id: number) => useGlobalState('productList')[0].find(p => p.id === id);
export const useProductsLoading = () => useGlobalState('isLoading')[0];
export const useProductsError = () => useGlobalState('error')[0];