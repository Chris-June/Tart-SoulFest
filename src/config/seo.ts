interface SeoConfig {
  siteName: string;
  siteUrl: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  defaultKeywords: string[];
}

export const seoConfig: SeoConfig = {
  siteName: 'Tart & Soul Festival',
  siteUrl: 'https://tartandsoulfest.ca',
  defaultDescription: 'Celebrating the best butter tarts in Ontario! Join us for a day of delicious treats, baking competitions, and family fun.',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@tartandsoulfest',
  defaultKeywords: [
    'butter tart festival',
    'Tart & Soul Festival',
    'baking competition',
    'Canadian desserts',
    'food festival',
    'baking festival',
    'butter tarts',
    'Ontario events',
    'foodie event',
    'dessert festival',
    'local vendors',
    'family fun',
    'community event',
  ],
};

export const getPageSeo = (pageTitle: string, description?: string, customKeywords: string[] = []) => {
  return {
    title: pageTitle,
    description: description || seoConfig.defaultDescription,
    keywords: [...seoConfig.defaultKeywords, ...customKeywords],
  };
};
