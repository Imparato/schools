File.write("cours2.json", File.open("cours.json").read.gsub("\": ","\"=> ").gsub("[\"\"]", "[]"))
