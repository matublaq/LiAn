from django.shortcuts import render

# Create your views here.


def new_dashboard(request):
    return render(request, 'dashboardnew.html')