export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
  link: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      link: string;
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

class WordPressService {
  private baseUrl = 'https://casestudies.boldtribe.in/wp-json/wp/v2';
  private siteUrl = 'https://casestudies.boldtribe.in';

  async getPosts(page: number = 1, perPage: number = 10): Promise<WordPressPost[]> {
    try {
      console.log('Fetching WordPress posts from:', `${this.baseUrl}/posts?page=${page}&per_page=${perPage}&_embed=1`);
      
      const response = await fetch(
        `${this.baseUrl}/posts?page=${page}&per_page=${perPage}&_embed=1`
      );
      
      console.log('WordPress API response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts: WordPressPost[] = await response.json();
      console.log('WordPress posts fetched:', posts.length);
      console.log('First post structure:', JSON.stringify(posts[0], null, 2));
      return posts;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return [];
    }
  }

  async getCategories(): Promise<WordPressCategory[]> {
    try {
      const response = await fetch(`${this.baseUrl}/categories`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const categories: WordPressCategory[] = await response.json();
      return categories;
    } catch (error) {
      console.error('Error fetching WordPress categories:', error);
      return [];
    }
  }

  async getTags(): Promise<WordPressTag[]> {
    try {
      const response = await fetch(`${this.baseUrl}/tags`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const tags: WordPressTag[] = await response.json();
      return tags;
    } catch (error) {
      console.error('Error fetching WordPress tags:', error);
      return [];
    }
  }

  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/posts?slug=${slug}&_embed=1`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts: WordPressPost[] = await response.json();
      return posts.length > 0 ? posts[0] : null;
    } catch (error) {
      console.error('Error fetching WordPress post by slug:', error);
      return null;
    }
  }

  getFeaturedImageUrl(post: WordPressPost): string {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    // Fallback image
    return 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600';
  }

  getAuthorName(post: WordPressPost): string {
    if (post._embedded?.author?.[0]?.name) {
      return post._embedded.author[0].name;
    }
    return 'BoldTribe Team';
  }

  getPostCategories(post: WordPressPost): string[] {
    try {
      if (post._embedded?.['wp:term']) {
        return post._embedded['wp:term']
          .flat()
          .filter(term => term.taxonomy === 'category')
          .map(term => term.name);
      }
    } catch (error) {
      console.error('Error getting categories:', error);
    }
    return ['Uncategorized'];
  }

  getPostTags(post: WordPressPost): string[] {
    try {
      if (post._embedded?.['wp:term']) {
        return post._embedded['wp:term']
          .flat()
          .filter(term => term.taxonomy === 'post_tag')
          .map(term => term.name);
      }
    } catch (error) {
      console.error('Error getting tags:', error);
    }
    return ['WordPress'];
  }

  stripHtml(html: string): string {
    if (typeof document !== 'undefined') {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    } else {
      // Fallback for server-side rendering
      return html.replace(/<[^>]*>/g, '');
    }
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

export const wordpressService = new WordPressService(); 