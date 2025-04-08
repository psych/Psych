export interface Doctor {
    id: number;
    name: string;
    image: string;
    specialization: string;
    experience: string;
    location: string;
    rating: number;
    homeVisit: boolean;
    onlineConsult: boolean;
    languages: string[];
    fee: number;
    nextAvailable: string;
    education: string[];
    about: string;
    clinicPhotos: string[];
    availability: {
      [key: string]: string[];
    };
  }