export interface Report {
  id: string;
  title: string;
  subtitle?: string;
  backgroundImageUrl: string;
  cta?: string;
  path?: string;
  tag?: string;
  theme?: string;
  datePublished: string;
  dateUpdated?: string;
}
