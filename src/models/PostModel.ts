export interface PostModel {
  title: string;
  subtitle?: string;
  synopsis: string;
  tags: TagModel[];
  seasons: SeasonModel[];
}

export interface TagModel {
  id: number;
  name: string;
}

export interface SeasonModel {
  year: number;
  title: string;
  episodes: EpisodeModel[];
}

export interface EpisodeModel {
  order: number;
  title: string;
  watched: boolean;
}
