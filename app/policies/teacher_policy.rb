class TeacherPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

   def show?
    record.school.user == user
  end

  def create?
    record.school.user == user
  end 

  def update?
    record.school.user == user
  end

  def destroy?
    record.school.user == user
  end
end
