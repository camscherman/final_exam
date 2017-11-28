class ApplicationController < ActionController::API
  def current_user
     token_type, token = request.headers['AUTHORIZATION']&.split(" ") || []


      begin
        payload = JWT.decode(token, Rails.application.secrets.secret_key_base)&.first

        @user ||= User.find_by(id: payload["id"])
      rescue JWT::DecodeError => error
         nil
      end

   end

    private

    def authenticate_api_user
      
     head :unauthorized unless current_user
    end
end
