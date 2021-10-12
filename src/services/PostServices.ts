export const getCompletePostPath = (baseUrl: string, postUrl: string): string =>
  (baseUrl ? `/${baseUrl}` : '') + postUrl;
