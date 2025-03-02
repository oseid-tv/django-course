FROM python:3.12-bullseye
ENV PYTHONUNBUFFERED=1

RUN apt update
RUN apt install gettext -y

RUN mkdir /code

WORKDIR /code

RUN pip install poetry

COPY . .

RUN poetry install

RUN ls -R /code

EXPOSE 8000

ENTRYPOINT [ "poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000" ]