require 'json'

namespace :load do
    desc "load xls to DB"
    task xls: :environment do

        filepath = 'python/cours.json'
        serialized_cours = File.read(filepath)
        cours = JSON.parse(serialized_cours)

        cours.each do |key, value|
            value["cours"].each do |school|
                $password = SecureRandom.base64(5)
                if school["email"] != ""
                    User.create!(
                        email: school["email"],
                        password: $password
                        )
                    AutoUser.create!(
                        email: school["email"],
                        auto_str: $password,
                    )
                    School.create!(
                        name: school["name"],
                        published: false,
                        description: school["blog_text"],
                        email: school["email"],
                        website: school["website"],
                        user: User.last,
                        city: key,
                        imparato_blog_link: school["blog_url"]
                    )
                    school["addresses"].each do |address|
                        Address.create!(
                            published: false,
                            school: School.last,
                            address: address["address"],
                            city: address["city"],
                            zipcode: address["zipcode"],
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
