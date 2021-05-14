# update network list
namespace :init do
  desc "udpate/create Tags"
  task tables: :environment do
    
    # tags
    tags = {
      jours: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
      niveaux: ["tous", "débutants", "confirmés"],
      publics: ["tous", "à partir de 18 ans", "enfants", "adolescents", "adultes"],
      categories: ["improvisation", "théâtre de texte", "mime"],
      langues: ["en anglais", "en allemand", "en espagnol"]
    }
    tags.each do |category, names|
      names.each {|name| Tag.create(name: name, category: category.to_s)}
    end

  end
end
