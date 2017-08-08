class HomeController < ApplicationController
  def index
  	@posts = Post.all
  end

    def portfolio
  	@posts = Post.all
  end

end
