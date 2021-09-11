export interface PostModel {
  title: string;
  subtitle?: string;
  synopsis: string;
  tags: string[];
  seasons: SeasonModel[];
  poster: string;
  cover: string;
}

export interface SeasonModel {
  year: number;
  title: string;
  episodes: string[] | number;
  episodesWatched?: number[] | number;
}
