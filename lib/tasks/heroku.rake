# frozen_string_literal: true

namespace :heroku do
  desc "prepare heroku staging"
  task bootstrap: :environment do
    fail "Invalid environment error" unless ENV.fetch("APP_REAL_ENV") == "staging"

    Rake::Task["db:seed"].invoke
  end
end
