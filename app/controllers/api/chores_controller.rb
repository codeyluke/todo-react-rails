class Api::ChoresController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def index
      @chores = Chore.all
      render json: @chores
    end
  
    def show
      @chore = Chore.find(params[:id])
      render json: @chore
    end
  
    def create
      @chore = Chore.new(chore_params)
      if @chore.save
        render json: @chore, status: :created
      else
        render json: @chore.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @chore = Chore.find(params[:id])
      if @chore.update(chore_params)
        render json: @chore, status: :ok
      else
        render json: @chore.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @chore = Chore.find(params[:id])
      @chore.destroy
      head :no_content
    end
    
    private
      def chore_params
        params.require(:chore).permit(:content)
    end
end