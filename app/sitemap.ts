import { services } from "../data/services";

export default function sitemap() {
  const servicePages = services.map((service) => ({
    url: `https://zemwin.com.ua/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://zemwin.com.ua",
      lastModified: new Date(),
    },

    ...servicePages,
  ];
}
