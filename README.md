> PyCon Tanzania website uses a batteries-included Django starter project. For a production-ready version see the book [Django for Professionals](https://djangoforprofessionals.com).

---

## Table of Contents

- **[Installation](#installation)**
  - [Pip](#pip)
  - [Pipenv](#pipenv)
  - [Docker](#docker)
- [Setup](#setup)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## 📖 Installation

PyCon website can be installed via Pip, Pipenv, or Docker depending upon your setup. To start, clone the repo to your local computer and change into the proper directory.

```
$ git clone https://github.com/pycontanzania/website.git pycontz
$ cd pycontz
```

### Pip

```
$ python3 -m venv pycontz
$ source pycontz/bin/activate
(pycontz) $ pip install -r requirements.txt
(pycontz) $ python manage.py migrate
(pycontz) $ python manage.py createsuperuser
(pycontz) $ python manage.py runserver
# Load the site at http://127.0.0.1:8000
```

### Pipenv

```
$ pipenv install
$ pipenv shell
(pycontz) $ python manage.py migrate
(pycontz) $ python manage.py createsuperuser
(pycontz) $ python manage.py runserver
# Load the site at http://127.0.0.1:8000
```

### Docker

```
$ docker build .
$ docker-compose up -d
$ docker-compose exec web python manage.py migrate
$ docker-compose exec web python manage.py createsuperuser
# Load the site at http://127.0.0.1:8000
```

For Docker, the `INTERNAL_IPS` configuration in `config/settings.py` must be updated to the following:

```python
# config/settings.py
# django-debug-toolbar
import socket
hostname, _, ips = socket.gethostbyname_ex(socket.gethostname())
INTERNAL_IPS = [ip[:-1] + "1" for ip in ips]
```

## Setup

```
# Run Migrations
(pycontz) $ python manage.py migrate

# Create a Superuser
(pycontz) $ python manage.py createsuperuser

# Confirm everything is working:
(pycontz) $ python manage.py runserver

# Load the site at http://127.0.0.1:8000
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome! See [CONTRIBUTING.md](https://github.com/pycontanzania/website/blob/master/CONTRIBUTING.md).

## ⭐️ Support

Give a ⭐️ if this project helped you!

## License

[The MIT License](LICENSE)

<!-- ## Docker Usage
```
# Build the Docker Image
$ docker-compose build

# Run Migrations
$ docker-compose run --rm web python manage.py migrate

# Create a Superuser
$ docker-compose run --rm web python manage.py createsuperuser

# Run Django on http://localhost:8000/
$ docker-compose up

# Run Django in background mode
$ docker-compose up -d

# Stop all running containers
$ docker-compose down

# Run Tests
$ docker-compose run --rm web pytest

# Re-build PIP requirements
$ docker-compose run --rm web pip-compile requirements/requirements.in
```-->

<!-- ## Next Steps

- Use [PostgreSQL locally via Docker](https://wsvincent.com/django-docker-postgresql/)
- Use [django-environ](https://github.com/joke2k/django-environ) for environment variables
- Update [EMAIL_BACKEND](https://docs.djangoproject.com/en/3.0/topics/email/#module-django.core.mail) to configure an SMTP backend
- Make the [admin more secure](https://opensource.com/article/18/1/10-tips-making-django-admin-more-secure)

## Adding Social Authentication

- [Configuring Google](https://wsvincent.com/django-allauth-tutorial-custom-user-model/#google-credentials)
- [Configuring Facebook](http://www.sarahhagstrom.com/2013/09/the-missing-django-allauth-tutorial/#Create_and_configure_a_Facebook_app)
- [Configuring Github](https://wsvincent.com/django-allauth-tutorial/)
- `django-allauth` supports [many, many other providers in the official docs](https://django-allauth.readthedocs.io/en/latest/providers.html) -->
