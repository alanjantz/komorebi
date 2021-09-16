import config from '../../data/config';

export const getBaseUrl = (): string =>
  process.env.NODE_ENV === 'production' ? `${config.pathPrefix}` : '';

export const removeUrlSlashes = (slug: string): string =>
  slug.replaceAll('/', '');
