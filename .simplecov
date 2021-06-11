# frozen_string_literal: true

SimpleCov.start "rails" do
  enable_coverage :branch

  add_filter "/channels/" # not used

  groups.delete("Channels")
  groups.delete("Models")

  add_group "Models", ["app/models", "app/decorators"]
  add_group "Policies", ["app/policies"]

  add_group "Helpers" do |src_file|
    next false unless src_file.project_filename.include?("app/helpers")

    src_file.project_filename.exclude?("admin")
  end

  add_group "Admin", ["app/admin", "app/helpers/admin"]
end
