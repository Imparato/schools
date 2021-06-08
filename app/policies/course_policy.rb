class CoursePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

   def show?
    record.address.school.user == user
  end

  def create?
    record.user == user
  end 

  def update?
    record.address.school.user == user
  end

  def destroy?
    record.address.school.user == user
  end
end