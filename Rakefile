
TARGET_PATH = File.expand_path(File.dirname(__FILE__) + '/target')
GIT_REMOTE = "ssh://git@github.com/simia-tech/simia-tech.github.io"

desc 'Deploys the website'
task :deploy do
  if File.exists?("#{TARGET_PATH}/.git")
    system "cd #{TARGET_PATH} && git pull"
  else
    system "git clone #{GIT_REMOTE} #{TARGET_PATH}"
  end
  system "cd #{TARGET_PATH} && git checkout master"

  system "jekyll build --destination #{TARGET_PATH}"

  system "cd #{TARGET_PATH} && git add ."
  system "cd #{TARGET_PATH} && git commit -am'site deployment at #{Time.now}'"
  system "cd #{TARGET_PATH} && git push origin master"
end
