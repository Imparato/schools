ActiveAdmin.register Course do

 
  permit_params :published, :price, :start_time, :end_time, :description, :address_id, :price_period, :address,
    properties_attributes: [:id, :tag_id, :_destroy],
    teachings_attributes: [:id, :teacher_id, :_destroy]
    #
   index do
    selectable_column
    id_column
    column :published
    column :price_period
    column :teachers 
    column :address do |course| 
      course.address.address
    end 
    column :price
    column :tags
    column :start_time
    column :end_time
    column :school do |course|
        course.address.school
    end
    actions
  end

  show do 
    attributes_table do
      row :price_period
      row :price
      row :published
      row :school do |course|
        course.address.school
      end 
      row :tags
      row :start_time
      row :end_time
      row :teachers
      row :addresses do |course|
        course.address.address
      end
    end
  end

  # Formulaire d'edition et de création
  form do |f|
     f.semantic_errors *f.object.errors.keys
    f.inputs do
    f.input :published
    f.input :price
    f.input :price_period
      f.input :description
    
    end
    f.inputs do
      f.has_many :properties, heading: 'Tags', new_record: "Ajouter un tag", 
                              allow_destroy: true do |tag_form|
                              tag_form.input :tag
                              # tag_form.input :_destroy, as: :boolean, require: false 
      end
    end
    f.inputs do
      f.has_many :teachings,  heading: 'Teachers',  new_record: "Ajouter un prof",
                            allow_destroy: true do |teacher_form|
                              # teacher_form.select :teacher, options_for_select(Teacher.all.collect {|teacher| teacher.full_name  })
                              teacher_form.input :teacher
                            end
    end
    f.inputs do
      f.input :address.to_s
    end
      f.actions
  end
end
