require 'fileutils'

TEMPORARY_PATH = File.expand_path(File.dirname(__FILE__) + '/tmp')
GIT_REMOTE = "ssh://git@github.com/simia-tech/simia-tech.github.io"

desc 'Deploys the website'
task :deploy do
  if File.exists?("#{TEMPORARY_PATH}/.git")
    system "cd #{TEMPORARY_PATH} && git pull"
  else
    system "git clone #{GIT_REMOTE} #{TEMPORARY_PATH}"
  end
  system "cd #{TEMPORARY_PATH} && git checkout master"

  system "jekyll build --destination #{TEMPORARY_PATH}"

  system "cd #{TEMPORARY_PATH} && git add ."
  system "cd #{TEMPORARY_PATH} && git commit -am'site deployment at #{Time.now}'"
  system "cd #{TEMPORARY_PATH} && git push origin master"

  FileUtils.rm_rf TEMPORARY_PATH
end
