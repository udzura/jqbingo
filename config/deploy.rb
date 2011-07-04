require 'bundler/capistrano'

set :application, "bingo"
set :repository,  "git://github.com/udzura/jqbingo.git"

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "udzura.jp"                          # Your HTTP server, Apache/etc
role :app, "udzura.jp"                          # This may be the same as your `Web` server

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

set :deploy_to, "/var/www/bingo"

set :ruby_bin_path, "/usr/bin"

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end
