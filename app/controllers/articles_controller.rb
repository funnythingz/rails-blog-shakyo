class ArticlesController < ApplicationController

    before_action :set_article, only: [:show]

    def index
        @articles = Article.all
    end

    def new
        @article = Article.new
    end

    def create
        @article = Article.new(article_params)

        if @article.save
            redirect_to @article
        else
            render 'new'
        end
    end

    def show
    end

    private
        def article_params
            params.require(:article).permit(:title, :text)
        end

        def set_article
            @article = Article.find(params[:id])
        end

end
