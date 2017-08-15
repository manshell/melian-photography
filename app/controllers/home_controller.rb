class HomeController < ApplicationController
  def index
  	@posts = Post.all
  end

    def portfolio
  	@posts = Post.all
  end

  def portfolio_by_category

  	@posts = Post.where(category_id: params[:cat_id])
  	@category = Category.find(params[:cat_id])
  end

  def admin

  end

end
