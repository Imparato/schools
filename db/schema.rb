# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_12_135316) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.boolean "published"
    t.bigint "school_id", null: false
    t.string "address"
    t.string "address_complement"
    t.string "city"
    t.string "zipcode"
    t.text "details"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["school_id"], name: "index_addresses_on_school_id"
  end

  create_table "courses", force: :cascade do |t|
    t.boolean "published"
    t.float "price"
    t.text "description"
    t.bigint "address_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "price_period"
    t.index ["address_id"], name: "index_courses_on_address_id"
  end

  create_table "networks", force: :cascade do |t|
    t.bigint "school_id", null: false
    t.bigint "provider_id", null: false
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["provider_id"], name: "index_networks_on_provider_id"
    t.index ["school_id"], name: "index_networks_on_school_id"
  end

  create_table "properties", force: :cascade do |t|
    t.bigint "course_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["course_id"], name: "index_properties_on_course_id"
    t.index ["tag_id"], name: "index_properties_on_tag_id"
  end

  create_table "providers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.boolean "published"
    t.text "description"
    t.string "email"
    t.string "website"
    t.text "blog_default"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "imparato_blog_link"
    t.string "city"
    t.index ["user_id"], name: "index_schools_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.text "bio"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "school_id"
    t.index ["school_id"], name: "index_teachers_on_school_id"
  end

  create_table "teachings", force: :cascade do |t|
    t.bigint "course_id", null: false
    t.bigint "teacher_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["course_id"], name: "index_teachings_on_course_id"
    t.index ["teacher_id"], name: "index_teachings_on_teacher_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "addresses", "schools"
  add_foreign_key "courses", "addresses"
  add_foreign_key "networks", "providers"
  add_foreign_key "networks", "schools"
  add_foreign_key "properties", "courses"
  add_foreign_key "properties", "tags"
  add_foreign_key "schools", "users"
  add_foreign_key "teachers", "schools"
  add_foreign_key "teachings", "courses"
  add_foreign_key "teachings", "teachers"
end
