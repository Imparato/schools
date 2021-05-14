require 'json'
require 'pry-byebug'

namespace :load do
    desc "load xls to DB"
    task xls: :environment do


        Network.delete_all
        AutoUser.delete_all
        Teaching.delete_all
        Teacher.delete_all
        Property.delete_all
        Course.delete_all
        Address.delete_all
        School.delete_all
        User.delete_all

        filepath = 'python/cours.json'
        serialized_cours = File.read(filepath)
        cours = JSON.parse(serialized_cours)
        cours.each do |key, value|
            progression_index = 1
            value["cours"].each do |school|
                # display progression
                puts "#{key} - #{school["name"]} - #{progression_index}/#{value["cours"].size}"
                progression_index += 1

                $password = SecureRandom.base64(5)
                if school["email"] != ""
                    User.create!(
                        email: school["email"]&.strip,
                        password: $password
                        )
                    AutoUser.create!(
                        email: school["email"]&.strip,
                        auto_str: $password,
                    )
                    School.create!(
                        name: school["name"]&.strip,
                        published: false,
                        blog_default: school["blog_text"],
                        blog_default_days: school["days"],
                        blog_order: school["order"],
                        email: school["email"]&.strip,
                        website: school["website"]&.strip,
                        user: User.last,
                        city: key&.strip,
                        imparato_blog_link: school["blog_url"]
                    )
                    binding.pry if school["addresses"] == "79 boulevard Voltaire"
                    school["addresses"].each do |address|
                        Address.create!(
                            published: false,
                            school: School.last,
                            address: address["address"]&.strip,
                            city: address["city"]&.strip,
                            zipcode: address["zipcode"]&.strip,
                            phone: ""
                        )
                    end
                    school["network"].each do |network|
                        Network.create!(
                            school: School.last,
                            url: network["network"]
                        )
                    end
                end
            end
        end
    end
end

# question sur les User et les Provider
