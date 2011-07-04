require 'rubygems'

ENV['GEM_PATH'] = [
  File.expand_path("/../../shared/bundle/ruby/1.9.1", __FILE__),
  File.expand_path("/../../../shared/bundle/ruby/1.9.1", __FILE__),
  ENV['GEM_PATH']
].join(":")
Gem.clear_paths

require 'bundler/setup'
Bundler.require

require File.expand_path('../sah2011', __FILE__)

run Sah2011
