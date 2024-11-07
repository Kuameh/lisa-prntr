export interface PrintConfig {
  pageSize?: string;
  margin?: string;
  bodyMargin?: number | string;
  bodyPadding?: number | string;
  selector?: string;
  fontSize?: string;
  hideSelectors?: string[];
  additionalStyles?: Record<string, Record<string, string>>;
}

export interface StyleRules {
  [key: string]: Record<string, string>;
}
