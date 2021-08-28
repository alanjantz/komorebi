export interface PostModel {
  title: string;
  subtitle?: string;
  synopsis: string;
  tags: string[];
  seasons: SeasonModel[];
}

export interface SeasonModel {
  year: number;
  title: string;
  episodes: string[] | number;
}
