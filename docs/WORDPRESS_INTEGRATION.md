# WordPress Integration for Case Studies Page

## Overview

The Case Studies page now integrates with the WordPress blog at `https://casestudies.boldtribe.in/` to display real-time blog posts and case studies.

## Features

### ✅ Implemented Features

1. **Real-time WordPress Content Fetching**
   - Fetches posts from WordPress REST API
   - Displays featured images, titles, excerpts, and metadata
   - Handles categories and tags from WordPress

2. **Direct Links to WordPress**
   - Each blog post title links to the full WordPress article
   - "Read More" button opens the WordPress post in a new tab
   - Clear indication that content comes from WordPress

3. **Error Handling**
   - Graceful fallback if WordPress is unavailable
   - Loading states during content fetching
   - Empty state when no posts are found

4. **Search and Filtering**
   - Search through WordPress post titles and excerpts
   - Filter by WordPress categories
   - Clear filters functionality

5. **Responsive Design**
   - Mobile-friendly blog post cards
   - Consistent styling with the rest of the site
   - Dark mode support

## Technical Implementation

### WordPress Service (`src/services/wordpressService.ts`)

- **Base URL**: `https://casestudies.boldtribe.in/wp-json/wp/v2`
- **Endpoints Used**:
  - `/posts` - Fetch blog posts with embedded data
  - `/categories` - Get available categories
  - `/tags` - Get available tags

### Key Functions

```typescript
// Fetch posts with embedded data (author, featured image, categories, tags)
wordpressService.getPosts(page, perPage)

// Get featured image URL from WordPress post
wordpressService.getFeaturedImageUrl(post)

// Extract author name from embedded data
wordpressService.getAuthorName(post)

// Get categories and tags from embedded data
wordpressService.getCategories(post)
wordpressService.getTags(post)
```

### Data Flow

1. **Fetch**: WordPress posts are fetched on component mount
2. **Transform**: Raw WordPress data is converted to BlogPost format
3. **Display**: Posts are rendered in a responsive grid
4. **Link**: Each post links to the original WordPress article

## WordPress Requirements

For this integration to work properly, your WordPress site should have:

1. **REST API Enabled** (default in WordPress)
2. **Featured Images** set for posts
3. **Categories and Tags** assigned to posts
4. **CORS Headers** configured to allow requests from your domain

## Customization

### Adding More WordPress Data

To display additional WordPress data, modify the `BlogPost` interface and the conversion logic in `CaseStudiesPage.tsx`:

```typescript
interface BlogPost {
  // ... existing fields
  wordpress_id: number;
  wordpress_link: string;
  // Add more fields as needed
}
```

### Styling

The blog posts use the existing design system with:
- Red accent colors (`text-red-600`, `bg-red-500`)
- Dark mode support
- Hover effects and transitions
- Responsive grid layout

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure WordPress allows requests from your domain
2. **No Posts Displayed**: Check if WordPress posts exist and are published
3. **Missing Images**: Verify featured images are set in WordPress
4. **API Errors**: Check WordPress REST API is accessible

### Debug Mode

Add console logging to debug WordPress integration:

```typescript
// In wordpressService.ts
console.log('WordPress API Response:', posts);
```

## Future Enhancements

- [ ] Pagination for WordPress posts
- [ ] Real-time updates when new posts are published
- [ ] WordPress post preview modal
- [ ] Social sharing integration
- [ ] WordPress comments integration
- [ ] Advanced filtering by tags and categories 