from rest_framework.permissions import BasePermission
class IsInternalAdmin(BasePermission):
    message = 'User must be an internal administrator'

    def has_permission(self, request, view):
        if request.user.role == 'admin':
            return True


class IsInternalUser(BasePermission):
    message = 'User must be an internal user'

    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated and request.user.role == 'internal':
            return True
        return False