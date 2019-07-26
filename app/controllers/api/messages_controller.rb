class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @nmesages = @group.messages.where(" id > ?", params[:id])
  end
end
