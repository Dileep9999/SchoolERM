add_admin:
	echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@activate.org', 'pass')" | pipenv run python manage.py shell


run:
	python manage.py runserver

migrate:
	python manage.py makemigrations && python manage.py migrate
reset:
	rm -r ./db.sqlite3 && make migrate

env:
	source ../env/bin/activate
