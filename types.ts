// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Categories
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    full_description?: string;
    route?: string;
    vehicle_type?: string;
    starting_price?: string | number;
    available_24x7?: boolean;
    service_image?: CosmicImage;
  };
}

// Blog Posts
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    headline?: string;
    meta_description?: string;
    focus_keyword?: string;
    content?: string;
    featured_image?: CosmicImage;
    author_name?: string;
    category?: Category;
    published_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}