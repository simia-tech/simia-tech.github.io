
###
# Page options, layouts, aliases and proxies
###

#%w{about team projects contact imprint}.each do |id|
#  proxy "/#{id}.html", 'index.html'
#end
#model = YAML::load_file File.expand_path(File.dirname(__FILE__) + '/model.yml')
#model['tags'].each do |id, name|
#  proxy "/tags/#{id}.html", 'index.html'
#end

proxy '404.html', 'index.html'

###
# Helpers
###

activate :livereload
# activate :directory_indexes

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
