class Sah2011 < Sinatra::Base
  set :public, File.expand_path('../public', __FILE__)
  set :views,  File.expand_path('../public', __FILE__)

  get '/' do
    haml :index
  end

  get '/:name.html' do
    haml params[:name].to_sym
  end

  get '/:name.css' do
    scss params[:name].to_sym
  end
end
