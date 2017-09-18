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

  # def cat_one
  #   @posts = Post.where(category_id: 1)
  #   @category = Category.find(1)
  # end

  def admin

  end

end
