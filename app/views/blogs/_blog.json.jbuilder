json.extract! blog, :id, :title, :article, :created_at, :updated_at
json.url blog_url(blog, format: :json)
