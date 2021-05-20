require 'json'
require 'rest-client'
require 'base64'

namespace :load do
  desc "load xls to DB"
  task xls: :environment do
    puts "DANGER ZONE - Database will be TOTALLY erased"
    sleep(1)

    puts "You have 5 secs to stop the task before start ..."
    (1..5).each do |timer|
      puts "#{timer} #{'!' * timer}"
      sleep(1)
    end

    # db cleaning before insert
    puts "cleaning Database ..."
    Network.delete_all
    AutoUser.delete_all
    Teaching.delete_all
    Teacher.delete_all
    Property.delete_all
    Course.delete_all
    Address.delete_all
    School.delete_all
    User.delete_all
    MainCity.delete_all
    AutoUser.delete_all

    puts "Importing ..."
    # access file secured
    # filepath = 'python/cours.json'
    # serialized_cours = File.read(filepath)
    url = "https://api.github.com/repos/fractalatcarf/blog_articles/contents/json/cours.json"
    json = RestClient.get url, {:Authorization => "token #{ENV['COURS_JSON_AUTH_TOKEN']}"}
    serialized_cours = Base64.decode64(JSON.parse(json.body)["content"]).force_encoding('UTF-8')
    cours = JSON.parse(serialized_cours)
    cours.each do |key, value|
      # MainCity
      main_city = MainCity.create!(
        city: key&.strip,
        country_code: "fr",
        blog_intro: value["intro"],
        blog_title: value["pitch"],
        blog_important: value["important"].strip == "!",
        blog_map_iframe: value["iframe"],
        blog_slug: value["slug"],
        blog_voir_aussi: ""
      )

      progression_index = 1
      value["cours"].each do |school|
        # case of course name starts with #
        if school["name"].start_with?('#')
          main_city.blog_voir_aussi += (school["name"] + "\n" + school["blog_text"] + "\n")
          main_city.save!
          next
        end

        # display progression
        puts "#{key} - #{school['name']} - #{progression_index}/#{value['cours'].size}"
        progression_index += 1

        password = SecureRandom.base64(5)
        next unless school["email"] != ""

        User.create!(
          email: school["email"]&.strip,
          password: password
        )
        AutoUser.create!(
          email: school["email"]&.strip,
          auto_str: password
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
            url: network
          )
        end
      end
    end
  end
end

# question sur les User et les Provider
