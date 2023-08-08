export type Episode = {
    Title: string;
    Released: string;
    Episode: string;
    imdbRating: string;
    imdbID: string;
  };
  
  // Defining types for the entire season object
  export type SeasonResponse = {
    Title: string;
    Season: string;
    totalSeasons: string;
    Episodes: Episode[];
    Response: 'True';
  };